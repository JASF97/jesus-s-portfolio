import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import './ProjectsGrid.scss'

export default function ProjectsGrid({
  index = '01 — Trabajo',
  title = 'Proyectos seleccionados',
  limit,
}) {
  const list = limit ? projects.slice(0, limit) : projects

  return (
    <section className="section container">
      <span className="section__index">{index}</span>
      <h2 className="section__title">{title}</h2>

      <div className="projects-grid">
        {list.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
