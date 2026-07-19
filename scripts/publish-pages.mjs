import {
  cpSync,
  rmSync,
  writeFileSync,
  existsSync,
  readdirSync,
  unlinkSync,
  readFileSync,
} from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

if (!existsSync(dist)) {
  console.error("dist/ missing — run astro build first");
  process.exit(1);
}

rmSync(join(root, "_astro"), { recursive: true, force: true });
for (const name of ["index.html", "favicon.svg", "CNAME", ".nojekyll"]) {
  try {
    unlinkSync(join(root, name));
  } catch {
    // ignore missing
  }
}

cpSync(join(dist, "index.html"), join(root, "index.html"));
cpSync(join(dist, "favicon.svg"), join(root, "favicon.svg"));
cpSync(join(dist, "_astro"), join(root, "_astro"), { recursive: true });
writeFileSync(join(root, ".nojekyll"), "");

// Astro emits absolute "/./..." with base "./" — rewrite to true relative paths
// so the site works under /baran.github.io/ and on CDN mirrors.
let html = readFileSync(join(root, "index.html"), "utf8");
html = html
  .replaceAll('href="/./', 'href="./')
  .replaceAll('src="/./', 'src="./')
  .replaceAll("url(/./", "url(./");
writeFileSync(join(root, "index.html"), html);

console.log("Published site artifacts to repo root:");
console.log(
  ["index.html", "favicon.svg", ".nojekyll", "_astro/", ...readdirSync(join(root, "_astro")).map((f) => `_astro/${f}`)].join(
    "\n",
  ),
);
console.log("Sample asset hrefs:");
for (const m of html.matchAll(/href="([^"]+(?:favicon|_astro)[^"]*)"/g)) {
  console.log(" ", m[1]);
}
