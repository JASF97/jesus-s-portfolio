import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@/components/Button'
import { socials } from '@/data/site'
import './ContactBlock.scss'

export default function ContactBlock() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí conectarías un servicio real (EmailJS, Formspree, tu API...).
    setSent(true)
  }

  return (
    <section className="section container">
      <span className="section__index">{t('contact.index')}</span>
      <h2 className="section__title">{t('contact.title')}</h2>

      <div className="contact">
        <div className="contact__intro">
          <p>{t('contact.intro')}</p>
          <ul className="contact__socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {sent ? (
          <p className="contact__success" role="status">
            {t('contact.success')}
          </p>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              <span>{t('contact.fields.name')}</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="contact__field">
              <span>{t('contact.fields.email')}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="contact__field">
              <span>{t('contact.fields.message')}</span>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <Button type="submit">{t('contact.submit')}</Button>
          </form>
        )}
      </div>
    </section>
  )
}
