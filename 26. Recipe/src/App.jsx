import { useState } from 'react'
import { Preview } from './components/Preview'
import { RecipePreparation } from './components/RecipePreparation'
import './styles/global.css'
function App() {
  const [serving, setServing] = useState(1)
  const servingHandler = (operation) => {
    if (operation === 'decreasing') {
      setServing(serving - 1)
    } else if (operation === 'increasing') setServing(serving + 1)
  }
  return (
    <div className="app">
      <Preview serving={serving} servingHandler={servingHandler} />
      <RecipePreparation serving={serving} />
    </div>
  )
}

export default App
