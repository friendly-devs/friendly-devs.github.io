
#!/bin/sh

# Config username and email
git config --global user.email "vovantam.dev@gmail.com"
git config --global user.name "Võ Văn Tâm"

# Checkout new branch
git checkout -b gh-pages

# Build static pages
npm run build

# Remote git
rm -rf .git
cd build

# Init git
git init
git remote add origin git@github.com:friendly-devs/friendly-devs.github.io.git

# Push to github repository
git add .
git commit -m "Publishing github pages [skip ci]"
git push origin gh-pages -f