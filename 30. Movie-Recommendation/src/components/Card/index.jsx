import { CalendarBlank, Clock, PlayCircle, Star } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import './style.css'

const Card = (props) => {
  const { movie } = props
  const [movieDetails, setMovieDetails] = useState({})
  const [movieInfos, setMovieInfos] = useState({})
  useEffect(() => {
    async function getMoreMovieInfo(id) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }
      }
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        ).then((response) => response.json())
        const infos = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        ).then((response) => response.json())
        setMovieInfos(infos)
        setMovieDetails(data)
      } catch (error) {
        console.error(error)
      }
    }
    getMoreMovieInfo(movie.id)
  }, [movie.id])

  function watchTrailer() {
    window.open(`https://www.youtube.com/watch?v=${movieInfos.results[0].key}`)
  }
  return (
    <div className="card">
      <header>
        <h2>{movie.title}</h2>
        <span className="stars">
          <Star color="yellow" /> {movie.vote_average}
        </span>
      </header>
      <main>
        <img
          width="194"
          src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
          alt=""
        />
      </main>
      <footer>
        <section className="movie-infos">
          <span className="duration">
            <Clock />{' '}
            {`${Math.floor(movieDetails.runtime / 60)}:${
              movieDetails.runtime % 60 < 10
                ? '0' + (movieDetails.runtime % 60)
                : movieDetails.runtime % 60
            }:00 `}
          </span>
          <span className="">
            <CalendarBlank /> {movie.release_date.slice(0, 4)}
          </span>
        </section>
        <button onClick={() => watchTrailer(movie.id)}>
          <PlayCircle /> Assistir trailer
        </button>
      </footer>
    </div>
  )
}

export default Card
