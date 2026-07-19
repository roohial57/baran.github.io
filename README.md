# Roohallah Alizadeh — Developer Portfolio

## Open now (working)

**https://cdn.jsdelivr.net/gh/roohial57/baran.github.io@main/index.html**

GitHub Pages is published from `main`, but custom domains block the normal URLs right now:

| Domain | Problem |
|--------|---------|
| `baran288.ir` | DNS A/AAAA → `127.0.0.1` / `::1` |
| `ekeepy.ir` | Cloudflare **522/523** (origin unreachable); user site redirects project pages here |

After DNS/Cloudflare are fixed, these should work:

- https://roohial57.github.io/baran.github.io/
- https://ekeepy.ir/baran.github.io/

### Fix DNS later

GitHub Pages IPs:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For Cloudflare domains, use **DNS only** (grey cloud), not proxied.

## Customize

```bash
npm install
npm run dev          # local preview
npm run build:pages  # rebuild root index.html + _astro for Pages
```

Edit content in `src/config.ts`.
