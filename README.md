# Roohallah Alizadeh — Developer Portfolio

Personal portfolio built with [DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) (Astro + Tailwind).

## Live

**https://roohial57.github.io/baran.github.io/**

> Note: `baran288.ir` currently has DNS A/AAAA records pointing to `127.0.0.1` / `::1`, so that custom domain cannot work until you fix DNS at your registrar to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`). The CNAME was removed so GitHub Pages does not redirect away from the working `github.io` URL.

## Customize

Edit `src/config.ts`, then rebuild:

```bash
npm install
npm run build:pages
```

## Develop

```bash
npm install
npm run dev
```

## GitHub Pages

Repo Pages is set to deploy from `main` branch path `/`.  
`npm run build:pages` writes `index.html`, `_astro/`, `favicon.svg`, and `.nojekyll` to the repo root for that legacy Pages setup.
