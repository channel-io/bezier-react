---
"@channel.io/bezier-react": major
---

**Breaking Change: Removal of `LegacySegmentedControl` Component**

We have removed the `LegacySegmentedControl` component from our library. This change follows its deprecation in `next-v1.204`.

**Reasons for Removal:**

- To enhance web accessibility and improve keyboard navigation.
- To align with our goals of design modernization and consistent user experience.

**Impact:**

`LegacySegmentedControl` component is no longer available and cannot be used in your projects. Replace all instances of `LegacySegmentedControl` with `SegmentedControl` component.
