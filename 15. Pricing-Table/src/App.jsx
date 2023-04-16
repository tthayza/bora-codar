import React from 'react'
import Table from './components/Table'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Table title="Para você começar" name="Essentials" price="19,97/mês" />
        <Table title="Para você decolar" name="Ultimate" price="29,97/mês" />
        <Table title="Para sua empresa" name="Enterprise" />
      </div>
    </div>
  )
}

export default App
