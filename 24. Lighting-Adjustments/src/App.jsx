import { ContrastIcon, PaletteIcon, SunDimIcon } from 'lucide-react'
import { useState } from 'react'
import { Preview } from './components/Preview'
import { RangeSlider } from './components/RangeSlider'
import './styles/global.css'

function App() {
  const [currentColor, setCurrentColor] = useState('white')
  const [currentBrightness, setCurrentBrightness] = useState(0)
  const [currentContrast, setCurrentContrast] = useState(0)

  return (
    <div className="app">
      <main className="container">
        <section>
          <Preview
            currentColor={currentColor}
            brightnessPercent={currentBrightness}
            contrastPercent={currentContrast}
          />
        </section>
        <section>
          <h1>Ajustes de iluminação</h1>
          <div className="sliders">
            <RangeSlider
              name="color"
              color={currentColor}
              setValue={setCurrentColor}
              icon={<PaletteIcon size={24} color="white" />}
            />
            <RangeSlider
              name="brightness"
              setValue={setCurrentBrightness}
              icon={<SunDimIcon size={24} color="white" />}
            />
            <RangeSlider
              name="contrast"
              setValue={setCurrentContrast}
              icon={<ContrastIcon size={24} color="white" />}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
