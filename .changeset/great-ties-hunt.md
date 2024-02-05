---
"@channel.io/bezier-react": major
---

**Breaking changes: Remove `testId` and related properties**

No longer supports `testId` and related properties(e.g. `wrapperTestId`). `testId` is a property used internally by the library for testing with testing-library (`getByTestId`). We don't see a need to expose this as a public API, so we remove it.

If you were using it, please replace it with the `data-testid` property. See <https://testing-library.com/docs/queries/bytestid/>.
