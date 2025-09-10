---
'@channel.io/bezier-react': minor
---

BREAKING: Button no longer accepts children. Use text, leftContent, and rightContent instead.
Refactor(Tabs): Migrate TabItem to BaseButton and port only the tertiary + monochrome-light styles, preserving the indicator and accessibility.
Feat(Tabs): Add optional maxWidth prop to TabItem; detect ellipsis via useElementTruncated and show Tooltip only when truncated; defaults remain unchanged.
Docs(Tabs): Update Storybook for Tabs.
