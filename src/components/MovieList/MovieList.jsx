function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  )
}

export default MovieList
