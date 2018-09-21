import React, { Component } from 'react';
import CalculatorUI from './CalculatorUI'
import './App.css';

export default class Calculator extends Component {
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
        colors={this.props.colors}
      />
    )
  }
}








