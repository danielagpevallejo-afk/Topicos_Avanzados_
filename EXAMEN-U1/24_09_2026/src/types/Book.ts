// Represents each book that arrives within docs from the Open Library
export interface Book {
  key: string
  title: string
  author_name?: string[]
  first_publish_year?: number
  cover_i?: number
}

// Representa la respuesta principal de la API.
export interface OpenLibraryResponse {
  docs: Book[]
}
