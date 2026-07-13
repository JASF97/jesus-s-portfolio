import { Link } from 'react-router-dom'
import './Button.scss'

/**
 * Botón polimórfico:
 * - `to`   -> Link interno de react-router
 * - `href` -> <a> externo
 * - sin ambos -> <button>
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  ...props
}) {
  const className = `btn btn--${variant}`

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
