import React, { Component } from 'react';
import Calculator from './Calculator';
import ColorSection from './ColorSection';
import './App.css';

export default class App extends Component {
  state = {
    mainColor: 'lightskyblue',
    buttonColor: 'white'
  }

  setColor = (part, colorString) => {
    part === 'Calculator' 
    ? this.setState({ mainColor: colorString })
    : this.setState({ buttonColor: colorString })
  }

  render() {
    return (
      <main>
        <h1>Colorful Calculator</h1>
        <Calculator 
          colors={{...this.state}}
        />
        <ColorSection
          mainColor={this.state.mainColor}
          buttonColor={this.state.buttonColor}
          setColor={this.setColor}
        />
      </main>
    )
  }
}




