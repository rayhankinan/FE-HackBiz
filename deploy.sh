#!/usr/bin/env sh
set -e
yarn build
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f https://github.com/rayhankinan/FE-HackBiz.git master:gh-pages

cd -