import Button from "@/components/Button";
import { socials } from "@/data/site";
import "./Hero.scss";

// Estadísticas del hero (etiqueta + valor).
const stats = [
  { label: "Years shipping", value: "6+" },
  { label: "Products in prod", value: "40+" },
  { label: "Stack", value: "React · TS · Supabase" },
  { label: "AI pairing", value: "Claude · Lovable" },
];

// Íconos SVG por red (según el label en data/site).
const socialIcons = {
  GitHub: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

export default function Hero() {
  return (
    <section className="hero container">
      {/* Chip de disponibilidad */}
      <p className="hero__chip">
        <span className="hero__chip-dot" aria-hidden="true" />
        Available for new projects — Q3 2026
      </p>

      {/* Título grande */}
      <h1 className="hero__title">
        Jesus.
        <br />
        <span className="hero__accent">Frontend Developer</span>
        <br />
        engineering
        <br />
        interfaces
        <br />
        worth remembering.
      </h1>

      {/* Texto descriptivo */}
      <p className="hero__lead">
        I build large-scale web applications with <strong>React</strong>,{" "}
        <strong>TypeScript</strong> and <strong>Supabase</strong> — pairing
        AI-assisted development with <strong>Claude</strong> and{" "}
        <strong>Lovable</strong> to ship faster without dropping the craft.
      </p>

      {/* Acciones: dos botones + redes */}
      <div className="hero__actions">
        <Button to="/projects" className="hero__btn hero__btn--primary">
          View selected work
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </Button>

        <Button to="/contact" variant="ghost" className="hero__btn">
          Get in touch
        </Button>

        <ul className="hero__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="hero__social"
              >
                {socialIcons[s.label]}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Estadísticas separadas por una línea */}
      <dl className="hero__stats">
        {stats.map((stat) => (
          <div className="hero__stat" key={stat.label}>
            <dt className="hero__stat-label">{stat.label}</dt>
            <dd className="hero__stat-value">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
