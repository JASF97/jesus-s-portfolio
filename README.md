# Mi Portafolio

Portafolio personal construido con **React + Vite**, estilos con **SCSS** (arquitectura 7-1 simplificada) y enrutamiento con **React Router**.

## Requisitos

- Node.js 18+
- npm

## Puesta en marcha

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # sirve el build localmente para probar
```

## Estructura

```
src/
├── components/   Componentes reutilizables (Button, ProjectCard)
├── sections/     Bloques de contenido (Hero, Skills, ProjectsGrid, ContactBlock)
├── layout/       Navbar, Footer y Layout (con <Outlet/>)
├── pages/        Una página por ruta (Home, Projects, About, Contact, NotFound)
├── data/         Contenido separado de la UI (projects.js, site.js)
├── styles/       Sistema SCSS
│   ├── abstracts/  variables, mixins, functions (inyectados vía vite.config)
│   ├── base/       reset, tipografía, global
│   └── main.scss   punto de entrada
├── App.jsx       Definición de rutas
└── main.jsx      Monta React + BrowserRouter
```

## Cómo editar el contenido

- **Proyectos:** `src/data/projects.js`
- **Skills, navegación y redes:** `src/data/site.js`
- **Textos de secciones:** en cada archivo `.jsx` de `src/sections/` y `src/pages/`
- **Colores y tipografía:** `src/styles/abstracts/_variables.scss`

## Rutas

| Ruta         | Página     |
|--------------|------------|
| `/`          | Home       |
| `/projects`  | Proyectos  |
| `/about`     | Sobre mí   |
| `/contact`   | Contacto   |
| `*`          | 404        |

## Despliegue

- **Vercel / Netlify:** conecta el repo → deploy automático. Incluidos `vercel.json` y `public/_redirects` para que el SPA maneje las rutas.
- **GitHub Pages:** añade `base: '/nombre-repo/'` en `vite.config.js` antes de `npm run build`.
