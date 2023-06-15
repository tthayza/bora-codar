import { Circle } from './components/Circle'
import { RangeSlider } from './components/RangeSlider'
import './styles/global.css'
function App() {
  return (
    <div className="app">
      <main className="container">
        <section>
          <Circle />
        </section>
        <section>
          <h1>Ajustes de iluminação</h1>
          <div className="ranges">
            <RangeSlider name="color" />
            <RangeSlider name="brightness" />
            <RangeSlider name="contrast" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
