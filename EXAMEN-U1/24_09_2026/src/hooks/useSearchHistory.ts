import { useState } from 'react'

// Este custom hook contiene el estado y la lógica del historial.
export const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  // Agrega una búsqueda solamente cuando todavía no existe en el historial.
  const addSearchToHistory = (newSearch: string): void => {
    setSearchHistory((currentHistory) => {
      // some devuelve true cuando encuentra el mismo texto.
      // toLowerCase evita repetir "React" y "react" como búsquedas diferentes.
      const searchAlreadyExists = currentHistory.some(
        (search) => search.toLowerCase() === newSearch.toLowerCase(),
      )

      if (searchAlreadyExists) {
        return currentHistory
      }

      return [...currentHistory, newSearch]
    })
  }

  return {
    searchHistory,
    addSearchToHistory,
  }
}
