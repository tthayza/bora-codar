import React from 'react'
import Table from './components/Table'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Table
          title="Para você começar"
          name="Essentials"
          price="19,97/mês"
          benefits={['Até 3 usuários', 'Autoatendimento']}
        />
        <Table
          title="Para você decolar"
          name="Ultimate"
          price="29,97/mês"
          benefits={[
            'Usuários ilimitados',
            'Suporte 24/7',
            'CSM Dedicado',
            'Treinamentos'
          ]}
        />
        <Table
          title="Para sua empresa"
          name="Enterprise"
          benefits={[
            'Plano customizado especialmente para a necessidade de seu negocio'
          ]}
        />
      </div>
    </div>
  )
}

export default App
