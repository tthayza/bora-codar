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
      image: 'https://randomuser.me/api/portraits/women/87.jpg'
    },
    {
      nome: 'Zeca Oliveira',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/42.jpg'
    },

    {
      nome: 'Jorge Chaco',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/28.jpg'
    },

    {
      nome: 'Frederico O. ',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/men/18.jpg'
    },

    {
      nome: 'Gisele Guimarães',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
      nome: 'Gisele Guimarães',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
      nome: 'Gisele Guimarães',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
      nome: 'Gisele Guimarães',
      number: '44 5421 5522',
      image: 'https://randomuser.me/api/portraits/women/67.jpg'
    }
  ]
  const orderlyContacts = contacts.sort((a, b) => a.nome.localeCompare(b.nome))

  let initials = []
  orderlyContacts.forEach((contact) => {
    if (!initials.includes(contact.nome[0])) {
      initials.push(contact.nome[0])
      contact.hasInitial = true
    } else {
      contact.hasInitial = false
    }
  })

  return (
    <div className="app">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        <Contact contacts={orderlyContacts} />
      </div>
    </div>
  )
}

export default App
