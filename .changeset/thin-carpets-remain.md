---
"@channel.io/bezier-react": minor
---

Allow external window for bezier

- You can inject window object with WindowProvider.
  - example
    ```ts
    <WindowProvider 
      window={givenExternalWindow ?? window} 
      document={givenExternalDocument ?? window.document}
    >
      // ...
    </WindowProvider>

    // use window in context with useWindow
    const { window, document } = useWindow()
    ```
- BezierProvider includes WindowProvider so that inject external window with BezierProvider.
- WindowProvider also provide getRootElement function that returns window.document.
- Migrate Bezier components to use useWindow instead of functions in utils/dom.ts