---
"@channel.io/bezier-react": patch
---

Introduce `AutoFocus` component.

`AutoFocus` is a component that automatically focuses its child component when they are added to the document. It is useful when you want to focus on a specific element when the component is mounted. It doesn't render any DOM node.

```tsx
<AutoFocus>
  <button>Close</button>
</AutoFocus>
```
