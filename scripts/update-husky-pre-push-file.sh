#!/bin/sh

# Ensure the .husky directory exists
mkdir -p .husky

# Write the pre-push hook script
cat > .husky/_/pre-push << 'EOF'
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

# Run semantic-release
yarn release

# Add any changes
git add .

# Commit the changes
git commit -m "chore(release): commit changes after release"

# Push the changes
git push
EOF

# Make the pre-push hook script executable
chmod +x .husky/_/pre-push
