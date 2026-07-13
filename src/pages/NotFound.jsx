import Button from '@/components/Button'
import './NotFound.scss'

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="not-found__code">404</p>
      <h2 className="not-found__title">Página no encontrada</h2>
      <p className="not-found__text">
        La ruta que buscas no existe o fue movida.
      </p>
      <Button to="/">Volver al inicio</Button>
    </section>
  )
}
