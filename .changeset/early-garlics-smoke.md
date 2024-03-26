---
"@channel.io/bezier-codemod": minor
---

Fix typo in `v2-z-index-interpolation-to-css-variable` codemod. It now transforms `${ZIndex.Float}` enum to `var(--z-index-floating)`, not `var(--z-index-float)`.
