#!/bin/bash

svgr \
  -d ./react/components \
  --template ./scripts/react/icon-template.js \
  --index-template ./scripts/react/icon-index-template.js \
  ./icons
