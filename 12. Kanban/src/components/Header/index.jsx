import React, { useState } from 'react'
import filter from '../../assets/filter.svg'
import kanban from '../../assets/kanban.png'
import profile from '../../assets/profile-picture.png'
import './styles.css'

function Header(props) {
  const [valueSearch, setValueSearch] = useState('')
  console.log(valueSearch)
  return (
    <div className="header">
      <div className="title">
        <div className="text-content">
          <h1>Meu Kanban</h1>
          <img src={kanban} alt="ícone de post-its simulando método kanban" />
        </div>
        <div className="profile-picture">
          <img src={profile} alt="rosto de uma mulher sorrindo" />
        </div>
      </div>
      <div className="search-filter">
        <div className="btn-filter">
          <button onClick={() => props.findTask(valueSearch)}>
            <img
              src={filter}
              alt="ícone de três linhas que diminuem de cima para baixo"
            />
            Filtrar
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Busque por cards, assuntos ou responsáveis..."
            onChange={e => setValueSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
export default Header
