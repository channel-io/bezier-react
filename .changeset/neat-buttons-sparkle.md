---
"@channel.io/bezier-react": patch
---

Refine beta component interfaces.

- Add native anchor support to beta Button and IconButton while keeping custom `as` wrappers available.
- Remove per-toast `zIndex` and keep stacking control on ToastProvider.
- Share leading/trailing content prop typing across beta components.
- Keep AlphaDialogPrimitive available without legacy deprecation warnings.
