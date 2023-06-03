import { useState } from 'react'
import CartProducts from './components/CartProducts'
import CurrentProduct from './components/CurrentProduct'

function App() {
  const [total, setTotal] = useState(0)
  const increaseValue = (currentPrice) => {
    setTotal(total + currentPrice)
  }
  const decreasesValue = (currentPrice) => {
    setTotal(total - currentPrice)
  }
  return (
    <main className="app">
      <CurrentProduct />
      <CartProducts
        increase={increaseValue}
        decreases={decreasesValue}
        total={Number.parseFloat(total)}
      />
    </main>
  )
}

export default App
