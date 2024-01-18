---
"@channel.io/bezier-react": major
---

**Breaking Changes: Property updates in `ListItem` component**

- No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- No longer support `iconStyle`, `iconClassName`, `iconInterpolation`, `contentStyle`, `contentClassName` and `contentInterpolation`. This decision was made to reduce excessive flexibility in the interface.
- No longer support `leftIcon` property. Removed for consistency with other component interfaces. Replace it to `leftContent`.
- No longer support `name` property. The second argument (name) of `onClick` is also removed. If you need an identifier, combine functions outside of the component.
- No longer support `hide`, `nested`, `optionKey` and `disableIconActive` property. Removed because it is a legacy property. Replace `hide` property with conditional rendering.
- The size changes according to the `ListItemSize`. This is a change to unify the design. Please change it like below.
  - `ListItemSize.S` -> `ListItemSize.XS`
  - `ListItemSize.M` -> `ListItemSize.S`
  - `ListItemSize.L` -> `ListItemSize.M`
  - `ListItemSize.XL` -> `ListItemSize.L`

**Minor Changes:**

- Fix incorrect text size for `XL`(now `L`) size.
