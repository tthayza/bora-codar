import Card from './components/Card'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="previous card">
          <h1>FINN</h1>
        </div>
        <Card />
        <div className="next card">
          <h1>BB-8</h1>
        </div>
      </div>
    </div>
  )
}

export default App
