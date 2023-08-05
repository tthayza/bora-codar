import { useState } from 'react'
import beforeImg from './assets/image.png'
import afterImg from './assets/pixelated-image.png'
import './styles/global.css'

const App = () => {
  const [sliderValue, setSliderValue] = useState(50)

  const handleSliderChange = (value) => {
    setSliderValue(value)
  }

  return (
    <main className="app">
      <h1>Antes e depois com imagem gerada por IA</h1>
      <section className="container">
        <figure className="before">
          <img src={beforeImg} alt="Low Quality" />
        </figure>
        <figure className="after" style={{ width: `${sliderValue}%` }}>
          <img src={afterImg} alt="High Quality" />
        </figure>

        <input
          type="range"
          min="0"
          max="100"
          id="slider"
          onInput={(e) => handleSliderChange(e.target.value)}
        />
      </section>
    </main>
  )
}

export default App
