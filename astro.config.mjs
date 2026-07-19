// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Canonical public URL for Google indexing (project Pages).
export default defineConfig({
  site: "https://roohial57.github.io",
  base: "/baran.github.io/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
