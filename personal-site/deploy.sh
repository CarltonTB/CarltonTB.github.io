#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:CarltonTB/CarltonTB.github.io.git master

cd -
