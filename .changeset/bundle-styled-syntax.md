---
'@channel.io/stylelint-bezier': patch
---

Bundle the styled-components custom syntax so TypeScript and TSX linting works without consumers installing `postcss-styled-syntax` directly. Require `postcss@^8.5.1` and `stylelint@>=16.14.1` as peer dependencies so the parser and Stylelint use a compatible PostCSS host.
