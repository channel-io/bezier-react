---
"@channel.io/bezier-react": major
---

**Breaking Changes: Property updates in `Slider` component**

- No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- `dir` type is narrowed from `string | undefined` to `ltr | rtl | undefined`
