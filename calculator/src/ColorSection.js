import React from 'react'
import ColorPicker from './ColorPicker'

export default function ColorSection(props) {
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