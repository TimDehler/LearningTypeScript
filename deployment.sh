#!/bin/bash

npm run test
git add .
git commit -m "$1"
git push