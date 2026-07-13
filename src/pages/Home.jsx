import Hero from '@/sections/Hero'
import ProjectsGrid from '@/sections/ProjectsGrid'
import Skills from '@/sections/Skills'

export default function Home() {
  return (
    <>
      <Hero />
      {/* En el inicio mostramos solo 3 proyectos destacados */}
      <ProjectsGrid title="Proyectos destacados" limit={3} />
      <Skills />
    </>
  )
}
