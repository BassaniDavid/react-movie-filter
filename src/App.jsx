// fondamentale importare useState e useEffect altrimenti non funziona
import { useState, useEffect } from 'react'

// importo i dati dei film salvati in un file js separato
import dataMovie from './components/data';

function App() {
  // useState per dinamicizzare la lista di film
  const [movies, setMovies] = useState(dataMovie);

  // useState per dinamicizzare la selezione del genere
  const [searchGenre, setSearchGenre] = useState("");

  // useEffect che si attiva nel momento in cui varia il genere selezionato
  useEffect(() => {
    console.log('si attiva useEffect con valore')
    console.log(searchGenre)

    // variabile di comodo per avere un array su cui iterare (di base contiene tutti i film)
    let results = movies

    // se si seleziona un genere diverso da 'vuoto'
    if (searchGenre !== '') {

      // si filtrano i film che hanno lo stesso genere di quello selezionato e li si salva in results
      results = dataMovie.filter(movie => movie.genre.includes(searchGenre))

      // si attiva useState, che modificherà movies inserendo il nuovo array filtrato
      setMovies(results)

    }
    // se è selezionato nessun genere (valore vuoto)
    else {
      console.log('dovrei mostrare tutti i risultati')

      // si attiva useState, che modificherà movies inserendo l array con tutti i film 
      // (altrimenti se si cerca di tornare a valore vuoto dopo aver fatto una selezione, visualizza solo i film già filtrati)
      setMovies(dataMovie)
    }
  },
    // questa parte serve per definire quando useeffect deve attivarsi, senza si va in loop
    [searchGenre])

  return (
    <>
      <section>
        <h2>cerca film</h2>
        <label >genere:  </label>
        {/* scelta opzioni. al cambiamento, i valori scatenano la funzione setSearchGenre che usiamo per variare i risultati in pagina*/}
        <select value={searchGenre} onChange={e => setSearchGenre(e.target.value)}>

          {/* di default valore vuoto */}
          <option value="">---</option>
          <option>Fantascienza</option>
          <option>Thriller</option>
          <option>Romantico</option>
          <option>Azione</option>
        </select>
      </section>
      {/* itero sulla variabile movie(che è il risultato di eventuali filtri per produrre HTML cirrispondente ai film) */}
      {movies.map((movie, index) =>
        <div key={index}>
          <p>titolo: {movie.title}</p>
          <p>genere: {movie.genre}</p>
        </div>
      )}
    </>
  )
}

export default App
