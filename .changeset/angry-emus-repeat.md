---
"@channel.io/bezier-react": patch
---

Fixed a rendering bug that occurs when using `react-resize-detector` and `asChild`prop of `radix-ui` simultaneously.
- Removed indicator adjusting logic by `react-resize-detector` using css transform property