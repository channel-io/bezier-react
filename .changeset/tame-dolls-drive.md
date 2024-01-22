---
"@channel.io/bezier-react": major
---

**Breaking Changes: Reorganizing `OutlineItem` component**

`OutlineItem` component was originally designed as a component to draw a tree-like view, *but it was not used as intended in production*. We simplified the component's responsibilities by removing unused properties while retaining the component's ability to apply indentation to subcomponents.

- No longer support `paddingLeft` property. **By default, 6px of left padding has been added.** If you need to make changes, override the style.
- No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- No longer support `iconStyle`, `iconClassName`, `iconInterpolation`, `contentStyle`, `contentClassName` and `contentInterpolation`. This decision was made to reduce excessive flexibility in the interface.
- No longer support `leftIcon` property. Removed for consistency with other component interfaces. Replace it to `leftContent`.
- No longer support `leftIconColor` and `leftIconTestId` property.
- No longer support `name` property. The second argument (name) of `onClick` is also removed. If you need an identifier, combine functions outside of the component.
- No longer support `hide`, `optionKey` and `disableIconActive` property. Replace `hide` property with conditional rendering.
- No longer support `onOpen`, `onClickArrow`, `selectedOutlineItemIndex` and `onChangeOption` property.
