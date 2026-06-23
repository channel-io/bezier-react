---
'@channel.io/bezier-react': patch
'@channel.io/bezier-tokens': patch
'@channel.io/stylelint-bezier': patch
---

Add shared state color tokens and improve v3 state styling.

- Add semantic state color tokens and surface deprecated token warnings through
  `stylelint-bezier`.
- Add shared v3 state ring mixins and apply them to input and non-input control
  states.
- Remove the v3 `Tooltip` icon prop, tighten Tooltip spacing, and update its
  radius.
- Fix v3 `CollapsibleSection` trigger chevron behavior and Help tooltip
  placement.
- Improve dark mode colors for v3 radio, switch, slider, and progress bar
  controls.
