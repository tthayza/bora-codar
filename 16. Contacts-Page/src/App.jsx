import React from 'react'
import { Contact } from './components/Contact'
import { Header } from './components/Header'

function App() {
  return (
    <div className="app">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        <div className="letters">
          <div className="letter">
            <h2>A</h2>
          </div>
        </div>
        <div className="contacts-list">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
