---
'@channel.io/bezier-react': minor
---

Reimplement beta `Spinner` with SVG so the arc has round caps. The default color is now `fill-neutral-heavy` (was `icon-neutral`), the stroke eases off at larger sizes (36: 4.25px, 42/48: 4.5px), and the rotation slows down under `prefers-reduced-motion`.
