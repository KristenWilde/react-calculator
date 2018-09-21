import React from 'react'

export default function Screen(props) {
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