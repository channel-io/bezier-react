---
'@channel.io/bezier-react': minor
---

Add v3 composite components: `Tabs` and `Banner`.

`Tabs` supports `s` and `m` sizes from the root `Tabs` component, optional leading and trailing content on `TabItem`, right-aligned `TabActions`, and truncated tab labels.

`Banner` keeps the existing color-based variant API except for the removed `alt` variant, renames the leading icon prop to `leadingIcon`, and renders action icons with v3 `IconButton` styling so the action icon follows the variant icon color.

Improve v3 `Checkbox` state styling with shared state mixins, an outer error ring, keyboard-toggle story coverage, and inverse icon color for checked and indeterminate states.
