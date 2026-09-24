import type { ReactNode } from 'react'


// ReactNode permite recibir contenido JSX mediante props.
interface CardProps {
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
}


// children representa el contenido escrito dentro de <Card>...</Card>.
export const Card = ({ children, header, footer }: CardProps) => {
  return (
    <article className="card">
      {/* Sólo mostramos header y footer cuando fueron enviados. */}
      {header ? <header className="card__header">{header}</header> : null}
      {children}
      {footer ? <footer className="card__footer">{footer}</footer> : null}
    </article>
  )
}
