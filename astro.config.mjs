// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mdlr-portfolio.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    // El CV es noindex: no tiene sentido anunciarlo en el sitemap
    sitemap({ filter: (page) => !page.includes("/cv") }),
  ],
  devToolbar: { enabled: false },
});