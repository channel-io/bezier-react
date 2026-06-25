---
'@channel.io/bezier-react': patch
---

Refine v3 tooltip, menu, select, and item row APIs.

Tooltip now defaults to `top-center` placement and renders description above content. `Help` follows the Tooltip default placement unless a placement is explicitly provided.

DropdownMenu item rows are fixed to the design-system medium item size. Select and MultiSelect option rows are also fixed to medium, while their root `size` prop has been replaced with `triggerSize` to describe the default trigger size explicitly.

String descriptions in BaseItem and SectionItem no longer apply multiline truncation by default.
