---
"@channel.io/bezier-codemod": minor
---

Add `v2-foundation-to-css-variable-spacing` codemod to convert the foundation's spacing variable to pixels

This transforms

```tsx
import { styled } from "@channel.io/bezier-react"

export const Wrapper = styled.div`
  padding: ${({ foundation }) => foundation?.spacing.s5};
`
```

into

```tsx
import { styled } from "@channel.io/bezier-react"

export const Wrapper = styled.div`
  padding: 12px;
`
```
