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
      <div>
        <div className="infos"></div>
      </div>
    </div>
  )
}

export default Card
