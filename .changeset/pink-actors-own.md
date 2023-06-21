---
"@channel.io/bezier-react": minor
---

Correctly change `children` prop on components that pass `children` prop directly to radix-ui `Slot`.

**BREAKING_CHANGE**: `children` prop of the following components will be changed from `React.ReactNode` to `React.ReactElement`.

- `Tooltip`
- `ModalTrigger`
- `ModalClose`
- `VisuallyHidden`
