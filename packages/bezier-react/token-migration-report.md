# 토큰 마이그레이션 보고서

## 업데이트 내역

### 2024-XX-XX: token-table-v1.md 업데이트 반영 (gradient)

- `gradient-green` → `green-300` 매핑 추가
- `gradient-green-heavy` → `bgtxt-green-dark` 매핑 추가
- 영향받는 컴포넌트: ProgressBar

### 2024-XX-XX: token-table-v2.md 업데이트 반영

- `fg-black-light` → `fill-neutral-heavy` 매핑 추가
- `bg-grey-lightest` → `fill-grey` 매핑 추가
- `bg-grey-lighter` → `fill-grey-heavy` 매핑 추가
- 영향받는 컴포넌트: AlphaLoader, AlphaToggleButton, AlphaToggleEmojiButtonGroup

### 2024-XX-XX: token-table-v1.md 업데이트 반영 (fill-grey)

- `fill-grey` → `bg-grey-lightest` 매핑 추가 (line 57)
- `fill-grey-heavy` → `bg-grey-lighter` 매핑 추가 (line 58)
- 영향받는 컴포넌트: TextField, TextArea, Select, Banner

### 2025-12-16: token-table-v1.md 업데이트 반영 (motion / typography / layer)

- `--transition-s` → `--beta-motion-transition-fast` 매핑 추가 (token-table-v1.md line 143)
- `--transition-m` → `--beta-motion-transition-default` 매핑 추가 (token-table-v1.md line 144)
- `--font-weight-700` → `--beta-typography-text-weight-bold` 매핑 추가 (token-table-v1.md line 145)
- `--z-index-base` → `--beta-layer-z-index-base` 매핑 추가 (token-table-v1.md line 146)
- `--z-index-floating` → `--beta-layer-z-index-floating` 매핑 추가 (token-table-v1.md line 147)
- `--z-index-overlay` → `--beta-layer-z-index-overlay` 매핑 추가 (token-table-v1.md line 148)
- `--z-index-tooltip` → `--beta-layer-z-index-tooltip` 매핑 추가 (token-table-v1.md line 149)

### 2025-12-18: `packages/bezier-react/src` 잔존 v1/v2 토큰 정리 (테스트/스토리 포함)

- SCSS 잔존 v1 토큰 치환:
  - `Toast/Toast.module.scss`: `--txt-black-darkest` → `--beta-color-text-neutral`
  - `Tabs/Tabs.module.scss`: `--bgtxt-blue-normal` → `--beta-color-fill-accent-blue-heavier`(indicator), `--beta-color-text-accent-blue`(action text)
  - `RadioGroup/RadioGroup.module.scss`: `--bg-black-dark` → `--beta-color-fill-neutral-heavy`
  - `AlphaToggleButton/ToggleButton.module.scss`: `--font-weight-700` → `--beta-typography-text-weight-bold`
  - `Button/Button.module.scss`: `--bgtxt-*-normal|dark` → `--beta-color-fill-accent-*-heavier`
  - `CheckableAvatar/CheckableAvatar.module.scss`: `--bgtxt-green-normal` → `--beta-color-text-accent-green-hovered`
- 테스트/스토리 잔존 v1 문자열 토큰 치환:
  - `SmoothCornersBox.test.tsx`, `Avatar.test.tsx`, `AlphaAvatar.test.tsx`
  - `Icon.stories.tsx`, `Tabs.stories.tsx`, `SegmentedControl.stories.tsx`, `ProgressBar.stories.tsx` 등
- v2(alpha) 문서 스토리 마이그레이션:
  - `src/stories/alpha-color.mdx`, `src/stories/alpha-shadow.mdx`에서 `@channel.io/bezier-tokens/beta`로 전환 및 `--beta-*` 사용
- 참고: `alphaTokens` export 및 `AlphaTokenProvider`는 v2 하위 호환 API로 유지 중

## 진행 상황 요약

### 완료된 컴포넌트 (42개 + Props 사용 컴포넌트 8개)

1. AlphaLoader
2. AlphaToggleButton
3. AlphaToggleEmojiButtonGroup
4. AlphaAvatar
5. AlphaStatusBadge
6. BaseTagBadge
7. Banner
8. Help
9. Tag
10. BaseButton
11. Avatar
12. Button
13. Checkbox
14. RadioGroup
15. Switch
16. TextField
17. TextArea
18. Select
19. AlphaButton
20. AlphaFloatingButton
21. AlphaFloatingIconButton
22. AlphaIconButton
23. AlphaAvatarGroup
24. AlphaToggleButtonGroup
25. AvatarGroup
26. CheckableAvatar
27. Divider
28. Icon
29. KeyValueItem
30. LegacyTooltip
31. ListItem
32. Modal
33. NavItem
34. OutlineItem
35. Overlay
36. ProgressBar
37. SegmentedControl
38. Slider
39. Status
40. Tabs
41. Toast
42. Tooltip

### Props를 사용하는 컴포넌트 (변환 완료)

- AlphaAvatar, Stack (stories), Status (stories), Text (stories), Tooltip, Toast, TextField, Tag

### 토큰 없는 컴포넌트 (변환 불필요)

- Box, Center, Emoji, FormControl, FormHelperText, FormLabel, LegacyStack, NavGroup, SectionLabel, SmoothCornersBox, Spinner, Stack, Text

### 통계

- **변환 완료**: 대부분의 v1/v2 토큰이 v3로 변환됨
- **변환 불가**: 없음 (기존 `--transition-*`, `--font-weight-700`, `--z-index-*`는 token-table-v1.md 매핑 추가로 변환 가능)
- **선택 필요**: 없음

---

## AlphaLoader (`AlphaLoader/Loader.module.scss`)

### 변환 완료

- `--alpha-color-primary-bg-lightest` → `--beta-color-fill-accent-blue-heavy` (line 62)
- `--alpha-color-fg-blue-normal` → `--beta-color-text-accent-blue` (line 63)
- `--alpha-color-bg-black-light` → `--beta-color-fill-neutral-light` (line 67, token-table-v2.md line 142)
- `--alpha-color-bg-absolute-white-lightest` → `--beta-color-fill-absolute-white-light` (line 72, token-table-v2.md line 123)
- `--alpha-color-fg-absolute-white-light` → `--beta-color-icon-absolute-white` (line 73, token-table-v2.md line 42)
- `--alpha-color-fg-black-light` → `--beta-color-fill-neutral-heavy` (line 68, token-table-v2.md 업데이트)

## AlphaToggleButton (`AlphaToggleButton/ToggleButton.module.scss`)

### 변환 완료

- `--alpha-shadow-input-default` → `--beta-state-input-default` (line 24)
- `--alpha-shadow-input-active` → `--beta-state-input-active` (line 75)
- `--alpha-color-bg-grey-lightest` → `--beta-color-fill-grey` (line 23, token-table-v2.md 업데이트)
- `--alpha-color-bg-grey-lighter` → `--beta-color-fill-grey-heavy` (line 42, token-table-v2.md 업데이트)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 9, token-table-v1.md line 143)
- `--font-weight-700` → `--beta-typography-text-weight-bold` (line 70, 98, token-table-v1.md line 145)

## AlphaToggleEmojiButtonGroup (`AlphaToggleEmojiButtonGroup/ToggleEmojiButtonGroup.module.scss`)

### 변환 완료

- `--alpha-color-bg-grey-lightest` → `--beta-color-fill-grey` (line 46, token-table-v2.md 업데이트)
- `--alpha-color-bg-grey-lighter` → `--beta-color-fill-grey-heavy` (line 50, token-table-v2.md 업데이트)

## AlphaAvatar (`AlphaAvatar/Avatar.module.scss`)

### 변환 완료

- `--alpha-opacity-disabled` → `--beta-opacity-disabled` (line 11)

## AlphaStatusBadge (`AlphaStatusBadge/StatusBadge.module.scss`)

### 변환 완료

- `--alpha-color-bg-white-highest` → `--beta-color-surface-high` (line 15, 16, token-table-v2.md line 101)

### 변환 완료 (추가)

- `--z-index-base` → `--beta-layer-z-index-base` (line 9, token-table-v1.md line 146)
- `--z-index-floating` → `--beta-layer-z-index-floating` (line 49, token-table-v1.md line 147)

## BaseTagBadge (`BaseTagBadge/BaseTagBadge.module.scss`)

### 변환 완료

- `--radius-4` → `--beta-radius-4` (line 14)
- `--radius-6` → `--beta-radius-6` (line 19)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 23, 28, token-table-v1.md line 59)
- `--txt-black-darkest` → `--beta-color-text-neutral` (line 24, token-table-v1.md line 3)
- `--txt-black-dark` → `--beta-color-text-neutral-lighter` (line 29, token-table-v1.md line 5)
- `--bg-black-darker` → `--beta-color-fill-neutral-heavier` (line 33, token-table-v1.md line 61)
- `--bgtxt-absolute-white-dark` → `--beta-color-text-absolute-white` (line 34, token-table-v1.md line 23)
- `--bgtxt-*-lighter` → `--beta-color-fill-accent-*-heavy` (line 38-89, token-table-v1.md line 79)
- `--bgtxt-*-normal` → `--beta-color-text-accent-*` (line 39-90, token-table-v1.md line 12-21)

## Banner (`Banner/Banner.module.scss`)

### 변환 완료

- `--radius-12` → `--beta-radius-12` (line 12)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 15, token-table-v1.md line 59)
- `--txt-black-darker` → `--beta-color-text-neutral-light` (line 18, 67, token-table-v1.md line 4)
- `--bgtxt-*-lightest` → `--beta-color-fill-accent-*` (line 23-59, token-table-v1.md line 78-110)
- `--bgtxt-*-normal` → `--beta-color-text-accent-*` (line 26-58, token-table-v1.md line 12-21)
- `--bg-grey-lighter` → `--beta-color-fill-grey-heavy` (line 63, token-table-v1.md line 58 업데이트)
- `--ev-2` → `--beta-elevation-2` (line 64, token-table-v1.md line 135)

## Help (`Help/Help.module.scss`)

### 변환 완료

- `--txt-black-darkest` → `--beta-color-text-neutral` (line 6, token-table-v1.md line 3)

## Tag (`Tag/Tag.module.scss`)

### 변환 완료

- `--bgtxt-cobalt-light` → `--beta-color-text-accent-cobalt` (line 5, token-table-v1.md line 13)

## BaseButton (`BaseButton/BaseButton.module.scss`)

### 변환 완료

- `--bgtxt-cobalt-light` → `--beta-color-text-accent-cobalt` (line 14, token-table-v1.md line 13)

## Avatar (`Avatar/Avatar.module.scss`)

### 변환 완료

- `--opacity-disabled` → `--beta-opacity-disabled` (line 8)

## Button (`Button/Button.module.scss`)

### 변환 완료

- `--bgtxt-absolute-white-dark` → `--beta-color-text-absolute-white` (line 83, 95, 104, 199, token-table-v1.md line 23)
- `--bgtxt-*-normal` → `--beta-color-fill-accent-*-heavier` (line 85, 201, token-table-v1.md line 80)
- `--bgtxt-*-dark` → `--beta-color-fill-accent-*-heavier` (line 89, 205, token-table-v1.md line 80)
- `--bgtxt-absolute-black-lightest` → `--beta-color-fill-absolute-black-light` (line 96, token-table-v1.md line 113)
- `--bgtxt-absolute-black-lighter` → `--beta-color-fill-absolute-black-light` (line 99, token-table-v1.md line 113)
- `--txt-white-normal` → `--beta-color-text-absolute-white` (line 109, token-table-v1.md line 23)
- `--bgtxt-*-lightest` → `--beta-color-fill-accent-*` (line 119, 166, token-table-v1.md line 78)
- `--bgtxt-*-lighter` → `--beta-color-fill-accent-*-heavy` (line 122, token-table-v1.md line 79)
- `--bg-white-low` → `--beta-color-surface-high` (line 212, token-table-v1.md line 120)
- `--bg-white-high` → `--beta-color-surface-high` (line 217, 222, token-table-v1.md line 121)
- `--radius-*` → `--beta-radius-*` (line 229-251, token-table-v1.md line 134-139)
- `--txt-black-dark` → `--beta-color-text-neutral-lighter` (line 267, 281, token-table-v1.md line 5)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 302)
- `--ev-2` → `--beta-elevation-2` (line 306, token-table-v1.md line 135)
- `--ev-3` → `--beta-elevation-3` (line 309, token-table-v1.md line 136)

### 변환 불가 (테이블에 없음)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 9, 10, token-table-v1.md line 143)

## Checkbox (`Checkbox/Checkbox.module.scss`)

### 변환 완료

- `--bg-white-normal` → `--beta-color-surface` (line 21, token-table-v1.md line 118)
- `--bdr-black-dark` → `--beta-color-border-neutral-heavy` (line 23, token-table-v1.md line 52)
- `--bgtxt-green-dark` → `--beta-color-text-accent-green-hovered` (line 28, token-table-v1.md line 86)
- `--bg-black-dark` → `--beta-color-fill-neutral-heavy` (line 48, token-table-v1.md line 60)
- `--input-box-shadow-invalid` → `--beta-state-error` (line 53)
- `--bgtxt-green-normal` → `--beta-color-fill-success` (line 57, token-table-v1.md line 84)
- `--input-box-shadow-focused` → `--beta-state-input-active` (line 66)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 82)
- `--txt-black-darkest` → `--beta-color-text-neutral` (line 99, token-table-v1.md line 3)

## RadioGroup (`RadioGroup/RadioGroup.module.scss`)

### 변환 완료

- `--bgtxt-green-dark` → `--beta-color-text-accent-green-hovered` (line 11, token-table-v1.md line 86)
- `--bg-black-dark` → `--beta-color-fill-neutral-heavy` (line 17, 73, token-table-v1.md line 60)
- `--bg-white-normal` → `--beta-color-surface` (line 48, token-table-v1.md line 118)
- `--bdr-black-dark` → `--beta-color-border-neutral-heavy` (line 51, token-table-v1.md line 52)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 70)
- `--bgtxt-green-normal` → `--beta-color-fill-success` (line 80, token-table-v1.md line 84)
- `--bgtxt-absolute-white-dark` → `--beta-color-text-absolute-white` (line 85, token-table-v1.md line 23)
- `--input-box-shadow-focused` → `--beta-state-input-active` (line 93)

## Switch (`Switch/Switch.module.scss`)

### 변환 완료

- `--bg-black-dark` → `--beta-color-fill-neutral-heavy` (line 13, token-table-v1.md line 60)
- `--radius-12` → `--beta-radius-12` (line 14, 64, token-table-v1.md line 134-139)
- `--bgtxt-green-normal` → `--beta-color-fill-success` (line 33, token-table-v1.md line 84)
- `--bgtxt-green-dark` → `--beta-color-text-accent-green-hovered` (line 36, token-table-v1.md line 86)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 42)
- `--input-box-shadow-focused` → `--beta-state-input-active` (line 47)
- `--bgtxt-absolute-white-dark` → `--beta-color-text-absolute-white` (line 63, token-table-v1.md line 23)
- `--ev-2` → `--beta-elevation-2` (line 65, token-table-v1.md line 135)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 17, 18, 67, token-table-v1.md line 143)

## TextField (`TextField/TextField.module.scss`)

### 변환 완료

- `--txt-black-darkest` → `--beta-color-text-neutral` (line 10, token-table-v1.md line 3)
- `--txt-black-darker` → `--beta-color-text-neutral-light` (line 17, token-table-v1.md line 4)
- `--bg-grey-lightest` → `--beta-color-fill-grey` (line 39, token-table-v1.md line 57 업데이트)
- `--radius-8` → `--beta-radius-8` (line 40, token-table-v1.md line 134-139)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 47, token-table-v1.md line 59)
- `--radius-12` → `--beta-radius-12` (line 55, token-table-v1.md line 134-139)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 63)
- `--input-box-shadow` → `--beta-state-input-default` (line 67)
- `--input-box-shadow-focused` → `--beta-state-input-active` (line 71)
- `--bg-white-normal` → `--beta-color-surface` (line 83, token-table-v1.md line 118)
- `--bg-grey-lighter` → `--beta-color-fill-grey-heavy` (line 87, token-table-v1.md line 58 업데이트)
- `--txt-black-dark` → `--beta-color-text-neutral-lighter` (line 130, token-table-v1.md line 5)
- `--txt-black-darker` → `--beta-color-text-neutral-light` (line 133, token-table-v1.md line 4)
- `--input-box-shadow-invalid` → `--beta-state-error` (line 91)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 43, 44, token-table-v1.md line 143)

## TextArea (`TextArea/TextArea.module.scss`)

### 변환 완료

- `--txt-black-darkest` → `--beta-color-text-neutral` (line 19, token-table-v1.md line 3)
- `--bg-grey-lightest` → `--beta-color-fill-grey` (line 22, token-table-v1.md line 57 업데이트)
- `--radius-8` → `--beta-radius-8` (line 24, token-table-v1.md line 134-139)
- `--input-box-shadow` → `--beta-state-input-default` (line 26)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 38)
- `--bg-white-normal` → `--beta-color-surface` (line 42, 47, token-table-v1.md line 118)
- `--input-box-shadow-focused` → `--beta-state-input-active` (line 43)
- `--input-box-shadow-invalid` → `--beta-state-error` (line 48)
- `--txt-black-darker` → `--beta-color-text-neutral-light` (line 52, token-table-v1.md line 4)
- `--bg-grey-lighter` → `--beta-color-fill-grey-heavy` (line 53, token-table-v1.md line 58 업데이트)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 29, 30, token-table-v1.md line 143)

## Select (`Select/Select.module.scss`)

### 변환 완료

- `--txt-black-darkest` → `--beta-color-text-neutral` (line 17, token-table-v1.md line 3)
- `--bg-grey-lightest` → `--beta-color-fill-grey` (line 19, token-table-v1.md line 57 업데이트)
- `--radius-8` → `--beta-radius-8` (line 20, 65, token-table-v1.md line 134-139)
- `--input-box-shadow` → `--beta-state-input-default` (line 21)
- `--txt-black-darker` → `--beta-color-text-neutral-light` (line 29, token-table-v1.md line 4)
- `--bg-grey-lighter` → `--beta-color-fill-grey-heavy` (line 30, 43, 49, token-table-v1.md line 58 업데이트)
- `--input-box-shadow-invalid` → `--beta-state-error` (line 34)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 39)
- `--input-box-shadow-focused` → `--beta-state-input-active` (line 45)
- `--bg-white-high` → `--beta-color-surface-high` (line 64, token-table-v1.md line 121)
- `--ev-3` → `--beta-elevation-3` (line 66, token-table-v1.md line 136)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 24, 25, token-table-v1.md line 143)

## Divider (`Divider/Divider.module.scss`)

### 변환 완료

- `--bdr-black-light` → `--beta-color-border-neutral` (line 4, token-table-v1.md line 51)

## CheckableAvatar (`CheckableAvatar/CheckableAvatar.module.scss`)

### 변환 완료

- `--bg-grey-dark` → `--beta-color-fill-neutral-heavier` (line 69, token-table-v1.md line 62)
- `--bgtxt-green-dark` → `--beta-color-text-accent-green-hovered` (line 75, token-table-v1.md line 86)

### 변환 완료 (추가)

- `--z-index-base` → `--beta-layer-z-index-base` (line 81, token-table-v1.md line 146)
- `--z-index-floating` → `--beta-layer-z-index-floating` (line 8, token-table-v1.md line 147)

## KeyValueItem (`KeyValueItem/KeyValueItem.module.scss`)

### 변환 완료

- `--radius-6` → `--beta-radius-6` (line 2, 50, token-table-v1.md line 134-139)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 56, token-table-v1.md line 59)
- `--txt-black-darkest` → `--beta-color-text-neutral` (line 75, token-table-v1.md line 3)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 4, 5, token-table-v1.md line 143)

## LegacyTooltip (`LegacyTooltip/LegacyTooltip.module.scss`)

### 변환 완료

- `--txt-black-darkest` → `--beta-color-text-neutral` (line 23, token-table-v1.md line 3)
- `--bg-white-low` → `--beta-color-surface-high` (line 27, token-table-v1.md line 120)
- `--radius-8` → `--beta-radius-8` (line 28, token-table-v1.md line 134-139)
- `--ev-2` → `--beta-elevation-2` (line 29, token-table-v1.md line 135)

### 변환 완료 (추가)

- `--z-index-tooltip` → `--beta-layer-z-index-tooltip` (line 7, token-table-v1.md line 149)

## ListItem (`ListItem/ListItem.module.scss`)

### 변환 완료

- `--txt-black-darkest` → `--beta-color-text-neutral` (line 18, token-table-v1.md line 3)
- `--txt-black-dark` → `--beta-color-text-neutral-lighter` (line 21, token-table-v1.md line 5)
- `--radius-6` → `--beta-radius-6` (line 27, 32, token-table-v1.md line 134-139)
- `--radius-8` → `--beta-radius-8` (line 37, token-table-v1.md line 134-139)
- `--radius-12` → `--beta-radius-12` (line 42, token-table-v1.md line 134-139)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 52)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 57, 61, token-table-v1.md line 59)
- `--bgtxt-blue-normal` → `--beta-color-text-accent-blue` (line 66, 74, 92, 95, token-table-v1.md line 12)
- `--bgtxt-blue-lightest` → `--beta-color-fill-accent-blue` (line 67, token-table-v1.md line 79)
- `--bgtxt-blue-lighter` → `--beta-color-fill-accent-blue-heavy` (line 70, token-table-v1.md line 80)
- `--bgtxt-red-normal` → `--beta-color-text-accent-red` (line 100, 103, token-table-v1.md line 15)
- `--bgtxt-green-normal` → `--beta-color-text-accent-green` (line 108, 111, token-table-v1.md line 14)
- `--bgtxt-cobalt-normal` → `--beta-color-text-accent-cobalt` (line 116, 119, token-table-v1.md line 13)

### 변환 완료 (추가)

- `--transition-m` → `--beta-motion-transition-default` (line 2, token-table-v1.md line 144)
- `--transition-s` → `--beta-motion-transition-fast` (line 15, 143, token-table-v1.md line 143)

## Modal (`Modal/Modal.module.scss`)

### 변환 완료

- `--bgtxt-absolute-black-lighter` → `--beta-color-dim-absolute-black` (line 40, token-table-v1.md line 115)
- `--bg-grey-darkest` → `--beta-color-text-neutral-heaviest` (line 76, token-table-v1.md line 63)
- `--bg-white-high` → `--beta-color-surface-high` (line 79, token-table-v1.md line 121)
- `--radius-20` → `--beta-radius-20` (line 80, token-table-v1.md line 134-139)
- `--ev-4` → `--beta-elevation-4` (line 81, token-table-v1.md line 137)
- `--bgtxt-cobalt-light` → `--beta-color-text-accent-cobalt` (line 106, token-table-v1.md line 13)

### 변환 완료 (추가)

- `--transition-m` → `--beta-motion-transition-default` (line 43, 84, token-table-v1.md line 144)

## NavItem (`NavItem/NavItem.module.scss`)

### 변환 완료

- `--radius-6` → `--beta-radius-6` (line 34, token-table-v1.md line 134-139)
- `--bgtxt-blue-normal` → `--beta-color-text-accent-blue` (line 38, token-table-v1.md line 12)
- `--bgtxt-blue-lightest` → `--beta-color-fill-accent-blue` (line 39, token-table-v1.md line 79)
- `--txt-black-darkest` → `--beta-color-text-neutral` (line 43, token-table-v1.md line 3)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 46, token-table-v1.md line 59)

## OutlineItem (`OutlineItem/OutlineItem.module.scss`)

### 변환 완료

- `--txt-black-darkest` → `--beta-color-text-neutral` (line 9, token-table-v1.md line 3)
- `--radius-6` → `--beta-radius-6` (line 13, token-table-v1.md line 134-139)
- `--bgtxt-blue-normal` → `--beta-color-text-accent-blue` (line 25, 29, token-table-v1.md line 12)
- `--bgtxt-blue-lightest` → `--beta-color-fill-accent-blue` (line 26, token-table-v1.md line 79)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 34, token-table-v1.md line 59)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 16, 17, token-table-v1.md line 143)

## Overlay (`Overlay/Overlay.module.scss`)

### 변환 완료

- `--transition-s` → `--beta-motion-transition-fast` (line 30, 31, token-table-v1.md line 143)
- `--z-index-base` → `--beta-layer-z-index-base` (line 16, token-table-v1.md line 146)
- `--z-index-overlay` → `--beta-layer-z-index-overlay` (line 3, token-table-v1.md line 148)

## ProgressBar (`ProgressBar/ProgressBar.module.scss`)

### 변환 완료

- `--radius-3` → `--beta-radius-3` (line 4, 10, token-table-v1.md line 134-139)
- `--bg-black-light` → `--beta-color-fill-neutral-light` (line 22, 48, token-table-v1.md line 59)
- `--bgtxt-absolute-white-normal` → `--beta-color-fill-absolute-white` (line 26, token-table-v1.md line 112)
- `--bg-black-dark` → `--beta-color-fill-neutral-heavy` (line 49, token-table-v1.md line 60)
- `--bgtxt-green-normal` → `--beta-color-gradient-green-heavy` (line 32, 39, token-table-v1.md 업데이트)
- `--green-300` → `--beta-color-gradient-green` (line 33, token-table-v1.md 업데이트)
- `--bgtxt-green-dark` → `--beta-color-gradient-green-heavy` (line 40, token-table-v1.md 업데이트)
- 다크 테마: `--beta-color-gradient-green-heavy` 0% → `--beta-color-gradient-green` 100% (그라데이션 순서 반대)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 5, 11, token-table-v1.md line 143)

## SegmentedControl (`SegmentedControl/SegmentedControl.module.scss`)

### 변환 완료

- `--radius-6` → `--beta-radius-6` (line 25, 58, token-table-v1.md line 134-139)
- `--radius-8` → `--beta-radius-8` (line 40, 55, 73, token-table-v1.md line 134-139)
- `--radius-12` → `--beta-radius-12` (line 70, token-table-v1.md line 134-139)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 19, token-table-v1.md line 59)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 82)
- `--bg-white-high` → `--beta-color-surface-high` (line 117, token-table-v1.md line 121)
- `--ev-1` → `--beta-elevation-1` (line 118, token-table-v1.md line 135)
- `--txt-black-darkest` → `--beta-color-text-neutral` (line 159, token-table-v1.md line 3)
- `--txt-black-dark` → `--beta-color-text-neutral-lighter` (line 163, token-table-v1.md line 5)
- `--input-box-shadow-focused` → `--beta-state-input-active` (line 172)
- `--bg-black-light` → `--beta-color-fill-neutral-light` (line 177, token-table-v1.md line 59)

### 변환 완료 (추가)

- `--z-index-base` → `--beta-layer-z-index-base` (line 9, token-table-v1.md line 146)
- `--z-index-floating` → `--beta-layer-z-index-floating` (line 142, 182, token-table-v1.md line 147)
- `--transition-s` → `--beta-motion-transition-fast` (line 120, 135, 192, token-table-v1.md line 143)
- `--transition-m` → `--beta-motion-transition-default` (line 154, token-table-v1.md line 144)

## Slider (`Slider/Slider.module.scss`)

### 변환 완료

- `--opacity-disabled` → `--beta-opacity-disabled` (line 21)
- `--bg-black-dark` → `--beta-color-fill-neutral-heavy` (line 32, token-table-v1.md line 60)
- `--radius-3` → `--beta-radius-3` (line 33, 41, token-table-v1.md line 134-139)
- `--bgtxt-green-normal` → `--beta-color-fill-success` (line 40, token-table-v1.md line 84)
- `--bg-black-light` → `--beta-color-fill-neutral-light` (line 64, token-table-v1.md line 59)
- `--bgtxt-absolute-white-dark` → `--beta-color-fill-absolute-white` (line 74, token-table-v1.md line 112)
- `--radius-12` → `--beta-radius-12` (line 75, token-table-v1.md line 134-139)
- `--ev-2` → `--beta-elevation-2` (line 76, token-table-v1.md line 135)
- `--ev-3` → `--beta-elevation-3` (line 81, token-table-v1.md line 136)
- `--input-box-shadow-focused` → `--beta-state-input-active` (line 86)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 17, 78, token-table-v1.md line 143)

## Status (`Status/Status.module.scss`)

### 변환 완료

- `--bg-white-high` → `--beta-color-surface-high` (line 15, 16, token-table-v1.md line 121)
- `--bg-white-high` → `--beta-color-surface-highest` (line 16, 마이그레이션 테이블 예외 케이스여서 수동 처리)

### 변환 완료 (추가)

- `--z-index-base` → `--beta-layer-z-index-base` (line 9, token-table-v1.md line 146)
- `--z-index-floating` → `--beta-layer-z-index-floating` (line 49, token-table-v1.md line 147)

## Tabs (`Tabs/Tabs.module.scss`)

### 변환 완료

- `--bg-black-light` → `--beta-color-fill-neutral-light` (line 15, token-table-v1.md line 59)
- `--radius-8` → `--beta-radius-8` (line 68, 79, 165, token-table-v1.md line 134-139)
- `--radius-12` → `--beta-radius-12` (line 86, 161, token-table-v1.md line 134-139)
- `--radius-6` → `--beta-radius-6` (line 170, token-table-v1.md line 134-139)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 100, token-table-v1.md line 59)
- `--opacity-disabled` → `--beta-opacity-disabled` (line 110)
- `--bgtxt-blue-normal` → `--beta-color-text-accent-blue` (line 58, 115, 151, token-table-v1.md line 12)
- `--txt-black-dark` → `--beta-color-text-neutral-lighter` (line 128, token-table-v1.md line 5)
- `--txt-black-darker` → `--beta-color-text-neutral-light` (line 131, token-table-v1.md line 4)
- `--bgtxt-cobalt-light` → `--beta-color-text-accent-cobalt` (line 174, token-table-v1.md line 13)
- `--bgtxt-blue-lightest` → `--beta-color-fill-accent-blue` (line 178, token-table-v1.md line 79)

### 변환 완료 (추가)

- `--transition-s` → `--beta-motion-transition-fast` (line 45, 46, 154, token-table-v1.md line 143)

## Toast (`Toast/Toast.module.scss`)

### 변환 완료

- `--bg-grey-lighter` → `--beta-color-fill-grey-heavy` (line 70, token-table-v1.md line 58 업데이트)
- `--radius-12` → `--beta-radius-12` (line 71, token-table-v1.md line 134-139)
- `--ev-3` → `--beta-elevation-3` (line 72, token-table-v1.md line 136)
- `--bgtxt-green-normal` → `--beta-color-text-accent-green` (line 101, token-table-v1.md line 14)
- `--bgtxt-orange-normal` → `--beta-color-text-accent-orange` (line 105, token-table-v1.md line 16)
- `--bgtxt-red-normal` → `--beta-color-text-accent-red` (line 109, token-table-v1.md line 15)
- `--txt-black-darkest` → `--beta-color-text-neutral` (line 113, 124, 148, token-table-v1.md line 3)
- `--txt-black-darker` → `--beta-color-text-neutral-light` (line 142, token-table-v1.md line 4)
- `--bg-black-lighter` → `--beta-color-fill-neutral-light` (line 144, token-table-v1.md line 59)
- `--bg-black-light` → `--beta-color-fill-neutral-light` (line 149, token-table-v1.md line 59)

### 변환 완료 (추가)

- `--transition-m` → `--beta-motion-transition-default` (line 75, 78, 83, 86, token-table-v1.md line 144)

## Tooltip (`Tooltip/Tooltip.module.scss`)

### 변환 완료

- `--bg-white-low` → `--beta-color-surface-high` (line 15, token-table-v1.md line 120)
- `--radius-8` → `--beta-radius-8` (line 16, token-table-v1.md line 134-139)
- `--ev-3` → `--beta-elevation-3` (line 17, token-table-v1.md line 136)

### 변환 완료 (추가)

- `--z-index-tooltip` → `--beta-layer-z-index-tooltip` (line 2, token-table-v1.md line 149)

## AlphaButton, AlphaFloatingButton, AlphaFloatingIconButton, AlphaIconButton

### 변환 완료

- `--transition-s` → `--beta-motion-transition-fast` (모든 컴포넌트, token-table-v1.md line 143)

## AlphaAvatarGroup, AvatarGroup

### 변환 완료

- `--z-index-base` → `--beta-layer-z-index-base` (token-table-v1.md line 146)
- `--z-index-floating` → `--beta-layer-z-index-floating` (token-table-v1.md line 147)

## Icon, Overlay

### 변환 완료

- `--transition-s` → `--beta-motion-transition-fast` (token-table-v1.md line 143)
- `--z-index-base` → `--beta-layer-z-index-base` (Overlay만, token-table-v1.md line 146)
- `--z-index-overlay` → `--beta-layer-z-index-overlay` (Overlay만, token-table-v1.md line 148)

---

## Props를 사용하는 컴포넌트 마이그레이션

Props를 통해 토큰을 받아서 사용하는 컴포넌트들의 v1 → v3 토큰 마이그레이션 내역입니다.

### 완료된 컴포넌트 (20개)

1. AlphaAvatar
2. AlphaAvatarGroup
3. AvatarGroup
4. Stack (stories)
5. Status (stories)
6. Status (컴포넌트)
7. Text (stories)
8. Text (컴포넌트 타입)
9. Tooltip
10. Toast
11. TextField
12. Tag
13. FormLabel
14. FormHelperText
15. KeyValueItem
16. LegacyTooltip
17. ListItem
18. Modal
19. RadioGroup
20. Select

### AlphaAvatar (`AlphaAvatar/Avatar.tsx`)

#### 변환 완료

- `backgroundColor="bg-white-normal"` → `backgroundColor="surface"` (line 153, token-table-v1.md line 119)
- `color="bg-white-high"` → `color="surface-higher"` (line 47, token-table-v1.md line 122)

### Stack (`Stack/Stack.stories.tsx`)

#### 변환 완료

- `backgroundColor="bg-black-light"` → `backgroundColor="fill-neutral-light"` (line 23, token-table-v1.md line 59)
- `borderColor="bdr-black-light"` → `borderColor="border-neutral"` (line 26, token-table-v1.md line 51)
- `borderColor="bdr-black-dark"` → `borderColor="border-neutral-heavy"` (line 36, token-table-v1.md line 52)

### Status (`Status/Status.stories.tsx`)

#### 변환 완료

- `backgroundColor="bg-grey-light"` → `backgroundColor="fill-neutral-light"` (line 18, token-table-v1.md line 59)

### Text (`Text/Text.stories.tsx`, `Text/Text.tsx`)

#### 변환 완료

- `color="txt-black-darkest"` → `color="text-neutral"` (stories line 24, 34, Text.tsx line 22 주석, token-table-v1.md line 3)

### Tooltip (`Tooltip/Tooltip.tsx`)

#### 변환 완료

- `color="txt-black-darkest"` → `color="text-neutral"` (line 246, 253, 274, token-table-v1.md line 3)
- `color="txt-black-dark"` → `color="text-neutral-lighter"` (line 264, token-table-v1.md line 5)

### Toast (`Toast/Toast.tsx`)

#### 변환 완료

- `color="txt-black-darkest"` → `color="text-neutral"` (line 153, token-table-v1.md line 3)

### TextField (`TextField/TextField.tsx`)

#### 변환 완료

- `iconColor` 기본값: `'txt-black-dark'` → `'text-neutral-lighter'` (line 83, 131, token-table-v1.md line 5)

### Tag (`Tag/Tag.tsx`)

#### 변환 완료

- `color="txt-black-darkest"` → `color="text-neutral"` (line 56, token-table-v1.md line 3)
- `color="txt-black-darker"` → `color="text-neutral-light"` (line 70, token-table-v1.md line 4)

### AlphaAvatarGroup (`AlphaAvatarGroup/AvatarGroup.tsx`)

#### 변환 완료

- `backgroundColor="fill-absolute-black-lightest"` → `backgroundColor="fill-absolute-black-light"` (line 140, 존재하지 않는 토큰 수정)
- `color="txt-black-dark"` → `color="text-neutral-lighter"` (line 170, token-table-v1.md line 5)

### AvatarGroup (`AvatarGroup/AvatarGroup.tsx`)

#### 변환 완료

- `backgroundColor="fill-absolute-black-lightest"` → `backgroundColor="fill-absolute-black-light"` (line 160, 존재하지 않는 토큰 수정)
- `color="txt-black-dark"` → `color="text-neutral-lighter"` (line 195, token-table-v1.md line 5)

### Status (`Status/Status.tsx`)

#### 변환 완료

- `statusColor` 객체의 모든 v1 토큰을 v3로 변환:
  - `online: 'bgtxt-green-normal'` → `'text-accent-green'` (token-table-v1.md line 14)
  - `offline: 'bg-black-dark'` → `'fill-neutral-heavy'` (token-table-v1.md line 61)
  - `'online-crescent': 'bgtxt-green-normal'` → `'text-accent-green'` (token-table-v1.md line 14)
  - `'offline-crescent': 'bgtxt-yellow-normal'` → `'text-accent-yellow'` (token-table-v1.md line 17)
  - `lock: 'txt-black-darker'` → `'text-neutral-light'` (token-table-v1.md line 4)
- `backgroundColor="bg-white-high"` → `backgroundColor="surface-high"` (line 40, token-table-v1.md line 121)

### FormLabel (`FormLabel/FormLabel.tsx`)

#### 변환 완료

- `color` 기본값: `'txt-black-darkest'` → `'text-neutral'` (line 39, token-table-v1.md line 3)

### FormHelperText (`FormHelperText/FormHelperText.tsx`)

#### 변환 완료

- `color` 기본값: `'txt-black-dark'` → `'text-neutral-lighter'` (line 97, token-table-v1.md line 5)
- `FormErrorMessage`의 `color` 기본값: `'bgtxt-orange-normal'` → `'text-accent-orange'` (line 133, token-table-v1.md line 16)

### KeyValueItem (`KeyValueItem/KeyValueItem.tsx`)

#### 변환 완료

- `color="txt-black-dark"` → `color="text-neutral-lighter"` (line 50, token-table-v1.md line 5)

### LegacyTooltip (`LegacyTooltip/LegacyTooltipContent.tsx`)

#### 변환 완료

- `color="txt-black-darkest"` → `color="text-neutral"` (line 154, token-table-v1.md line 3)

### ListItem (`ListItem/ListItem.tsx`)

#### 변환 완료

- `color="txt-black-darker"` → `color="text-neutral-light"` (line 113, token-table-v1.md line 4)

### Modal (`Modal/Modal.tsx`)

#### 변환 완료

- `color="txt-black-darkest"` → `color="text-neutral"` (line 256, 347, token-table-v1.md line 3)
- `color="txt-black-dark"` → `color="text-neutral-lighter"` (line 276, token-table-v1.md line 5)

### RadioGroup (`RadioGroup/RadioGroup.tsx`)

#### 변환 완료

- `color="txt-black-darkest"` → `color="text-neutral"` (line 95, token-table-v1.md line 3)

### Select (`Select/Select.tsx`)

#### 변환 완료

- `iconColor` 기본값: `'txt-black-dark'` → `'text-neutral-lighter'` (line 46, token-table-v1.md line 5)
- `textColor` 기본값: `'txt-black-darkest'` → `'text-neutral'` (line 48, token-table-v1.md line 3)
- `color="txt-black-dark"` → `color="text-neutral-lighter"` (line 125, token-table-v1.md line 5)

### 변환 매핑 요약

**backgroundColor:**

- `bg-white-normal` → `surface` (token-table-v1.md line 119)
- `bg-white-high` → `surface-higher` (token-table-v1.md line 122)
- `bg-black-light` → `fill-neutral-light` (token-table-v1.md line 60)
- `bg-grey-light` → `fill-neutral-light` (token-table-v1.md line 60)
- `bg-black-dark` → `fill-neutral-heavy` (token-table-v1.md line 61)
- `fill-absolute-black-lightest` → `fill-absolute-black-light` (존재하지 않는 토큰 수정)

**borderColor:**

- `bdr-black-light` → `border-neutral` (token-table-v1.md line 51)
- `bdr-black-dark` → `border-neutral-heavy` (token-table-v1.md line 52)

**color (Text, Icon, etc.):**

- `txt-black-darkest` → `text-neutral` (token-table-v1.md line 3)
- `txt-black-darker` → `text-neutral-light` (token-table-v1.md line 4)
- `txt-black-dark` → `text-neutral-lighter` (token-table-v1.md line 5)
- `bgtxt-green-normal` → `text-accent-green` (token-table-v1.md line 14)
- `bgtxt-yellow-normal` → `text-accent-yellow` (token-table-v1.md line 17)
- `bgtxt-orange-normal` → `text-accent-orange` (token-table-v1.md line 16)

### 참고사항

- Props를 사용하는 컴포넌트들은 `tokenCssVar` 함수를 통해 토큰을 CSS 변수로 변환합니다.
- v3 토큰: `--beta-color-*` 형태로 변환
  - 예: `fill-neutral-light` → `var(--beta-color-fill-neutral-light)`
  - 예: `text-neutral` → `var(--beta-color-text-neutral)`
  - 예: `border-neutral` → `var(--beta-color-border-neutral)`
- v1 토큰: `--*` 형태로 그대로 변환 (하위 호환성 유지)
  - 예: `bg-white-high` → `var(--bg-white-high)`
- `Text.types.ts`의 `SemanticColor` 타입을 `beta-tokens.ts`에서 import하도록 변경하여 v3 토큰만 허용하도록 업데이트됨
- `tokenCssVar` 함수가 v1과 v3 토큰을 모두 처리할 수 있도록 수정됨
