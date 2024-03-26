---
"@channel.io/bezier-react": minor
---

Add `useRootElement` hook. It is only available to `WindowProvider` children, and provides easy access to the root element of window context value.

```tsx
const { window, document, rootElement } = useWindow();
// Same as useWindow().rootElement
const rootElement = useRootElement();
```
