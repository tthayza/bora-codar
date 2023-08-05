import { CalendarBlank, Clock, PlayCircle, Star } from '@phosphor-icons/react'
import poster from '../../assets/poster.svg'
import './style.css'

const Card = () => {
  return (
    <div className="card">
      <header>
        <h2>Barbie</h2>
        <span className="stars">
          <Star color="yellow" /> 4.9
        </span>
      </header>
      <main>
        <img src={poster} alt="" />
      </main>
      <footer>
        <section className="movie-infos">
          <span className="duration">
            <Clock /> 1:54:00
          </span>
          <span className="">
            <CalendarBlank /> 2023
          </span>
        </section>
        <button>
          <PlayCircle /> Assistir trailer
        </button>
      </footer>
    </div>
  )
}

export default Card
