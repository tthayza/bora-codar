import { useState } from 'react'
import './style.css'
const Product = (props) => {
  const [amount, setAmount] = useState(0)
  const { name, price, image, increase, decreases } = props
  const formatedName =
    name.replace(/\s/g, '').length <= 58
      ? name
      : name.substring(0, 59).concat('...')
  const formatedPrice = Number.parseFloat(price).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  const decreasesAmount = () => {
    setAmount(amount - 1)
    decreases(Number.parseFloat(price))
  }
  const increaseAmount = () => {
    setAmount(amount + 1)
    increase(Number.parseFloat(price))
  }
  return (
    <div className="product">
      <figure>
        <img src={image} alt="imagem do produto" />
      </figure>
      <div className="description">
        <div className="product-name">
          <h3>{formatedName}</h3>
        </div>
        <div className="infos">
          <p>{formatedPrice}</p>
          <div className="amount">
            <button
              className="minus btn"
              onClick={decreasesAmount}
              disabled={amount <= 0}
            ></button>
            <p>{amount}</p>
            <button className="plus btn" onClick={increaseAmount}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
