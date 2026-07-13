import { useState } from 'react'
import Button from '@/components/Button'
import { socials } from '@/data/site'
import './ContactBlock.scss'

export default function ContactBlock() {
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
      <span className="section__index">03 — Contacto</span>
      <h2 className="section__title">Trabajemos juntos</h2>

      <div className="contact">
        <div className="contact__intro">
          <p>
            ¿Tienes un proyecto en mente? Escríbeme y te respondo en menos de 48
            horas.
          </p>
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
            ¡Mensaje enviado! Te responderé pronto.
          </p>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              <span>Nombre</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="contact__field">
              <span>Correo</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="contact__field">
              <span>Mensaje</span>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <Button type="submit">Enviar mensaje</Button>
          </form>
        )}
      </div>
    </section>
  )
}
