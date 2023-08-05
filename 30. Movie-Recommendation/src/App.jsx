import { Lightning } from '@phosphor-icons/react'
import logo from './assets/logo.svg'
import Card from './components/Card'
import './styles/global.css'
function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <img src={logo} alt="logomarca" />
          <button>
            Nova recomendação
            <Lightning />
          </button>
        </header>
        <main className="main">
          <Card />
        </main>
      </div>
    </div>
  )
}

export default App
