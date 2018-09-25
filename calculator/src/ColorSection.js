import React from 'react'
import ColorPicker from './ColorPicker'

export default function ColorSection(props) {
  let mainColors = new Array(6).fill('el').map(el => randcolor())
  let buttonColors = new Array(6).fill('el').map(el => randcolor())

  function randcolor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }

  return (
    <div id="color-pickers">
      <h2>Choose your colors:</h2>
      <ColorPicker 
        setColor={props.setColor} 
        colorChoices={mainColors}
        selectedColor={props.mainColor}
      >
        Calculator
      </ColorPicker>
      <ColorPicker 
        setColor={props.setColor} 
        colorChoices={buttonColors}
        selectedColor={props.buttonColor}
      >
        Buttons
      </ColorPicker>
    </div>
  )
}