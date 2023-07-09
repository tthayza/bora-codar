import numberFour from './assets/four.svg'
import './styles/global.css'
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="error-code">
          <img src={numberFour} alt="número quatro preenchido na cor roxa" />
          <iframe src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json"></iframe>
          <img src={numberFour} alt="número quatro preenchido na cor roxa" />
        </div>
        <div className="error-infos">
          <h1>Ops, esta página não foi encontrada</h1>
          <p>
            Parece que você se perdeu... Tente voltar para a página anterior ou
            acessar a home.
          </p>
          <div className="buttons-area">
            <button className="btn">voltar</button>
            <button className="btn">ir para a home</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
