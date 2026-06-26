---
'@channel.io/bezier-react': patch
'@channel.io/bezier-tokens': patch
---

Update beta state tokens and state ring styling.

- Add beta `state.default`, `state.active`, and `state.warning` shadow tokens for input state styling, and keep the previous `state.input.*` tokens as deprecated aliases.
- Add beta typography `label` and `caption` tokens, and add `xx*` typography aliases while deprecating the previous `2x*` names.
- Replace beta input state mixins with direct state token usage.
- Rename beta non-input ring mixins to `focus-ring` and `error-ring`, and use outline-based rings.
- Update the Foundation color Storybook page ordering, swatch sizing, and text readability.
