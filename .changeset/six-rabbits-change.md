---
"@channel.io/bezier-react": minor
---

Add a `FeatureProvider` to make non-required features optional.

BRAKING CHANGES

The smooth corners feature is turned off by default. To make it behave the same as before, wrap the root of app in a `FeatureProvider`, as shown below.

```tsx
import { 
  FeatureProvider,
  SmoothCornersFeature,
  BezierProvider,
} from '@channel.io/bezier-react';

root.render(
  <FeatureProvider features={[SmoothCornersFeature]}>
    <BezierProvider>
      <App />
    </BezierProvider>
  </FeatureProvider>
)
```
