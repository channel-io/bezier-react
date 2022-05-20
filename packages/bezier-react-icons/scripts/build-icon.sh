#!/bin/bash

svgr \
  -d ./src/generated \
  --template ./scripts/icon-template.js \
  --index-template ./scripts/icon-index-template.js \
  ./src/assets
