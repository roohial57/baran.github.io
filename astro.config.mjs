// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Project Pages URL: https://roohial57.github.io/baran.github.io/
// (custom domain baran288.ir currently points DNS to 127.0.0.1 — unusable)
export default defineConfig({
  site: "https://roohial57.github.io",
  base: "/baran.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
});
