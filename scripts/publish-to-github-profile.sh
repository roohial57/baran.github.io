#!/usr/bin/env bash
# Publishes this portfolio to https://roohial57.github.io/
# Run from your machine (needs git login to GitHub).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TARGET_DIR="${TMPDIR:-/tmp}/roohial57.github.io-deploy"
USER_REPO="https://github.com/roohial57/roohial57.github.io.git"

cd "$ROOT"
npm install
npm run build

rm -rf "$TARGET_DIR"
git clone "$USER_REPO" "$TARGET_DIR"
cd "$TARGET_DIR"

# Keep git history, replace site files
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R "$ROOT/dist/." .
# Ensure no custom domain redirect breaks github.io
rm -f CNAME
touch .nojekyll

git add -A
if git diff --staged --quiet; then
  echo "No changes to publish."
  exit 0
fi

git commit -m "Publish developer portfolio for GitHub profile"
git push origin HEAD:main

echo
echo "Done. Add this link on your GitHub profile:"
echo "https://roohial57.github.io/"
