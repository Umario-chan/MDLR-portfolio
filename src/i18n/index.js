// Rutas del sitio por idioma. El español vive en la raíz (URLs de siempre) y el
// inglés bajo /en/ con rutas traducidas. Este archivo también lo importa
// astro.config.mjs para el sitemap, así que no puede usar módulos de Astro.

export const defaultLang = "es";

// Código BCP 47 de cada idioma, para hreflang, og:locale y JSON-LD
export const locales = { es: "es-MX", en: "en" };

const routes = {
  home: { es: "/", en: "/en/" },
  projects: { es: "/proyectos/", en: "/en/projects/" },
  experience: { es: "/experiencia/", en: "/en/experience/" },
  contact: { es: "/contact/", en: "/en/contact/" },
  cv: { es: "/cv/", en: "/en/cv/" },
};

export function getPath(route, lang) {
  return routes[route][lang];
}

export function getProjectPath(slug, lang) {
  return `${routes.projects[lang]}${slug}/`;
}

// Traduce cualquier ruta del sitio a su equivalente en el otro idioma.
// Devuelve null si la ruta no tiene equivalente (p. ej. el 404).
export function getAlternatePath(pathname, targetLang) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  for (const route of Object.values(routes)) {
    const lang = route.es === path ? "es" : route.en === path ? "en" : null;
    if (lang) return route[targetLang];
  }
  for (const lang of ["es", "en"]) {
    const base = routes.projects[lang];
    if (path.startsWith(base) && path.length > base.length) {
      return routes.projects[targetLang] + path.slice(base.length);
    }
  }
  return null;
}

export function getLangFromPath(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

// const t = translator(lang); t("Hola", "Hi") → el texto del idioma de la página
export function translator(lang) {
  return (es, en) => (lang === "en" ? en : es);
}
