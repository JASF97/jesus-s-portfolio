import Skills from '@/sections/Skills'
import './About.scss'

export default function About() {
  return (
    <>
      <section className="section container">
        <span className="section__index">01 — Sobre mí</span>
        <h2 className="section__title">Hola, soy Tu Nombre</h2>

        <div className="about">
          <p>
            Desarrollador frontend con foco en React y en construir interfaces
            que se sienten rápidas y cuidadas. Me interesa el punto donde el
            diseño y el código se encuentran: sistemas de estilos consistentes,
            componentes reutilizables y experiencias accesibles.
          </p>
          <p>
            He trabajado en e-commerce, dashboards de datos y sitios de
            contenido. Fuera del teclado, me vas a encontrar leyendo sobre
            tipografía o tomando café mientras exploro nuevas herramientas.
          </p>
        </div>
      </section>

      <Skills />
    </>
  )
}
