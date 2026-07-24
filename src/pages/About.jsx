import { useTranslation } from 'react-i18next'
import Skills from '@/sections/Skills'
import './About.scss'

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <section className="section container">
        <span className="section__index">{t('about.index')}</span>
        <h2 className="section__title">{t('about.title')}</h2>

        <div className="about">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
      </section>

      <Skills />
    </>
  )
}
