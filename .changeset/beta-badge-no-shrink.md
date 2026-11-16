---
"@channel.io/bezier-react": patch
---

Keep beta `Badge` on a single line in flex layouts: a badge that is not `truncated` no longer shrinks or wraps its label (`flex-shrink: 0`, `white-space: nowrap`). Truncated badges stay shrinkable.
