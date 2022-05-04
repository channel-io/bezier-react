#!/bin/bash

./node_modules/@svgr/cli/bin/svgr \
  -d ./src/components/Icon/generated \
  --template ./scripts/icon-template.js \
  --index-template ./scripts/icon-index-template.js \
  ./src/components/Icon/assets
