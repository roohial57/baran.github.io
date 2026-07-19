import {
  cpSync,
  mkdirSync,
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

// Legacy GitHub Pages serves branch main from repo root (/).
// Replace only the published site artifacts, keep source intact.
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

console.log("Published site artifacts to repo root:");
console.log(
  ["index.html", "favicon.svg", ".nojekyll", "_astro/", ...readdirSync(join(root, "_astro")).map((f) => `_astro/${f}`)].join(
    "\n",
  ),
);
