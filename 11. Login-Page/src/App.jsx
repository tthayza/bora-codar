import logo from "./assets/logo.svg"

import "./styles/global.css"

function App(props) {
  return (
    <div className="app">
      <div className="left side">
        <div className="title">
          <img src={logo} alt="logo em espiral" />
          <h1> Vertigo</h1>
        </div>
        <div className="text">
          <h1>{props.title}</h1>
          <p> {props.description}</p>
        </div>
        {props.children}

      </div>
      <div className="right side">

      </div>
    </div>
  )
}

export default App
