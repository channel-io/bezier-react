---
"@channel.io/bezier-react": major
---

**Breaking Changes: Reorganizing `KeyValueListItem` component**

- **Renamed to `KeyValueItem`.**
- - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- No longer support `valueWrapperStyle`, `valueWrapperClassName`, `valueWrapperInterpolation`, `keyWrapperStyle`, `keyWrapperClassName` and `keyWrapperInterpolation`. This decision was made to reduce excessive flexibility in the interface.
- No longer support `AdditionalColorProps` and `show` property of ItemAction.
- The icon inside ItemAction is now implemented through `Button` component.
- The Value Container will now always have 100% of the parent's width.
