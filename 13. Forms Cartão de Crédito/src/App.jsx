import React, { useState } from 'react'
import shield from './assets/shield.svg'
import CreditCard from './components/CreditCard'
import './styles/global.css'

const App = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardValidity, setCardValidity] = useState('')
  const [cardCodeCard, setCardCodeCard] = useState('')
  const [showBack, setShowBack] = useState(false)
  function flipCard() {
    setShowBack(!showBack)
  }
  console.log(showBack)

  return (
    <div className="app">
      <div className="container">
        <div className="main">
          <div className="left side">
            <div className="form">
              <div className=" entry">
                <label htmlFor="card-number">Número do cartão</label>
                <input
                  placeholder="Número do cartão"
                  type="text"
                  id="card-number"
                  onChange={e => setCardNumber(e.target.value)}
                />
              </div>
              <div className=" entry">
                <label htmlFor="card-holder-name">Nome do titular</label>
                <input
                  placeholder="Nome como está no cartão"
                  type="text"
                  id="card-holder-name"
                  onChange={e =>
                    setCardHolderName(e.target.value.toUpperCase())
                  }
                />
              </div>
              <div className="data-card">
                <div className="entry">
                  <label htmlFor="validity">Validade</label>
                  <input
                    placeholder="mm/aa"
                    type="text"
                    name=""
                    id="validity"
                    onChange={e => setCardValidity(e.target.value)}
                  />
                </div>
                <div className="entry">
                  <div className="entry">
                    <label htmlFor="code-card">CVV</label>
                  </div>
                  <input
                    placeholder="***"
                    type="password"
                    name=""
                    id="code-card"
                    onChange={e => setCardCodeCard(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right side">
            <CreditCard
              cardNumber={cardNumber}
              cardHolderName={cardHolderName}
              cardValidity={cardValidity}
              cardCodeCard={cardCodeCard}
              showback={showBack}
            />

            <div className="text-footer">
              <div className="text">
                <img src={shield} alt="" />
                <h2>Seus dados estão seguros</h2>
              </div>
              <div className="btn-turn">
                <button className="btn-turning" onClick={flipCard}></button>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button>Adicionar cartão</button>
        </div>
      </div>
    </div>
  )
}

export default App
