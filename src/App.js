import React, { useState } from 'react'
import Slider from './components/Slider'

const App = () => {
  const [hueValue, setHueValue] = useState(Math.floor(Math.random() * 360))
  const [saturationValue, setSaturationValue] = useState(
    Math.floor(Math.random() * 100)
  )
  const [lightnessValue, setLightnessValue] = useState(
    Math.floor(Math.random() * 100)
  )

  const updateHue = event => {
    console.log(event.target.value)
    setHueValue(event.target.value)
  }

  const updateSaturation = event => {
    console.log(event.target.value)
    setSaturationValue(event.target.value)
  }

  const updateLightness = event => {
    console.log(event.target.value)
    setLightnessValue(event.target.value)
  }

  const randomColor = () => {
    setHueValue(Math.floor(Math.random() * 360))
    setSaturationValue(Math.floor(Math.random() * 100))
    setLightnessValue(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <h1>Color Picker</h1>
      <section className="sliders">
        Hue
        <Slider
          modifier="hue"
          maxRange="360"
          value={hueValue}
          onChange={updateHue}
        />
        Saturation
        <Slider
          modifier="saturation"
          maxRange="100"
          value={saturationValue}
          onChange={updateSaturation}
        />
        Lightness
        <Slider
          modifier="lightness"
          maxRange="100"
          value={lightnessValue}
          onChange={updateLightness}
        />
      </section>
      <section
        className="color-display"
        style={{
          backgroundColor:
            'hsl(' +
            hueValue +
            ',' +
            saturationValue +
            '%,' +
            lightnessValue +
            '%)',
        }}
      ></section>
      <section className="hsl-display">
        {' '}
        hsl(
        {hueValue}, %{saturationValue}, %{lightnessValue})
      </section>
      <section className="button-holder">
        <button className="random" onClick={randomColor}>
          random color
        </button>
      </section>
    </>
  )
}

export default App
