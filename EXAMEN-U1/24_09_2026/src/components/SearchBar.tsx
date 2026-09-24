import type { ChangeEvent, FormEvent } from 'react'

// Las props comunican la barra con BookModule
interface SearchBarProps {
    
  searchTerm: string
  isLoading: boolean
  onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  
}

// Este componente sólo presenta el formulario, no guarda estado propio x-x
export const SearchBar = ({
  searchTerm,
  isLoading,
  onSearchTermChange,
  onSubmit,
}: SearchBarProps) => {
  return (
    <form className="card search-form" onSubmit={onSubmit}>
      <label className="form-group grow">
        Buscar libros
        <input
          type="search"
          value={searchTerm}
          onChange={onSearchTermChange}
          placeholder="Ejemplo: Harry Potter"
          required
        />
      </label>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Buscando...' : 'Buscar'}
      </button>
    </form>
  )
}
