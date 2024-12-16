#!/bin/sh
. "$(dirname "$0")/../.husky/_/husky.sh"

# Run semantic-release
yarn release

# Add any changes
git add .

# Commit the changes
git commit -m "chore(release): commit changes after release"

# Push the changes
git push
