// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// site = canonical host for sitemap/SEO
// base = ./ so CSS/JS resolve on github.io, custom domains, and CDN mirrors
export default defineConfig({
  site: "https://roohial57.github.io",
  base: "./",
  integrations: [
    sitemap({
      customPages: ["https://roohial57.github.io/baran.github.io/"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
