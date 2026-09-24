//Card: 
//   ___________
//  | soy un   |
//  |___dato___|

//Es como mostramos los datos, x-x

import { getBookCoverUrl } from '../services/BookService'
import type { Book } from '../types/Book'
import { Card } from './Card'

// Cada tarjeta recibe un libro mediante props
interface BookCardProps {
  book: Book
}

//
export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card
      header={
        book.cover_i ? (
          <img
            className="book-cover"
            src={getBookCoverUrl(book.cover_i)}
            alt={`Portada de ${book.title}`}
          />
        ) : (
          <div className="book-cover book-cover--empty">Sin portada</div>
        )
      }
    >
      <div className="stack stack--tight">
        <h3 className="book-title">{book.title}</h3>

        <p className="text-muted">
          {book.author_name?.join(', ') ?? 'Autor desconocido'}
        </p>

        <p>
          Primera publicación: {book.first_publish_year ?? 'Sin información'}
        </p>
      </div>
    </Card>
  )
}
