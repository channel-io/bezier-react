---
"@channel.io/bezier-react": patch
---

Optimize warn function to prevent duplicate console logs

- Add `scope` parameter to warn function to show warnings only once per scope
- Apply scope to legacy icon deprecation warnings in Button, Banner, and SectionLabel components
- Add comprehensive test coverage for the new warn function behavior

This prevents UI blocking and developer tool freezing when using legacy icons with virtual lists or large item counts.