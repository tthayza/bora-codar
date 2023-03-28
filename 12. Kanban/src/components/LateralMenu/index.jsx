import React, { useEffect } from 'react'
import cog from '../../assets/cog.svg'
import document from '../../assets/document.svg'
import logo from '../../assets/logo.svg'
import people from '../../assets/people.svg'
import tablet from '../../assets/tablet.svg'
import './styles.css'

function LateralMenu() {
  useEffect(() => {
    console.log('LateralMenu')
  }, [])
  return (
    <div className="lateral-menu">
      <img src={logo} alt="logo em formato de caracol" />
      <div className="pages">
        <div className="page">
          <img src={tablet} alt="ícone de tablet" />
          <h3>Boards</h3>
        </div>
        <div className="page">
          <img src={people} alt="ícone de bonecos simulando pessoas" />
          <h3>Equipes</h3>
        </div>
        <div className="page">
          <img src={document} alt="ícone de documento de texto" />
          <h3>Relatórios</h3>
        </div>
        <div className="page">
          <img src={cog} alt="ícone de engrenagem" />
          <h3>Ajustes</h3>
        </div>
      </div>
    </div>
  )
}

export default LateralMenu
