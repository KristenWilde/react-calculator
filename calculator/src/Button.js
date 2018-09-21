import React from 'react'

export default function Button(props) {
  return (
    <button onClick={() => props.children(props.display)} style={{background: props.color}}>
      {props.display}
    </button>
  )
}