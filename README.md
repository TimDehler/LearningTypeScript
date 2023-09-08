# LearningTypeScript

This repository is for me learnig coding in typescript. The configuration and exact folder structure is needed because of the Typescript compiler. This is needed to run all the commands statet in package.json

## push.sh

This can only be used if you activate pre-push .git-hook locally with content of:

```shell
#!/bin/sh <br>
npm run test || exit 1
```

## .evn

Not needed yet
