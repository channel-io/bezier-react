---
"@channel.io/bezier-react": major
---

**Breaking Changes: Property updates in `Text` component**

`typo` prop in the `Text` component has been changed to accept only string literals in order to simplify the API and improve the predictability of text styling, particularly in the context of the removal of `styled-components` from `bezier-react`, which has led to the unavailability of CSS Interpolation.

**Migration Instructions:**

Use [`v2-text-component-interface`](https://github.com/channel-io/bezier-react/tree/alpha/packages/bezier-codemod#change-interface-of-text) transformer from `bezier-codemod` for automated migration.
