// History arrives via props and is not written directly to the interface.
interface SearchHistoryProps {
  searches: string[]
}

export const SearchHistory = ({ searches }: SearchHistoryProps) => {
  // Si todavía no existen búsquedas, no mostramos la sección.
  if (searches.length === 0) {
    return null
  }

  return (
    <section className="stack stack--tight">
      <h2 className="section-title">Historial de búsquedas</h2>

      <div className="cluster">
        {/* map crea un chip por cada búsqueda nueva. */}
        {searches.map((search) => (
          <span className="badge badge--primary" key={search.toLowerCase()}>
            {search}
          </span>
        ))}
      </div>
    </section>
  )
}
