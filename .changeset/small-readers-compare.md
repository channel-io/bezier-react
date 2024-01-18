---
"@channel.io/bezier-react": major
---

**Breaking Changes: Property updates in `TextField` component**

- No longer support `interpolation`-related properties. Replace any usage of `interpolation` -related properties with appropriate `***style` or `***className` implementations.
- No longer support `inputStyle` and `inputClassName` properties. Replace any usage of `inputStyle` and `inputClassName` with appropriate `style` or `className` implementations.
- Change the value of `TextFieldVariant` enum value to string.
