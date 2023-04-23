import React from 'react'
import { Contact } from './components/Contact'
import { Header } from './components/Header'

function App() {
  const contacts = [
    {
      nome: 'Alirio Burgues',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },
    {
      nome: 'Mayza Guimarães',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },
    {
      nome: 'Zeca Oliveira',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },

    {
      nome: 'Jorge Chaco',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },

    {
      nome: 'Frederico O. Guimarães',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },

    {
      nome: 'Gisele Guimarães',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/86.jpg'
    }
  ]
  const orderlyContacts = contacts.sort((a, b) => a.nome.localeCompare(b.nome))

  return (
    <div className="app">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        {/* <div className="letters">
          <div className="letter">
            <h2>A</h2>
          </div>
        </div> */}
        <div className="contacts-list">
          <Contact contacts={orderlyContacts} />
        </div>
      </div>
    </div>
  )
}

export default App
