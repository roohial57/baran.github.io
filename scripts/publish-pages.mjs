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
const out = join(root, "profile-site");

if (!existsSync(dist)) {
  console.error("dist/ missing — run astro build first");
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
cpSync(dist, out, { recursive: true });
writeFileSync(join(out, ".nojekyll"), "");
try {
  unlinkSync(join(out, "CNAME"));
} catch {
  // ok
}

console.log("Ready folder for GitHub profile site:");
console.log(`  ${out}`);
console.log("Files:", readdirSync(out).join(", "));
console.log("URL after publish: https://roohial57.github.io/");
