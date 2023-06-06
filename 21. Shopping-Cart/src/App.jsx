import { useState } from 'react'
import CartProducts from './components/CartProducts'
import CurrentProduct from './components/CurrentProduct'
import { ProductContext } from './context/ProductContext'

function App() {
  const [total, setTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [currentName, setCurrentName] = useState('')
  const [currentPrice, setCurrentPrice] = useState('')
  const [currentImg, setCurrentImg] = useState('')
  // console.log('app:' + currentName)
  // console.log('app:' + currentImg)
  // console.log('app:' + currentPrice)
  const increaseValue = (currentPrice) => {
    setTotal(total + currentPrice)
    setTotalItems(totalItems + 1)
  }
  const decreasesValue = (currentPrice) => {
    setTotal(total - currentPrice)
    setTotalItems(totalItems - 1)
  }
  const showProduct = (productName, productPrice, productImage) => {
    setCurrentName(productName)
    setCurrentPrice(productPrice)
    setCurrentImg(productImage)

    // console.log('app:' + currentImg)
    console.log('app:' + currentPrice)
  }
  return (
    <main className="app">
      <ProductContext.Provider
        value={{
          total,
          totalItems,
          showProduct,
          increaseValue,
          decreasesValue
        }}
      >
        <div className="left">
          {currentName === '' ? (
            <h1 className="empty">Clique em um produto!</h1>
          ) : (
            <CurrentProduct
              name={currentName}
              price={currentPrice}
              image={currentImg}
            />
          )}
        </div>

        <CartProducts
          total={Number.parseFloat(total)}
          totalItems={totalItems}
          showProduct={showProduct}
        />
      </ProductContext.Provider>
    </main>
  )
}

export default App
