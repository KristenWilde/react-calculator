import React from 'react'
import ButtonGroup from './ButtonGroup'
import Screen from './Screen'

export default function CalculatorUI(props) {
  return (
    <div id="calculator" style={{background: props.colors.mainColor}}>
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
        color={props.colors.buttonColor}
      />
    </div>
  )
}