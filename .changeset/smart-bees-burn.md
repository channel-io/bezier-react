---
"@channel.io/bezier-react": minor
---

Implement `AlphaSmoothCornersBox`.

`AlphaSmoothCornersBox` is a simple `div` element with smooth corners.
It is available by enabling the `SmoothCornersFeature`.

```tsx
<FeatureProvider features={[SmoothCornersFeature]}>
  <AlphaSmoothCornersBox />
</FeatureProvider>
```

- Change to use `AlphaSmoothCornersBox` for `Avatar`'s internal implementation. `Avatar`'s border is now implemented as a box-shadow instead of a qseudo element.
- Change to use `AlphaSmoothCornersBox` for ellipsis icon of `AvatarGroup`'s internal implementation.
