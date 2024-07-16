---
'@channel.io/bezier-icons': patch
---

Revert `IconSource` type change.
- `ref` is not forwarded to `Icon` component any more
- Now `IconSource` type is `React.FunctionComponent<React.SVGProps<SVGSVGElement>>`
