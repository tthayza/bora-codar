import React, { useState } from 'react'
import contactPayment from '../../assets/contact-payment.svg'
import elo from '../../assets/elo.svg'
import mastercard from '../../assets/mastercard.svg'
import visa from '../../assets/visa.svg'
import './styles.css'

const CreditCard = props => {
  const [showBack, setShowBack] = useState(false)
  function flipCard() {
    setShowBack(!showBack)
  }
  const { cardNumber, cardHolderName, cardValidity, cardCodeCard } = props

  const setCurrentFlag = currentFlag => {
    if (currentFlag == '5' || currentFlag == '2') {
      return mastercard
    } else if (currentFlag == '6') {
      return visa
    }
    return elo
  }
  console.log(cardCodeCard)
  const formatedValidity = date => {
    const formatedDate = date.padEnd(4, '•').match(/.{1,2}/g)
    return (
      <h1>
        {formatedDate[0]}/{formatedDate[1]}
      </h1>
    )
  }
  return (
    <div
      className={`credit-card  ${showBack ? 'flip' : ''}`}
      onClick={flipCard}
    >
      <div className=" card-front">
        <div className="logo">
          <img src={setCurrentFlag(cardNumber[0])} alt="" />
          <img src={contactPayment} alt="" />
        </div>
        <div className="number-card">
          {cardNumber
            .padEnd(16, '•')
            .match(/.{1,4}/g)
            .map((subtring, index) => (
              <h1 key={index}>{subtring}</h1>
            ))}
        </div>
        <div className="name-expiry">
          <h1>{cardHolderName || 'Seu nome aqui'} </h1>
          {formatedValidity(cardValidity)}
        </div>
      </div>
      <div className=" card-back">
        <div className="black-belt"></div>
        <div className="cvv-area">
          <p className="code-area">{cardCodeCard}</p>
          <p className="cvv">CVV</p>
        </div>
      </div>
    </div>
  )
}
export default CreditCard
