import React from 'react'

export default function Screen({ output }) {
  function roundForScreen(numString) {
    const MAXLENGTH = 12

    if (numString.length <= MAXLENGTH) {
      return numString
    }
    if (Number(numString) > Math.pow(10, MAXLENGTH)) {
      return Number(numString).toExponential(MAXLENGTH - 6)
    }
    const integerPartLength = String(Math.trunc(Number(numString))).length
    const decimalPartLength = MAXLENGTH - integerPartLength
    return Number(numString).toFixed(decimalPartLength)
  }

  return <div id="screen">{roundForScreen(output) || 0}</div> 
}