import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // Al navegar a otra ruta, vuelve al inicio de la página.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main">
        {/* Outlet renderiza la página de la ruta activa */}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
