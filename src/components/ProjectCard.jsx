import './ProjectCard.scss'

export default function ProjectCard({ project }) {
  const { title, year, summary, tags, repo, demo } = project

  return (
    <article className="project-card">
      <header className="project-card__head">
        <h3 className="project-card__title">{title}</h3>
        <span className="project-card__year">{year}</span>
      </header>

      <p className="project-card__summary">{summary}</p>

      <ul className="project-card__tags">
        {tags.map((tag) => (
          <li key={tag} className="project-card__tag">
            {tag}
          </li>
        ))}
      </ul>

      <footer className="project-card__links">
        <a href={demo} target="_blank" rel="noreferrer">
          Ver demo ↗
        </a>
        <a href={repo} target="_blank" rel="noreferrer">
          Código ↗
        </a>
      </footer>
    </article>
  )
}
