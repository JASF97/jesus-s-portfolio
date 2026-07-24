import { useTranslation } from 'react-i18next'
import Button from '@/components/Button'
import './NotFound.scss'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="not-found container">
      <p className="not-found__code">{t('notFound.code')}</p>
      <h2 className="not-found__title">{t('notFound.title')}</h2>
      <p className="not-found__text">{t('notFound.text')}</p>
      <Button to="/">{t('notFound.back')}</Button>
    </section>
  )
}
