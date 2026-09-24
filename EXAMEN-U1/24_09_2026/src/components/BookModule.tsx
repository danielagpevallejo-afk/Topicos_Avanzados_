import type { FormEvent } from 'react'
import { useBookSearch } from '../hooks/useBookSearch'
import { useSearchHistory } from '../hooks/useSearchHistory'
import { BookCard } from './BookCard'
import { SearchBar } from './SearchBar'
import { SearchHistory } from './SearchHistory'

// BookModule coordina los hooks con los componentes de presentación.
export const BookModule = () => {
  const {
    searchTerm,
    books,
    isLoading,
    error,
    handleSearchTermChange,
    searchBooks,
  } = useBookSearch()

  const { searchHistory, addSearchToHistory } = useSearchHistory()

  // Se ejecuta cuando el usuario envía la barra de búsqueda.
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    // trim evita búsquedas formadas únicamente por espacios.
    const cleanSearchTerm = searchTerm.trim()

    if (cleanSearchTerm === '') {
      return
    }

    // History avoids duplicates and the other hook queries the API.
    //Con lo siguiente cumplimos con un punto del examen
    addSearchToHistory(cleanSearchTerm)
    void searchBooks(cleanSearchTerm)
  }

  return (
    <div className="stack">
      <SearchBar
        searchTerm={searchTerm}
        isLoading={isLoading}
        onSearchTermChange={handleSearchTermChange}
        onSubmit={handleSubmit}
      />

      <SearchHistory searches={searchHistory} />

      {error ? <p className="error-message">{error}</p> : null}

      {!isLoading && !error && books.length > 0 ? (
        <section className="stack">
          <div className="cluster cluster--spread">
            <h2>Resultados</h2>
            <span className="badge badge--primary">
              {books.length} {books.length === 1 ? 'libro' : 'libros'}
            </span>
          </div>


          <div className="grid book-grid">
            {/* Los datos de las tarjetas provienen de la API mediante props. */}
            {books.map((book) => (
              <BookCard key={book.key} book={book} />
            ))}
          </div>
        </section>
      ) : null}

      {!isLoading && !error && searchHistory.length > 0 && books.length === 0 ? (
        <p className="text-muted">No se encontraron libros.</p>
      ) : null}
    </div>
  )
}
