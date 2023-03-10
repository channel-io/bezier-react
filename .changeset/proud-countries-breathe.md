---
"@channel.io/bezier-react": patch
---

Implement `VisuallyHidden` component.

`VisuallyHidden` is a component that visually hides the content. It doesn't render any DOM node. It is useful when you want to provide additional information to screen readers.

```tsx
  <VisuallyHidden>
    <span>This is a visually hidden text.</span>
  </VisuallyHidden>
```
