---
"@channel.io/bezier-react": major
---

**Breaking Changes: Deprecate support for `styled-components` related modules**

- No longer support legacy foundation modules. Use the `useToken` hook and components to replace it
  - `LightFoundation` and `DarkFoundation`
  - `Spacing`
  - `ev1`, `ev2`, `ev3`, `ev4`, `ev5` and `ev6`
  - `createThemes`, `Theme`, `SemanticNames`, `LightTheme` and `DarkTheme`
  - `TransitionDuration` and `Transition`
  - `Border`
  - `Typography`, `TypoAbsoluteNumber`, `LineHeightAbsoluteNumber` and `TypographyType`
  - `absoluteCenter`, `disableAutoMinimum`, `hideScrollbars` and `ellipsis`
  - `ThemeVarsAdditionalType` and `ThemeVars`
  - `GlobalStyle`
  - `Foundation`
  - `GlobalStyleProp`
  - `createGlobalStyle`, `styled`, `css`, `FoundationProvider`, `useFoundation`, `keyframes`, `StyleSheetManager` and `ServerStyleSheet`
- No longer support `BezierProvider`. Use the `AppProvider` instead
- No longer support `gap` and `touchableHover` mixins. Please implement and use your own

```tsx
function gap(spacing: number): InjectedInterpolation {
  return css`
    gap: ${spacing}px;

    @supports not(gap: ${spacing}px) {
      margin-top: ${-spacing}px;
      margin-left: ${-spacing}px;

      > * {
        margin-top: ${spacing}px;
        margin-left: ${spacing}px;
      }
    }
  `
}

function touchableHover(interpolation: InjectedInterpolation): InjectedInterpolation {
  return css`
    @media (hover: hover) {
      &:hover {
        ${interpolation}
      }
    }

    @media (hover: none) {
      &:active {
        ${interpolation}
      }
    }
  `
}
```

- No longer support `inputTextStyle`, `inputPlaceholderStyle`, `inputWrapperStyle`, `focusedInputWrapperStyle` and `erroredInputWrapperStyle`. Please migrate using `@channel.io/bezier-codemod`'s `v2-interpolation-to-css-variable` transformer.
