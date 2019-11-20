import React from 'react'

const Slider = props => {
  return (
    <input
      type="range"
      className={props.modifier}
      min="0"
      max={props.maxRange}
      value={props.value}
      onChange={props.onChange}
    ></input>
  )
}

export default Slider
