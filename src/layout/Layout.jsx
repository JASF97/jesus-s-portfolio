import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Layout() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  // Al navegar a otra ruta, vuelve al inicio de la página.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <CustomCursor />
      <a href="#main" className="skip-link">
        {t('common.skipLink')}
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
