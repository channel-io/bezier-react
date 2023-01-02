---
"@channel.io/bezier-react": minor
---

Re-implement `Tabs` component

BREAKING_CHANGES

- The existing `Tabs` is renamed `LegacyTabs` and will be removed from following PR.
- No longer use selectedOptionIndex in `Tabs`
- Some props such as `withIndicator`, `optionKey` are removed from `TabItem`
- Wrap with `TabContent` component for tab panel
