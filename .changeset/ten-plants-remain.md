---
"@channel.io/bezier-react": major
---

**Breaking Change: Removal of `as`, `interpolation` Properties and Narrowing of `dir` Type in `Slider` Component**

- No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- `dir` type is narrowed from `string | undefined` to `ltr | rtl | undefined`
