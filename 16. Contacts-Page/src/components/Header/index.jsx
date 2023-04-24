import React, { useState } from 'react'
import add from '../../assets/add.svg'
import pencil from '../../assets/pencil.svg'
import search from '../../assets/search.svg'
import trash from '../../assets/trash.svg'
import './styles.css'

export const Header = (props) => {
  const { findingContact } = props
  const [contactName, setContactName] = useState('')
  return (
    <div className="header">
      <div className="header-content">
        <div className="title">
          <h1>Meus Contatos</h1>
        </div>
        <div className="actions">
          <img src={add} alt="ícone de mais, para adicionar contato" />
          <img src={pencil} alt="ícone de lápis, para editar contato" />
          <img src={trash} alt="ícone de lata de lixo, para excluir contato" />
        </div>
      </div>
      <div className="filter-content">
        <input
          type="text"
          name=""
          id=""
          placeholder="Busque por nome ou por dados de contato..."
          onChange={(e) => setContactName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log('entrou')
              findingContact(contactName)
            }
          }}
        />
        <img src={search} alt="" width="16px" height="16px" />
      </div>
    </div>
  )
}
