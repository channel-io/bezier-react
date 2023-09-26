---
"@channel.io/bezier-react": patch
---

Implement the feature to add scripts by injecting a window object into the `activate` function of `SmoothCornersFeatures`, if needed.

```tsx
SmoothCornersFeature.activate(window)
```
