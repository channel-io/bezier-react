---
"@channel.io/bezier-react": major
---

**Breaking Changes: The enum type that the component receives as props is changed to a string literal type**

The properties that change are:

- `AvatarSize`
- `BannerVariant`
- `ButtonColorVariant`, `ButtonStyleVariant`, `ButtonSize`
- `EmojiSize`
- `SegmentedControlSize`
- `TabSize`
- `ListItemVariant`, `ListItemSize`
- `StatusType`, `StatusSize`

When changed to string literal type, it is changed to the value of enum. e.g. `ButtonStyleVariant.MonoChrome` -> `monochrome`
