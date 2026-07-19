import {
  cpSync,
  rmSync,
  writeFileSync,
  existsSync,
  readdirSync,
  unlinkSync,
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
    // ignore missing
  }
}

for (const name of readdirSync(dist)) {
  const from = join(dist, name);
  const to = join(root, name);
  cpSync(from, to, { recursive: true });
}
writeFileSync(join(root, ".nojekyll"), "");

console.log("Published site artifacts to repo root:");
console.log(readdirSync(root).filter((n) => !n.startsWith(".") || n === ".nojekyll").join(", "));
