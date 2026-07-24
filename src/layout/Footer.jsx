import { useTranslation } from 'react-i18next'
import { socials } from '@/data/site'
import './Footer.scss'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__note">{t('footer.note', { year })}</p>
        <ul className="footer__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
