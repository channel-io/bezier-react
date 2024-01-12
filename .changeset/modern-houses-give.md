---
"@channel.io/bezier-react": major
---

**Breaking Change: Modification of `typo` prop in `Text` Component to String Literal**

the removal of `styled-components` from `bezier-react` has made CSS Interpolation unavailable.

**Migration Instructions:**

Use [`v2-text-component-interface`](https://github.com/channel-io/bezier-react/tree/alpha/packages/bezier-codemod#change-interface-of-text) transformer from `bezier-codemod` for automated migration.
