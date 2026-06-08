---
'@channel.io/bezier-react': minor
---

Add v3 atomic primitive components: `Box`, `Divider`, `Spinner`, `Text`, `HStack`, `VStack`, `Icon`, and `SmoothCornersBox`.

`Box`, `HStack`, and `VStack` use v3 layout and margin props with beta-only token support for visual props.

`Spinner` keeps the existing size API, defaults to an accessible loading status, accepts beta semantic colors through v3 color props, and no longer shrinks inside flex layouts.

`Text` keeps the existing typography API while using beta text semantic colors and global typography font-weight tokens. Its `bold` style maps to the `600` font-weight token.

`Icon` uses beta semantic color tokens and string pixel size values (`"10"`, `"12"`, `"16"`, `"20"`, `"24"`, `"36"`, `"44"`) to align with `AvatarSize` and `EmojiSize`. It defaults to `size="24"` and `color="icon-neutral"`.

`SmoothCornersBox` keeps the existing smooth-corners behavior and feature flag integration while narrowing color-related props to beta semantic color tokens for v3.
