import logo from "./assets/logo.svg"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import "./styles/global.css"
function App() {

  return (
    <div className="app">
      <div className="left side">
        <div className="title">
          <img src={logo} alt="logo em espiral" />
          <h1> Vertigo</h1>
        </div>
        <div className="text">
          <h1>Acesse a plataforma</h1>
          <p> Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
        </div>
        <SignIn />

      </div>
      <div className="right side">

      </div>
    </div>
  )
}

export default App
