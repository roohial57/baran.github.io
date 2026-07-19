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
for (const name of [
  "index.html",
  "favicon.svg",
  "CNAME",
  ".nojekyll",
  "robots.txt",
  "sitemap-index.xml",
  "sitemap-0.xml",
]) {
  try {
    unlinkSync(join(root, name));
  } catch {
    // ignore
  }
}

for (const name of readdirSync(dist)) {
  cpSync(join(dist, name), join(root, name), { recursive: true });
}
writeFileSync(join(root, ".nojekyll"), "");

// Astro base "./" emits "/./..." — rewrite to real relative URLs
let html = readFileSync(join(root, "index.html"), "utf8");
html = html
  .replaceAll('href="/./', 'href="./')
  .replaceAll('src="/./', 'src="./')
  .replaceAll("url(/./", "url(./")
  .replaceAll('href="/baran.github.io/', 'href="./')
  .replaceAll('src="/baran.github.io/', 'src="./');
writeFileSync(join(root, "index.html"), html);

console.log("Published with relative assets:");
for (const m of html.matchAll(/href="([^"]+(?:favicon|_astro)[^"]*)"/g)) {
  console.log(" ", m[1]);
}
