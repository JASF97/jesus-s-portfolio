import { useTranslation } from 'react-i18next'
import './Skills.scss'

export default function Skills() {
  const { t } = useTranslation()
  const skills = t('skills.groups', { returnObjects: true })

  return (
    <section className="section container">
      <span className="section__index">{t('skills.index')}</span>
      <h2 className="section__title">{t('skills.title')}</h2>

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
