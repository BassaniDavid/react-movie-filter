import { useState, useEffect } from 'react'

const dataMovie = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {

  return (
    <>
      <ul>
        {dataMovie.map((movie, index) =>
          <div key={index}>
            <h2>titolo</h2>
            <p>{movie.title}</p>
            <h3>genere</h3>
            <p>{movie.genre}</p>
          </div>
        )}
      </ul>
    </>
  )
}

export default App
