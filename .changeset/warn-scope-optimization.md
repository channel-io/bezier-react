---
"@channel.io/bezier-react": patch
---

Optimize warn function to prevent duplicate console logs

- Add `scope` parameter to `warn` so each message logs only once per scope
- Apply the scoped warning to legacy-icon deprecation in Button, Banner, SectionLabel
- Add comprehensive tests for the new `warn` behavior
- Prevent UI blocking and developer tool freezing when using legacy icons with virtual lists