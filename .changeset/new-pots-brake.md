---
"@channel.io/bezier-react": minor
---

Add `container` property to `Tooltip` component.

```tsx
const [container, setContainer] = useState<HTMLDivElement | null>(null)

return (
  <div ref={setContainer}>
    <Tooltip
      content="Lorem ipsum"
      container={container}
    >
      <div />
    </Tooltip>
  </div>
)
```
