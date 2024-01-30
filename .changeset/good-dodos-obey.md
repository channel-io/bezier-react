---
"@channel.io/bezier-react": major
---

**Breaking Changes: Property updates in `FormControl`, `Select`, and `TextField` component**

- `FormControl` component no longer supports `leftLabelWrapperHeight` props.
- `FormControl` component now supports `size` props, which is passed as context to the child component such as `TextField` and `Select` and specified as the size property.
- The size property of `Select` and `TextField` component changes from enum to string literal union type. Also, `SelectSize` and `TextFieldSize` enum are deprecated.
