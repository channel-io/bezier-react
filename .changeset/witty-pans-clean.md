---
"@channel.io/bezier-react": major
---

**Breaking Changes: `AlphaStack` component has been changed to a `Stack` component, and `Stack` component has been changed to `LegacyStack` component.**

Changes to remove the dependency of `Stack` and `StackItem` to allow stack layouts to be configured without additional DOM elements. And improved the existing `AlphaStack` to support more Flex layout related properties like reverse, wrap, and more align options, etc. See StackProps for more information.

We also added new `HStack` and `VStack` components, which are shorthand components that fix the direction prop of `AlphaStack`. As mentioned above, the existing components become `LegacyHStack`, `LegacyVStack`.

The layout implemented by `StackItem` can be partially replaced by the Layout component's `grow`, `shrink` common properties and margin common properties. Note that the `align`, `justify` (align-self, justify-self in CSS flex) properties provided by `StackItem` are not provided by the Layout component.

```jsx
/* AS-IS */
return (
  <Stack direction="horizontal" spacing={8} style={{ width: 300, height: 50 }}>
    <StackItem grow shrink weight={1} />
    <StackItem weight={0} size={10} marginBefore={20}>
      <Stack direction="vertical" />
    </StackItem>
  </Stack>
)

/* TO-BE */
return (
  <Stack direction="horizontal" spacing={8} width={300} height={50}>
    <Box grow={1} shrink={1} />
    <Stack direction="vertical" shrink={0} width={10} ml={12} />
  </Stack>
)
```

The changes also apply to other components that use `Stack` internally, and there are a few breaking changes.

- `RadioGroup`, `ButtonGroup`, `FormGroup` no longer support `as` prop.
