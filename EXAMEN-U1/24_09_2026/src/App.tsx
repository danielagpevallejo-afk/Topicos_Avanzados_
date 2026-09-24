import { BookModule } from './components/BookModule'

// App es el componente principal que une los módulos de la aplicación.
function App() {
  return (
    <main className="page">
      <div className="container stack">
        <header className="stack stack--tight">
          <h1>Buscador de libros</h1>
          <p className="text-muted">
            Escribe un término para consultar libros en Open Library.
          </p>
        </header>

        {/* El módulo conecta búsqueda, historial y resultados. */}
        <BookModule />
      </div>
    </main>
  )
}

export default App
