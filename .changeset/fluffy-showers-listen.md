---
'@channel.io/bezier-react': minor
---

Add v3 interactive primitive components: `Checkbox`, `Button`, and `IconButton`.

`BaseButton` is added as an internal foundation for v3 button-like components, with reset styles, default `type="button"`, and v3 focus-visible styling.

`Checkbox` provides the v3 checkbox API with a fixed medium size, form-field integration, and beta-token-based visual states.

`Button` adds v3 `filled`, `outlined`, and `ghost` variants with `primary`, `secondary`, and `destructive` semantics, label, leading/trailing content, active and loading states, and beta-token-based colors. Loading spinners follow the label color.

`IconButton` adds the icon-only v3 button API with the same variant and semantic model as `Button`, accessible-name support through native button props, and loading states.

`Spinner` now uses border-box sizing so each size maps to its visual bounding box, updates `xl` to 48px, and aligns stroke widths to the v3 design.
