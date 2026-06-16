---
'@channel.io/bezier-react': patch
---

Add the v3 `SegmentedControl` components.

The v3 API keeps the existing `value`, `defaultValue`, `onValueChange`, and
`radiogroup` / `tabs` composition model, while aligning the item content model
with other v3 controls:

- `SegmentedControlItem` now supports `leadingContent` and `trailingContent`.
- Icon-only items are expressed with the `icon` prop and require `aria-label`.
- Label item children are treated as the visible string label instead of a
  custom layout slot.
- Supported sizes are narrowed to `s` and `m`.

Also align v3 Tabs focus-visible styling with the shared `state.focus` style.
