---
"@channel.io/bezier-react": major
---

**Breaking Changes: Reorganizing `SectionLabel` component**

`SectionLabel` is a complex component that can be used both in the form of an accordion and as a simple heading. To better meet the needs of both, we've changed the internal implementation of the component.

We've also made changes to make styling overrides as predictable as they are for other components. The style override property, which was unnecessarily open, is now removed.

- Remove the internal div wrapper. `style`, `className` properties are now injected into the component instead of the old `wrapperStyle`, `wrapperClassName`.
- No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
- No longer support additional style properties of `wrapper`, `contentWrapper`, `leftWrapper` and `rightWrapper`.
- The side content property is changed. It is no longer possible to override `iconColor`.
- When injecting `onClick` handler, the root element now behaves as a `button` element. This change is to better support keyboard focus control.
