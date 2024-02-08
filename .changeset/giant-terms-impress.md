---
"@channel.io/bezier-codemod": patch
---

Fix bug in `v2-import-from-bezier-to-styled-components` codemod when there are only named imports as following:

```tsx
// As-is
import { css } from "@channel.io/bezier-react";

// To-be
import { css } from "styled-components";
```
