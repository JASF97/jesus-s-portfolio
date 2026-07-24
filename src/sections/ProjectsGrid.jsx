import { useTranslation } from 'react-i18next'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import './ProjectsGrid.scss'

export default function ProjectsGrid({ index, title, limit }) {
  const { t } = useTranslation()
  const list = limit ? projects.slice(0, limit) : projects

  return (
    <section className="section container">
      <span className="section__index">
        {index ?? t('projects.defaultIndex')}
      </span>
      <h2 className="section__title">{title ?? t('projects.defaultTitle')}</h2>

      <div className="projects-grid">
        {list.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
