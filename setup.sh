#!/usr/bin/env bash
set -e

# Usage: ./setup.sh <your-github-username> <repo-name>
USER="$1"
REPO="$2"

if [ -z "$USER" ] || [ -z "$REPO" ]; then
  echo "Usage: ./setup.sh <github-username> <repo-name>"
  exit 1
fi

git init -b main
git add .
git commit -m "SEO Hunt — Semrush Hub: initial commit"
git remote add origin https://github.com/$USER/$REPO.git
echo "Now create an empty repo named $REPO on GitHub under $USER, then press Enter to push."
read
git push -u origin main

echo "Done. Go to Vercel → Import Project → https://github.com/$USER/$REPO"
