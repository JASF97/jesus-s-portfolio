// Habilidades agrupadas por categoría.
export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'SCSS / Sass', 'React Router'],
  },
  {
    group: 'Herramientas',
    items: ['Git', 'Figma', 'Vitest', 'Storybook'],
  },
  {
    group: 'Bases',
    items: ['HTML semántico', 'Accesibilidad (a11y)', 'Diseño responsive'],
  },
]

// Enlaces de navegación (usados por el Navbar).
export const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/projects', label: 'Proyectos' },
  { to: '/about', label: 'Sobre mí' },
  { to: '/contact', label: 'Contacto' },
]

// Enlaces sociales (usados en Footer y Contact).
export const socials = [
  { label: 'GitHub', href: 'https://github.com/tu-usuario' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tu-usuario' },
  { label: 'Email', href: 'mailto:hola@tudominio.com' },
]
