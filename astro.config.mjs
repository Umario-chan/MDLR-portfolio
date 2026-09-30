// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { getAlternatePath, locales } from "./src/i18n/index.js";

const site = "https://mariodelarosa.dev";

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      // El CV es noindex: no tiene sentido anunciarlo en el sitemap
      filter: (page) => !page.includes("/cv"),
      // Cada URL declara su versión en el otro idioma (las rutas en inglés están
      // traducidas, así que el emparejamiento automático del plugin no sirve)
      serialize(item) {
        const { pathname } = new URL(item.url);
        const es = getAlternatePath(pathname, "es");
        const en = getAlternatePath(pathname, "en");
        if (es && en) {
          item.links = [
            { lang: locales.es, url: new URL(es, site).href },
            { lang: locales.en, url: new URL(en, site).href },
          ];
        }
        return item;
      },
    }),
  ],
  devToolbar: { enabled: false },
});