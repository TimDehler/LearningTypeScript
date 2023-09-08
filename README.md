# LearningTypeScript

## push.sh

This can only be used if you activate pre-push .git-hook locally with content of:

#!/bin/sh
npm run test || exit 1
