import React from 'react'
import Button from './Button'

export default function ButtonGroup(props) {
  const myButtons=[
    {action: props.reset,      display: 'AC' },
    {action: props.changeSign, display: '+/-'},
    {action: props.percent,    display: '%'  },
    {action: props.operator,   display: '/'},
    {action: props.input,      display: '7'},
    {action: props.input,      display: '8'},
    {action: props.input,      display: '9'},
    {action: props.operator,   display: '*'},
    {action: props.input,      display: '4'},
    {action: props.input,      display: '5'},
    {action: props.input,      display: '6'},
    {action: props.operator,   display: '-'},
    {action: props.input,      display: '1'},
    {action: props.input,      display: '2'},
    {action: props.input,      display: '3'},
    {action: props.operator,   display: '+'},
    {action: props.input,      display: '0'},
    {action: props.input,      display: '.'},
    {action: props.submit,     display: '='}
  ]

  return (
    <div id="buttons-wrapper">
      {myButtons.map(btn => (
        <Button display={btn.display} key={btn.display} color={props.color}>
          {btn.action}
        </Button>
      ))}
    </div>
  )
}