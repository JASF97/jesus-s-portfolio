import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '@/data/site'
import './Navbar.scss'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__brand-mark">◆</span> Tu&nbsp;Nombre
        </NavLink>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          className={`navbar__nav ${open ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              // NavLink añade la clase "active" según la ruta actual
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'is-active' : ''}`
              }
              onClick={() => setOpen(false)}
              // end evita que "/" quede activo en todas las rutas
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
