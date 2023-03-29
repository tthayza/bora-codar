import React from 'react'
import shield from './assets/shield.svg'
import CreditCard from './components/CreditCard'
import './styles/global.css'

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="main">
          <div className="left side">
            <div className="form">
              <div className=" entry">
                <label htmlFor="card-number">Número do cartão</label>
                <input type="text" id="card-number" />
              </div>
              <div className=" entry">
                <label htmlFor="card-holder-name">Nome do titular</label>
                <input type="text" id="card-holder-name" />
              </div>
              <div className="data-card">
                <div className="entry">
                  <label htmlFor="validity">Validade</label>
                  <input type="text" name="" id="validity" />
                </div>
                <div className="entry">
                  <div className="entry">
                    <label htmlFor="code-card">CVV</label>
                  </div>
                  <input type="password" name="" id="code-card" />
                </div>
              </div>
            </div>
          </div>
          <div className="right side">
            <CreditCard />

            <div className="text-footer">
              <img src={shield} alt="" />
              <h2>Seus dados estão seguros</h2>
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
