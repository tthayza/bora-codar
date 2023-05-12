import React from 'react'
import character from '../../assets/Character.png'
import './styles.css'

const Card = () => {
  return (
    <div className="main card">
      <div className="header">
        <div className="title">
          <h1>Rey Skywalker</h1>
          <p>
            Era uma catadora de sucata que descobriu ser sensível à Força
            durante sua busca ao lendário Mestre Jedi Luke Skywalker.
          </p>
        </div>
        <div className="character-img">
          <img src={character} alt="" />
        </div>
      </div>
      <div className="infos">
        <ul>
          <li>Filmes</li>
          <p>
            The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces of
            Destiny
          </p>
          <li>Espécie</li>
          <p>Humana</p>
          <li>Altura</li>
          <p>1,7m</p>
          <li>Localidade</li>
          <p>Jakku</p>
          <li>Armas</li>
          <p>Sabre de luz, Blaster, Quarterstaff</p>
        </ul>
      </div>
    </div>
  )
}

export default Card
