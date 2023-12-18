---
"@channel.io/bezier-react": major
---

`typo` prop of `Text` component is changed to a string literal. Please migrate it like below. With the removal of the styled-component from bezier-react, CSS interpolation is no longer available.

```tsx
/* AS-IS */
<Text typo={Typography.Size11} />
<Text typo={Typography.Size12} />
<Text typo={Typography.Size13} />
<Text typo={Typography.Size14} />
<Text typo={Typography.Size15} />
<Text typo={Typography.Size16} />
<Text typo={Typography.Size17} />
<Text typo={Typography.Size18} />
<Text typo={Typography.Size22} />
<Text typo={Typography.Size24} />
<Text typo={Typography.Size30} />
<Text typo={Typography.Size36} />

/* TO-BE */
<Text typo="11" />
<Text typo="12" />
<Text typo="13" />
<Text typo="14" />
<Text typo="15" />
<Text typo="16" />
<Text typo="17" />
<Text typo="18" />
<Text typo="22" />
<Text typo="24" />
<Text typo="30" />
<Text typo="36" />
```
