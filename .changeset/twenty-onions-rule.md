---
"@channel.io/bezier-react": major
---

No longer supports `smoothCorners` mixin. Use `AlphaSmoothCornersBox` components instead.

```tsx
// Before
const Box = styled.div`
  ${smoothCorners({
    borderRadius: 10,
    shadow: '0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    shadowBlur: 15,
    backgroundColor: 'white',
    hasBackgroundImage: true,
  })}
`

<Box>...</Box>

// After
<AlphaSmoothCornersBox 
  borderRadius={10}
  shadow={{
    offsetX: 0,
    offsetY: 5,
    blurRadius: 15, 
    spreadRadius: 0,
  }}
  backgroundColor="white"
  backgroundImage="..."
>...</AlphaSmoothCornersBox>
```
