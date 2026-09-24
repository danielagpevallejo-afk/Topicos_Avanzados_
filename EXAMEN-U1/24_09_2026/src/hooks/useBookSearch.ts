import { useState, type ChangeEvent } from 'react'
import { searchBooksAsync } from '../services/BookService'
import type { Book } from '../types/Book'

// Este custom hook contiene todo el estado relacionado con la búsqueda
export const useBookSearch = () => {
  // Guarda el texto escrito por el usuario
  const [searchTerm, setSearchTerm] = useState('')

  // Guarda los libros obtenidos desde Open Library
  const [books, setBooks] = useState<Book[]>([])

  // Permite informar al componente que la petición sigue ejecutándose
  const [isLoading, setIsLoading] = useState(false)

  // Guarda el mensaje de error. Una cadena vacía significa que no hay error
  const [error, setError] = useState('')

  // Actualiza searchTerm cuando cambia el input controlado
  const handleSearchTermChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchTerm(event.target.value)
  }

  // Busca libros usando el término
  const searchBooks = async (term: string): Promise<void> => {
    setIsLoading(true)
    setError('')

    try {
      const foundBooks = await searchBooksAsync(term)
      setBooks(foundBooks)
    } catch (requestError) {
      console.error(requestError)
      setBooks([])
      setError('Ocurrió un error al buscar los libros.')
    } finally {
      setIsLoading(false)
    }
  }

  // Devolvemos únicamente lo que necesitan los componentes, creo xdd, pues esta jalando xdd
  return {
    searchTerm,
    books,
    isLoading,
    error,
    handleSearchTermChange,
    searchBooks,
  }

  //Notaaa, NO MOVER NADA YA ESTA FUNCIONANDO
}
