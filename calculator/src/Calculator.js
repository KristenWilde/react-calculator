import React, { Component } from 'react';
import CalculatorUI from './CalculatorUI'
import './App.css';

export default class Calculator extends Component {
  state = {
    num1: '',
    num2: '',
    operator: null,
  }

  MAXLENGTH = 12

  handleOperatorClick = (char) => {
    this.setState({ operator: char })
  }

  reset = (e) => {
    this.setState({ num1: '', num2: '', operator: null })
  }

  handleNumberClick = (char) => {
    if (this.state.operator) {     
      const num2 = this.state.num2 + char
      if (this.validLengthAndDecimal(num2)) {
        this.setState({ num2 })
      }
    } else {
      const num1 = this.state.num1 + char
      if (this.validLengthAndDecimal(num1)) {
        this.setState({ num1 })
      }
    }
  }

  validLengthAndDecimal(output) {
    return (output.length <= this.MAXLENGTH &&
      output.match(/^-?\d*\.?\d*$/))
  }

  percent = (e) => {
    if (this.state.operator) {
      const num2 = String(Number(this.state.num2) / 100)
      this.setState({ num2 })
    } else {
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
    this.setState({ num1: String(answer), num2: '' })
  }

  render() {
    return (
      <CalculatorUI 
        handleOperatorClick={this.handleOperatorClick}
        handleNumberClick={this.handleNumberClick}
        reset={this.reset}
        output={this.state.num2 || this.state.num1}
        submit={this.calculate}
        percent={this.percent}
        changeSign={this.changeSign}
        colors={this.props.colors}
      />
    )
  }
}








