import { useTranslation } from 'react-i18next'
import Hero from '@/sections/Hero'
import ProjectsGrid from '@/sections/ProjectsGrid'
import Skills from '@/sections/Skills'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />
      {/* En el inicio mostramos solo 3 proyectos destacados */}
      <ProjectsGrid title={t('projects.featuredTitle')} limit={3} />
      <Skills />
    </>
  )
}
