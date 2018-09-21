import React, { Component } from 'react';
import Calculator from './Calculator';
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

function ColorSection(props) {
  const colors = ['hotpink', 'lightsalmon', 'khaki', 'yellowgreen',
                  'lightskyblue', 'mediumorchid', 'white']

  return (
    <div id="color-pickers">
      <h2>Choose your colors:</h2>
      <ColorPicker 
        setColor={props.setColor} 
        colorChoices={colors}
        selectedColor={props.mainColor}
      >
        Calculator
      </ColorPicker>
      <ColorPicker 
        setColor={props.setColor} 
        colorChoices={colors}
        selectedColor={props.buttonColor}
      >
        Buttons
      </ColorPicker>
    </div>
  )
}

function ColorPicker(props) {
  function colorSelected(colorName) {
    return colorName === props.selectedColor
  }

  function selectedClass(colorName) {
    return colorSelected(colorName) ? 'selected' : ''
  }

  return (
    <div>
      <h3>{props.children}</h3>
      {props.colorChoices.map(colorName => (
        <label 
          className={`color-choice ${selectedClass(colorName)}`}
          style={{ 
            background: colorName
          }}
        >
          <input 
            key={colorName}
            type="radio"
            name={props.children} 
            checked={colorSelected(colorName)}
            onChange={() => props.setColor(props.children, colorName)}
          />
        </label>
      ))}
    </div>
  )
}

/*<input 
          type="radio"
          style={{background: colorName }} 
          name="color" 
          checked={colorName === props.selectedColor}
        />
className={colorSelected(colorName) && 'selected'}
        */
