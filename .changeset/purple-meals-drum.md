---
"@channel.io/bezier-react": major
---

Rename the padding props of the layout props and margin props from shorthand to the same as the css property name. (e.g. `m` -> `margin`, `p` -> `padding`). This change is to make it easier to understand the props and improve the consistency of the props.

so, `Text` and `Icon` components have the following changes.

- `Text` : changed props
  - `marginAll` -> `margin`
- `Icon` : only added properties
  - `margin`
  - `marginX`
  - `marginY`
