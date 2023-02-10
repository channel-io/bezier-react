---
"@channel.io/bezier-react": minor
---

Re-implement `Radio` component.

BREAKING CHANGES

- Legacy `Radio` component is now exported with namespace `LEGACY__Radio`. It will be deprecated.
- New `Radio` component must be used with the new `RadioGroup` component. See below.

```tsx
// AS-IS
<Radio 
  value={value} 
  watchingValue={watchingValue}
  onClick={() => setWatchingValue(value)}
/>

// TO-BE
<RadioGroup 
  value={watchingValue}
  onChangeValue={setWatchingValue}
>
  <Radio value={value} />
</RadioGroup>
```
