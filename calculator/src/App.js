import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    num1: '',
    num2: '',
    operator: null,
  }

  handleOperatorClick = (char) => {
    this.setState({ operator: char })
  }

  reset = (e) => {
    this.setState({ num1: '', num2: '', operator: null, answer: '' })
  }

  handleNumberClick = (char) => {
    if (this.state.operator) {
      const num2 = this.state.num2 + char
      this.setState({ num2 })
    } else {
      const num1 = this.state.num1 + char
      this.setState({ num1 })
    }
  }

  percent = (e) => {
    console.log('called percent')
    if (this.state.operator) {
      if (this.state.num2.includes('.')) {
        return
      }
      const num2 = String(Number(this.state.num2) / 100)
      this.setState({ num2 })
    } else {
      if (this.state.num1.includes('.')) {
        return
      }
      const num1 = String(Number(this.state.num1) / 100)
      this.setState({ num1 })
    }
  }

  changeSign = (e) => {
    if (this.state.operator) {
      const num2 = String(Number(this.state.num2) * -1)
      this.setState({ num2 })
    } else {
      const num1 = String(Number(this.state.num1) * -1)
      this.setState({ num1 })
    }
  }

  calculate = () => {
    const num1 = Number(this.state.num1)
    const num2 = Number(this.state.num2)
    let answer;
    switch (this.state.operator) {
      case '+':
        answer = num1 + num2
        break
      case '-':
        answer = num1 - num2
        break
      case '*':
        answer = num1 * num2
        break
      case '/':
        answer = num1 / num2
        break
    }
    this.setState({ num1: String(answer), num2: '', operator: null })
  }

  render() {
    return (
      <CalculatorUI 
        handleOperatorClick={this.handleOperatorClick}
        handleNumberClick={this.handleNumberClick}
        reset={this.reset}
        output={this.state.num2 || this.state.num1}
        throwError={this.throwError}
        submit={this.calculate}
        percent={this.percent}
        changeSign={this.changeSign}
      />
    )
  }
}

function CalculatorUI(props) {
  return (
    <div id="calculator">
      <Screen 
        output={props.output}
        throwError={props.throwError}
      />
      <ButtonGroup 
        operator={props.handleOperatorClick}
        input={props.handleNumberClick}
        reset={props.reset}
        submit={props.submit}
        percent={props.percent}
        changeSign={props.changeSign}
      />
    </div>
  )
}

function Screen(props) {
  function roundForScreen(numString) {
    const MAXLENGTH = 12

    if (numString.length <= MAXLENGTH) {
      return numString
    }
    if (Number(numString) > MAXLENGTH * 10 ) {
      return 'Err - press AC'
    }
    const integerPartLength = String(Math.trunc(Number(numString))).length
    const decimalPartLength = MAXLENGTH - integerPartLength
    return Number(numString).toFixed(decimalPartLength)
  }

  return <div id="screen">{roundForScreen(props.output) || 0}</div> 
}

function ButtonGroup(props) {
  const myButtons=[
    {action: props.reset,      display: 'AC' },
    {action: props.changeSign, display: '+/-'},
    {action: props.percent,    display: '%'  },
    {action: props.operator,   display: '/'},
    {action: props.input,      display: '7'},
    {action: props.input,      display: '8'},
    {action: props.input,      display: '9'},
    {action: props.operator,   display: '*'},
    {action: props.input,      display: '4'},
    {action: props.input,      display: '5'},
    {action: props.input,      display: '6'},
    {action: props.operator,   display: '-'},
    {action: props.input,      display: '1'},
    {action: props.input,      display: '2'},
    {action: props.input,      display: '3'},
    {action: props.operator,   display: '+'},
    {action: props.input,      display: '0'},
    {action: props.input,      display: '.'},
    {action: props.submit,     display: '='}
  ]

  return (
    <div id="buttons-wrapper">
      {myButtons.map(btn => (
        <Button display={btn.display} key={btn.display}>
          {btn.action}
        </Button>
      ))}
    </div>
  )
}

function Button(props) {
  return (
    <button onClick={() => props.children(props.display)}>
      {props.display}
    </button>
  )
}
