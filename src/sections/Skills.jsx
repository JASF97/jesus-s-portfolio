import { skills } from '@/data/site'
import './Skills.scss'

export default function Skills() {
  return (
    <section className="section container">
      <span className="section__index">02 — Herramientas</span>
      <h2 className="section__title">Con lo que trabajo</h2>

      <div className="skills">
        {skills.map((cat) => (
          <div key={cat.group} className="skills__group">
            <h3 className="skills__group-title">{cat.group}</h3>
            <ul className="skills__list">
              {cat.items.map((item) => (
                <li key={item} className="skills__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
