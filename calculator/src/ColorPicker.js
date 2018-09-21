import React from 'react'

export default function ColorPicker(props) {
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