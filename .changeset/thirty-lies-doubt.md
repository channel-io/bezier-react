---
"@channel.io/bezier-react": minor
---

Re-implement `CheckableAvatar` component.

- `CheckableAvatar` is a checkbox component that looks like `Avatar`.
- It now behaves as a checkbox. Keyboard control is available.
- Add `forwardRef`.

```tsx
const [checked, setChecked] = useState(false)
// Controlled
<CheckableAvatar
  name="John Doe"
  avatarUrl="..."
  checked={checked}
  onCheckedChange={setChecked}
/>
// Uncontrolled
<CheckableAvatar
  name="John Doe"
  avatarUrl="..."
  defaultChecked
/>
```

BREAKING CHANGES

- Change name of `isChecked` property to `checked` property.
- Remove `isCheckable` property.
- Remove `checkedBackgroundColor` property.
- Remove `checkableWrapperClassName` property.
- Remove `checkableWrapperInterpolation` property.
