import { useState, useEffect } from "react"
import MovieList from "./components/MovieList/MovieList"

function App() {
  const [movies, setMovies] = useState([])

  const [newMovie, setNewMovie] = useState('')

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  const addMovie = () => {
    const title = newMovie.trim()
    if (title === '') return

    setMovies(prevMovies => [...prevMovies, title])
    setNewMovie('')
  }

  return (
    <>
      <h1>Biblioteczka filmów</h1>

      <div>
        <input
          placeholder="Wpisz tytuł filmu..."
          value={newMovie}
          onChange={e => setNewMovie(e.target.value)}
        />
        <button onClick={addMovie}>Dodaj film</button>
      </div>

      <MovieList movies={movies} />
    </>
  )
}

export default App
