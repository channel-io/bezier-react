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
- Rename the v3 row foundation component from `ItemBase` to `BaseItem` and
  update its DropdownMenu and Select usages.
- Fix v3 `CollapsibleSection` trigger chevron behavior, keep trigger trailing
  content at the right edge, and add Section / CollapsibleSection rich label
  stories for leading, help, and trailing content.
- Update the v3 `Help` tooltip default placement.
- Improve dark mode colors for v3 radio, switch, slider, and progress bar
  controls.
