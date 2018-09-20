import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    num1: '',
    num2: '',
    answer: '',
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
    this.setState({ answer })
  }


  render() {
    return (
      <CalculatorUI 
        handleOperatorClick={this.handleOperatorClick}
        handleNumberClick={this.handleNumberClick}
        reset={this.reset}
        screenValue={ this.state.answer || this.state.num2 || this.state.num1 }
        submit={this.calculate}
      />
    )
  }
}

function CalculatorUI(props) {
  return (
    <div id="calculator">
      <div id="screen">{props.screenValue}</div>
      <ButtonGroup 
        handleOperatorClick={props.handleOperatorClick}
        handleNumberClick={props.handleNumberClick}
        reset={props.reset}
        submit={props.submit}
      />
    </div>
  )
}

function ButtonGroup(props) {
  return (
    <div id="buttons-wrapper">
      <button onClick={props.reset}>AC</button>
      <button>+/-</button>
      <button>%</button>
      <button onClick={() => props.handleOperatorClick('/')}>/</button>

      <button onClick={() => props.handleNumberClick('7')}>7</button>
      <button onClick={() => props.handleNumberClick('8')}>8</button>
      <button onClick={() => props.handleNumberClick('9')}>9</button>
      <button onClick={() => props.handleOperatorClick('*')}>*</button>

      <button onClick={() => props.handleNumberClick('4')}>4</button>
      <button onClick={() => props.handleNumberClick('5')}>5</button>
      <button onClick={() => props.handleNumberClick('6')}>6</button>
      <button onClick={() => props.handleOperatorClick('-')}>-</button>

      <button onClick={() => props.handleNumberClick('1')}>1</button>
      <button onClick={() => props.handleNumberClick('2')}>2</button>
      <button onClick={() => props.handleNumberClick('3')}>3</button>
      <button onClick={() => props.handleOperatorClick('+')}>+</button>

      <button onClick={() => props.handleNumberClick('0')}>0</button>
      <button onClick={() => props.handleNumberClick('.')}>.</button>
      <button onClick={() => props.submit()}>=</button>
    </div>
  )
}
