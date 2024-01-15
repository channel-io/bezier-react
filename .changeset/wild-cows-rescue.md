---
"@channel.io/bezier-react": major
---

**Breaking Changes: Property updates in `TextArea` component**

- No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- No longer support `wrapperStyle`, `wrapperClassName` and `wrapperInterpolation` property. It was never properly implemented before, and the Wrapper element inside was also removed.
