import { useState } from 'react'
import CartProducts from './components/CartProducts'
import CurrentProduct from './components/CurrentProduct'

function App() {
  const [total, setTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const increaseValue = (currentPrice) => {
    setTotal(total + currentPrice)
    setTotalItems(totalItems + 1)
  }
  const decreasesValue = (currentPrice) => {
    setTotal(total - currentPrice)
    setTotalItems(totalItems - 1)
  }
  return (
    <main className="app">
      <CurrentProduct />
      <CartProducts
        increase={increaseValue}
        decreases={decreasesValue}
        total={Number.parseFloat(total)}
        totalItems={totalItems}
      />
    </main>
  )
}

export default App
