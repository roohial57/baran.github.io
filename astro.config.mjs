// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Relative base works on https://roohial57.github.io/ and CDN previews.
export default defineConfig({
  site: "https://roohial57.github.io",
  base: "./",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
