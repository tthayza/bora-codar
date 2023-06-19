import { ContrastIcon, PaletteIcon, SunDimIcon } from 'lucide-react'
import { useState } from 'react'
import { Preview } from './components/Preview'
import { RangeSlider } from './components/RangeSlider'
import './styles/global.css'

function App() {
  const [currentColor, setCurrentColor] = useState(335)
  const [currentBrightness, setCurrentBrightness] = useState(50)
  const [currentContrast, setCurrentContrast] = useState(50)
  const hslString = `hsl(${currentColor}, ${currentContrast}%, ${currentBrightness}%)`
  return (
    <div className="app">
      <main className="container">
        <section>
          <Preview
            currentColor={hslString}
            brightnessPercent={currentBrightness}
            contrastPercent={currentContrast}
          />
        </section>
        <section>
          <h1>Ajustes de iluminação</h1>
          <div className="sliders">
            <RangeSlider
              name="color"
              setValue={setCurrentColor}
              icon={<PaletteIcon size={24} color="white" />}
              maxValue={360}
            />
            <RangeSlider
              name="brightness"
              setValue={setCurrentBrightness}
              icon={<SunDimIcon size={24} color="white" />}
              value={50}
            />
            <RangeSlider
              name="contrast"
              setValue={setCurrentContrast}
              icon={<ContrastIcon size={24} color="white" />}
              value={50}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
