---
"@channel.io/bezier-react": minor
---

Re-implement `SegmentedControl` component. Legacy components are exported to the `LegacySegmentedControl` namespace.

`SegmentedControl` is component that looks like a combination of a radio and a button. They can be used in place of tabs and as input elements in modals. If you have more than five items, use a different element, such as a dropdown.

`SegmentedControl` can be used as a radio group, tabs element depending on its `type`.

```tsx
// Anatomy of the SegmentedControl type="radiogroup"
<SegmentedControl type="radiogroup">
  <SegmentedControlItem />
</SegmentedControl>

// Anatomy of the SegmentedControl type="tabs"
<SegmentedControl type="tabs">
  <SegmentedControlTabList>
    <SegmentedControlItem />
  </SegmentedControlTabList>

  <SegmentedControlTabContent />
</SegmentedControl>
 ```
