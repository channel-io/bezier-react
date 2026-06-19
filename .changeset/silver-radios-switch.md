---
'@channel.io/bezier-react': patch
---

Add v3 `Tooltip`, `RadioGroup`, and `Switch` components.

`Tooltip` keeps the existing trigger-as-children and content-as-prop API while
aligning the visual treatment with v3 tokens. The v3 `Help` component now uses
this v3 `Tooltip` internally.

`RadioGroup` keeps the existing `value`, `defaultValue`, `onValueChange`, and
`Radio` composition model, uses the internal v3 stack layout, and defaults item
spacing by direction: 0 for vertical groups and 20 for horizontal groups.

`Switch` keeps the existing checked-state API, adds optional inline label
content through `children`, and follows the single-size v3 form control policy.
