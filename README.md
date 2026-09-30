# Portafolio — Mario de la Rosa

Portafolio personal de Mario de la Rosa, desarrollador fullstack en Ciudad de México con experiencia previa en QA Automation. Bilingüe (español e inglés).

**Sitio:** [mariodelarosa.dev](https://mariodelarosa.dev) · **English:** [mariodelarosa.dev/en/](https://mariodelarosa.dev/en/)

![Mario de la Rosa — Abierto a ofertas de trabajo](public/og-image.jpg)

## Stack

- [Astro 5](https://astro.build/) — sitio estático, con React solo en los componentes interactivos
- [React 19](https://react.dev/) — timeline de experiencia, FAQ, efecto de texto y botón de copiar correo
- [Tailwind CSS 4](https://tailwindcss.com/)
- Desplegado en [Vercel](https://vercel.com/), con el dominio en Cloudflare

## Qué incluye

- Inicio, proyectos con página de detalle, experiencia, contacto y un CV imprimible (`/cv`) que se guarda como PDF desde el navegador.
- **Dos idiomas en URLs separadas:** el español vive en la raíz y el inglés bajo `/en/`, con rutas traducidas. El botón de idioma cambia a la otra versión sin recargar la página y conserva el scroll. En la primera visita, si el navegador está en inglés, redirige a `/en/`.
- **Modo oscuro:** sigue la preferencia del sistema hasta que la persona elige con el botón del navbar; la elección se guarda. Los colores oscuros son variantes `dark:` de Tailwind en cada componente.
- **SEO técnico:** canónicas, `hreflang` en cada página y en el sitemap, Open Graph, y datos estructurados (`WebSite`, `Person` y `FAQPage`). El CV y el 404 son `noindex`.

## Desarrollo

Requiere Node.js 20 o superior.

| Comando           | Qué hace                                          |
| :---------------- | :------------------------------------------------ |
| `npm install`     | Instala las dependencias                          |
| `npm run dev`     | Servidor local en `localhost:4321`                |
| `npm run build`   | Genera el sitio en `./dist/`                      |
| `npm run preview` | Sirve la versión compilada para revisarla en local |

## Estructura

```text
src/
├── data/          # Contenido: proyectos, experiencia y FAQ (español e inglés)
├── i18n/          # Mapa de rutas por idioma y redirección por idioma del navegador
├── views/         # Contenido de cada página, compartido por ambos idiomas
├── pages/         # Rutas: las de español en la raíz y las de inglés en en/
├── components/    # Componentes de Astro y React
├── layouts/       # Layout base: <head>, SEO, navbar y footer
└── styles/        # CSS global
```

## Cómo editar el contenido

- **Proyectos:** `src/data/projectData.js`. Cada objeto es una tarjeta y su página de detalle; el orden del arreglo es el orden en el sitio. Los campos que terminan en `En` son la versión en inglés.
- **Experiencia y educación:** `src/data/experienceData.js`. De aquí salen el timeline de `/experiencia` y el CV. El campo opcional `cv` guarda una versión más corta de un puesto, solo para el CV.
- **FAQ:** `src/data/faqData.js`. Se usa en el inicio y en los datos estructurados `FAQPage`.
- **Una página nueva:** crea la vista en `src/views/`, una página en `src/pages/` y otra en `src/pages/en/`, y registra las dos rutas en `src/i18n/index.js`.
- **Cambio de dominio:** actualiza `site` en `astro.config.mjs`; de ahí salen las canónicas, el `hreflang` y el sitemap.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/mdlr89/)
- [mario.delarosa@live.com.mx](mailto:mario.delarosa@live.com.mx)
