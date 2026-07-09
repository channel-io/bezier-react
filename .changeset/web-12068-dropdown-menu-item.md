---
'@channel.io/bezier-react': patch
---

Support semantic beta item roots with stricter link typing. `BaseItem` can render anchors and buttons from its own props, `DropdownMenuItem` renders as an anchor when `href` is provided while staying role-based by default, link branches allow anchor click interception with `href`, and item-like components can opt into string content line clamping through `contentMaxLines`.
