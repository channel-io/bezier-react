---
'@channel.io/bezier-react': minor
---

Add v3 `Toast`.

The v3 toast keeps the existing provider and hook workflow while narrowing the
semantic preset surface to `info`, `success`, and `error`. Presets now control
the fixed icon color, and `icon` remains available only as an icon-shape
override.

The visual treatment now follows v3 tokens with `color/fill/grey/heavier`,
`elevation-2`, 16px radius, fit-content width, 88px minimum width, and 460px
maximum width.
