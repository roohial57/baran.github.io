// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the site works on github.io, custom domains, and CDN mirrors.
export default defineConfig({
  site: "https://roohial57.github.io",
  base: "./",
  vite: {
    plugins: [tailwindcss()],
  },
});
