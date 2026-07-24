import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Inicializa i18n (traducciones) antes de renderizar la app.
import './i18n'

// Importa el sistema de estilos SCSS una sola vez.
import './styles/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter habilita el enrutamiento por URL */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
