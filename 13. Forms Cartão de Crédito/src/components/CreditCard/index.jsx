import React from 'react'
import contactPayment from '../../assets/contact-payment.svg'
import elo from '../../assets/elo.svg'
import './styles.css'
//n consegui importar o simbolo de contato por pagamento
const CreditCard = () => {
  // const flags = {
  //   {
  //     mastercard: {mastercard}
  //   },
  //   {
  //     visa: {visa}
  //   },
  //   { elo: {elo}
  //   }
  //   4 visa
  // 2 ou 5 mastercard
  // 6 elo
  // }
  return (
    <div className="credit-card">
      <div className="logo">
        <img src={elo} alt="" />
        <img src={contactPayment} alt="" />
      </div>
      <div className="number-card">
        <h1>4215 4545 5454 7444</h1>
      </div>
      <div className="name-expiry">
        <h1>Seu nome aqui</h1>
        <h1>00 / 00</h1>
      </div>
    </div>
  )
}
export default CreditCard
