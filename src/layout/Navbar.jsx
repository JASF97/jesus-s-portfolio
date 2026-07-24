import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navLinks } from "@/data/site";
import Button from "@/components/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "./Navbar.scss";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Píldora deslizante ---------------------------------------------------------
  const [hovered, setHovered] = useState(null); // ruta bajo el cursor (o null)
  const [pill, setPill] = useState(null); // { left, width } de la píldora
  const [animated, setAnimated] = useState(false); // evita el "slide" inicial
  const linkRefs = useRef({}); // { [to]: elemento del NavLink }
  const location = useLocation();

  // Ruta activa (la que coincide con la URL actual).
  const activeTo =
    navLinks.find((l) =>
      l.to === "/" ? location.pathname === "/" : location.pathname === l.to
    )?.to ?? null;

  // Con hover manda el link apuntado; sin hover, la ruta activa.
  const target = hovered ?? activeTo;

  // Muestra el borde inferior solo cuando la página ha hecho scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll(); // estado inicial (por si se carga ya con scroll)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mide el link objetivo y reposiciona la píldora (también al redimensionar).
  useLayoutEffect(() => {
    const measure = () => {
      const el = target ? linkRefs.current[target] : null;
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
      else setPill(null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  // Activa la transición tras el primer posicionamiento (sin salto inicial).
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar__inner container">
        <NavLink
          to="/"
          className="navbar__brand"
          onClick={() => setOpen(false)}
        >
          <span className="navbar__brand-mark">◆</span> Jesus.
        </NavLink>

        <nav
          className={`navbar__nav ${open ? "is-open" : ""}`}
          aria-label={t("nav.ariaLabel")}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Píldora única que se desliza entre la opción activa y la del hover */}
          {pill && (
            <span
              className={`navbar__pill ${animated ? "is-animated" : ""}`}
              style={{
                transform: `translateX(${pill.left}px)`,
                width: `${pill.width}px`,
              }}
              aria-hidden="true"
            />
          )}

          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              ref={(el) => (linkRefs.current[link.to] = el)}
              // NavLink añade la clase "active" según la ruta actual
              className={({ isActive }) =>
                `navbar__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
              onMouseEnter={() => setHovered(link.to)}
              // end evita que "/" quede activo en todas las rutas
              end={link.to === "/"}
            >
              <span className="navbar__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__end">
          <LanguageSwitcher />
          <Button
            to="/contact"
            className="navbar__cta"
            onClick={() => setOpen(false)}
          >
            {t("nav.cta")}
          </Button>
          <button
            className="navbar__toggle"
            aria-expanded={open}
            aria-label={t("common.openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
