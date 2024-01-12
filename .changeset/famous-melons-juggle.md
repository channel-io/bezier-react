---
"@channel.io/bezier-react": major
---

**Breaking Change: `AlphaCenter` component becomes `Center` component. Removal of `as` and `interpolation` Property from `Center` Component**

- No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- Now supports margin props, layout props and `display` prop.
