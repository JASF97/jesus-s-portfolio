import Button from '@/components/Button'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero container">
      <p className="hero__eyebrow">Desarrollador Frontend · Bogotá</p>

      <h1 className="hero__title">
        Construyo interfaces
        <br />
        <span className="hero__accent">rápidas y con carácter.</span>
      </h1>

      <p className="hero__lead">
        Diseño y desarrollo productos web centrados en la experiencia, el
        rendimiento y la accesibilidad. Aquí hay una muestra de mi trabajo.
      </p>

      <div className="hero__actions">
        <Button to="/projects">Ver proyectos</Button>
        <Button to="/contact" variant="ghost">
          Contactar
        </Button>
      </div>
    </section>
  )
}
