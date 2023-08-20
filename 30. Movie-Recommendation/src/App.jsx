/* eslint-disable no-unused-vars */
import { Lightning } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import logo from './assets/logo.svg'
import Card from './components/Card/index'
import './styles/global.css'
function App() {
  const [data, setData] = useState({})
  const [best3Movies, setBest3Movies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }
      }
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          options
        ).then((response) => response.json())

        setData(response)
      } catch (error) {
        console.error(error)
      }
    }
    getMovies()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (data.results) updateRecommendation()
  }, [data])

  function updateRecommendation() {
    const results = data.results
    const best3Movies = selectPopularMovies(results)
    setBest3Movies(best3Movies)
  }

  const selectPopularMovies = (results) => {
    const randomPosition = () => Math.floor(Math.random() * results.length)

    let selectedVideos = new Set()
    while (selectedVideos.size < 3) {
      selectedVideos.add(results[randomPosition()].id)
    }

    const currentMovies = data.results.filter((movie) =>
      [...selectedVideos].includes(movie.id)
    )
    return currentMovies
  }
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <img src={logo} alt="logomarca" />
          <button onClick={updateRecommendation}>
            Nova recomendação
            <Lightning />
          </button>
        </header>
        <main className="main">
          {best3Movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
