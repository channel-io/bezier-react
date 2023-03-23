---
"@channel.io/bezier-react": minor
---

`Checkbox` re-implementation and design updates:

`Checkbox` is a control that allows the user to toggle between checked and not checked.
It can be used with labels or standalone.

```tsx
const [checked, setChecked] = useState(false)
// Controlled / With label
<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
>
  Label
</Checkbox>
// Controlled / Standalone
<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>
// Uncontrolled
<Checkbox
  defaultChecked={true}
>
  Label
</Checkbox>
```

Breaking Changes:

- Delete `CheckType` enum
- Change the allowable value of the `checked` property:
  - AS-IS: `boolean | CheckType`
  - TO-BE: `boolean | 'indeterminate'`
