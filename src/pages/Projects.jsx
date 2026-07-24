import { useTranslation } from 'react-i18next'
import ProjectsGrid from '@/sections/ProjectsGrid'

export default function Projects() {
  const { t } = useTranslation()
  return (
    <ProjectsGrid index={t('projects.allIndex')} title={t('projects.allTitle')} />
  )
}
