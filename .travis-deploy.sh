#!/bin/bash

# Originally from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd, with my
# modifications for webpack.

TARGET_BRANCH="pr3__bikeshed"

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

SUPER_REPO="https://$GH_TOKEN@github.com/miguelao/mediacapture-fromelement.git"

git config user.name "Travis CI"
git config user.email "miguelecasassanchez@gmail.com"
git clone $SUPER_REPO

cd mediacapture-fromelement
git checkout $TARGET_BRANCH

bikeshed spec

git commit -m "Auto deploy ${SHA} to GitHub ${TARGET_BRANCH} branch" index.html
git push --force --quiet $SUPER_REPO
