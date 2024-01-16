---
"@channel.io/bezier-react": minor
---

Add `offset` prop for positioning the toast container to `ToastProvider`

- Adjust the default position of the toast container to `GNB_WIDTH` on the left and `0` on the right and bottom
- Inject the `GNB_WIDTH` value as default into the offset object of `ToastProvider` to ensure the same behavior as before
