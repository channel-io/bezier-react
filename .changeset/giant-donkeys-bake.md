---
"@channel.io/bezier-react": minor
---

Re-implement `Tooltip` component.

BREAKING CHANGES

- No longer render div elements outside of the trigger(children) component.
- The legacy tooltip is now exported with the name `LegacyTooltip`.
- The `keepInContainer` property defaults from false to true.

`Tooltip` is a component that shows additional information when the mouse hovers or the keyboard is focused.

```tsx
// Anatomy of the Tooltip
<TooltipProvider>
  <Tooltip />
</TooltipProvider>

// Example of a Tooltip with a button
<Tooltip content="Ta-da!">
  <button>Hover me</button>
</Tooltip>
```
