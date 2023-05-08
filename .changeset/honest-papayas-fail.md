---
"@channel.io/bezier-react": minor
---

BREAKING CHANGE

Change `LegacyRadio` component to export individually named instead of the `LegacyRadio` namespace.

```diff
- import { LegacyRadio } from '@channel.io/bezier-react'
- type RadioProps = LegacyRadio.RadioProps
- const RadioComponent = LegacyRadio.Radio
+ import { LegacyRadio, type LegacyRadioProps } from '@channel.io/bezier-react'
+ type RadioProps = LegacyRadioProps
+ const RadioComponent = LegacyRadio
```
