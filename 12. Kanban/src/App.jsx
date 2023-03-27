// import { useState } from 'react'
import Kanban from "./components/Kanban"
import LateralMenu from "./components/LateralMenu"
import "./styles/global.css"

function App() {
  return(
    <div className="app">
      <LateralMenu />
      <Kanban />
    </div>
  )
}

export default App
