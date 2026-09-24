import type { Book, OpenLibraryResponse } from '../types/Book'

// Dirección para realizar búsqueda
const SEARCH_URL = 'https://openlibrary.org/search.json'

// El service se encarga solamente de consultar y devolver datos de la API
export const searchBooksAsync = async (searchTerm: string): Promise<Book[]> => {
  // encodeURIComponent prepara espacios y caracteres especiales para la UR
  const requestUrl = `${SEARCH_URL}?q=${encodeURIComponent(searchTerm)}`
  const response = await fetch(requestUrl);

  

  // Convertimos el JSON y le indicamos a TypeScript su interface.
  const data: OpenLibraryResponse = await response.json()

  return data.docs
}

// Construye la portada con el cover_i
export const getBookCoverUrl = (coverId: number): string => {
  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
}
