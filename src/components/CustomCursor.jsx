import { useEffect, useRef, useState } from 'react'
import './CustomCursor.scss'

// Cursor personalizado: un punto que sigue al mouse al instante y un círculo
// que lo persigue con retardo suave (lerp) hasta centrarse cuando el mouse para.
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rafRef = useRef(0)

  // Solo se activa con puntero fino (mouse/trackpad), nunca en táctil.
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    setEnabled(finePointer.matches)

    const onChange = (e) => setEnabled(e.matches)
    finePointer.addEventListener('change', onChange)
    return () => finePointer.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Posición real del mouse (destino) y posición interpolada del anillo.
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { x: mouse.x, y: mouse.y }

    // Factor de seguimiento del anillo: menor = más "perezoso".
    const FOLLOW = reduceMotion ? 1 : 0.18

    let visible = false

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      // El punto sigue al instante.
      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`

      if (!visible) {
        visible = true
        dot.classList.add('is-visible')
        ring.classList.add('is-visible')
      }
    }

    const onLeave = () => {
      visible = false
      dot.classList.remove('is-visible')
      ring.classList.remove('is-visible')
    }

    // Estado hover: el anillo crece sobre elementos interactivos.
    const isInteractive = (el) =>
      el && el.closest('a, button, [role="button"], input, textarea, select, label')

    const onOver = (e) => {
      if (isInteractive(e.target)) ring.classList.add('is-hovering')
    }
    const onOut = (e) => {
      if (isInteractive(e.target)) ring.classList.remove('is-hovering')
    }

    const tick = () => {
      // Interpolación lineal: el anillo se acerca al mouse cada frame y
      // termina de centrarse cuando el mouse deja de moverse.
      ringPos.x += (mouse.x - ringPos.x) * FOLLOW
      ringPos.y += (mouse.y - ringPos.y) * FOLLOW
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
