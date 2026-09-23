---
"@channel.io/bezier-react": patch
---

Fix the CJS build so default-imported external dependencies are unwrapped correctly. Since `4.0.0-next.21` externalized dependencies, `dist/cjs` consumed `require('react-textarea-autosize')` without a `.default` interop, so consumers loading the CJS build (Jest, Node SSR) rendered `TextArea` with a `{ __esModule, default }` object and crashed with "Element type is invalid". Setting rollup `output.interop: 'auto'` emits the `__esModule`-aware helper.
