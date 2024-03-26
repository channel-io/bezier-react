---
"@channel.io/bezier-react": major
---

**Breaking Changes: Property updates in `Select` component**

- No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- No longer support `dropdownInterpolation` property. Replace any usage of `dropdownInterpolation` property with appropriate `dropdownStyle` or `dropdownClassName` implementations.
- The type of `zIndex` property is changed to a z-index token. (e.g. `"modal"`)
