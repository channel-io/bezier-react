# bezier-react 토큰 사용 현황 (v1 / v2, v3 제외)

현재 css variables로 사용하는 토큰은 세 버전이 있습니다. (bezier-tokens 참고)

--alpha 프리픽스로 시작하는 변수는 v2 토큰입니다.
--beta 프리픽스로 시작하는 변수는 v3 토큰으로, 이번에 추가했습니다.
아무런 프리픽스 없이 시작하는 변수는 v1 토큰인데, 간혹 --b-toggle-emoji-button-size 처럼 bezier-tokens가 제공하는 css variables가 아닌 경우가 있으므로 그 경우를 구분해야 합니다.

- 범위: `packages/bezier-react/src/components` 내 SCSS 전수 조사 (`var(--*)`).
- 구분: v2=`--alpha-*`, v1=프리픽스 없음, 커스텀=`--b-*`. v3(`--beta-*`)는 요청에 따라 보고서에서 제외.
- 스토리·테스트 파일 제외, 컴포넌트 스타일만 대상.

## 컴포넌트별 사용 현황 (v1/v2 중심, 알파벳순)

### AlphaLoader (`AlphaLoader/Loader.module.scss`)

- v2: `--alpha-color-bg-absolute-white-lightest`, `--alpha-color-bg-black-light`, `--alpha-color-fg-absolute-white-light`, `--alpha-color-fg-black-light`, `--alpha-color-fg-blue-normal`, `--alpha-color-primary-bg-lightest`
- v1: 없음
- 커스텀: `--b-loader-size`, `--b-loader-track-color`, `--b-loader-indicator-color`, `--b-loader-stroke-thickness`, `--b-loader-stroke-width`, `--b-loader-view-box-size`, `--b-loader-stroke-dasharray`

### AlphaToggleButton (`AlphaToggleButton/ToggleButton.module.scss`)

- v2: `--alpha-color-bg-grey-lighter`, `--alpha-color-bg-grey-lightest`, `--alpha-shadow-input-active`, `--alpha-shadow-input-default`
- v1: `--transition-s`, `--font-weight-700`
- 커스텀: 없음

### AlphaToggleButtonGroup (`AlphaToggleButtonGroup/ToggleButtonGroup.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: 없음

### AlphaToggleEmojiButtonGroup (`AlphaToggleEmojiButtonGroup/ToggleEmojiButtonGroup.module.scss`)

- v2: `--alpha-color-bg-grey-lighter`, `--alpha-color-bg-grey-lightest`
- v1: 없음
- 커스텀: `--b-toggle-emoji-button-group-gap`, `--b-toggle-emoji-button-size`

### AlphaAvatar (`AlphaAvatar/Avatar.module.scss`)

- v2: `--alpha-opacity-disabled`
- v1: 없음
- 커스텀: `--b-avatar-status-gap`, `--b-avatar-computed-status-gap`, `--b-smooth-corners-box-shadow-spread-radius`

### AlphaAvatarGroup (`AlphaAvatarGroup/AvatarGroup.module.scss`)

- v2: 없음
- v1: `--z-index-base`, `--z-index-floating`
- 커스텀: `--b-avatar-group-ellipsis-ml`, `--b-avatar-group-ellipsis-pr`, `--b-avatar-group-size`, `--b-avatar-group-spacing`

### AlphaStatusBadge (`AlphaStatusBadge/StatusBadge.module.scss`)

- v2: `--alpha-color-bg-white-highest`
- v1: `--z-index-base`, `--z-index-floating`
- 커스텀: `--b-status-size`, `--b-status-border-width`, `--b-status-bg-color`

### AlphaButton (`AlphaButton/Button.module.scss`)

- v2: 없음
- v1: `--transition-s`
- 커스텀: 없음

### AlphaFloatingButton (`AlphaFloatingButton/FloatingButton.module.scss`)

- v2: 없음
- v1: `--transition-s`
- 커스텀: 없음

### AlphaFloatingIconButton (`AlphaFloatingIconButton/FloatingIconButton.module.scss`)

- v2: 없음
- v1: `--transition-s`
- 커스텀: 없음

### AlphaIconButton (`AlphaIconButton/IconButton.module.scss`)

- v2: 없음
- v1: `--transition-s`
- 커스텀: 없음

### Avatar (`Avatar/Avatar.module.scss`)

- v2: 없음
- v1: `--opacity-disabled`
- 커스텀: `--b-avatar-status-gap`, `--b-avatar-computed-status-gap`, `--b-smooth-corners-box-shadow-spread-radius`

### AvatarGroup (`AvatarGroup/AvatarGroup.module.scss`)

- v2: 없음
- v1: `--z-index-base`, `--z-index-floating`
- 커스텀: `--b-avatar-group-ellipsis-ml`, `--b-avatar-group-ellipsis-pr`, `--b-avatar-group-size`, `--b-avatar-group-spacing`

### Box (`Box/Box.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: 없음

### BaseButton (`BaseButton/BaseButton.module.scss`)

- v2: 없음
- v1: `--bgtxt-cobalt-light`
- 커스텀: 없음

### BaseTagBadge (`BaseTagBadge/BaseTagBadge.module.scss`)

- v2: 없음
- v1: `--bg-black-darker`, `--bg-black-lighter`, `--bgtxt-absolute-white-dark`, `--bgtxt-blue-lighter`, `--bgtxt-blue-normal`, `--bgtxt-cobalt-lighter`, `--bgtxt-cobalt-normal`, `--bgtxt-green-lighter`, `--bgtxt-green-normal`, `--bgtxt-navy-lighter`, `--bgtxt-navy-normal`, `--bgtxt-olive-lighter`, `--bgtxt-olive-normal`, `--bgtxt-orange-lighter`, `--bgtxt-orange-normal`, `--bgtxt-pink-lighter`, `--bgtxt-pink-normal`, `--bgtxt-purple-lighter`, `--bgtxt-purple-normal`, `--bgtxt-red-lighter`, `--bgtxt-red-normal`, `--bgtxt-teal-lighter`, `--bgtxt-teal-normal`, `--bgtxt-yellow-lighter`, `--bgtxt-yellow-normal`, `--radius-4`, `--radius-6`, `--txt-black-dark`, `--txt-black-darkest`
- 커스텀: `--b-tag-badge-background-color`, `--b-tag-badge-color`

### Banner (`Banner/Banner.module.scss`)

- v2: 없음
- v1: `--bg-black-lighter`, `--bg-grey-lighter`, `--bgtxt-blue-lightest`, `--bgtxt-blue-normal`, `--bgtxt-cobalt-lightest`, `--bgtxt-cobalt-normal`, `--bgtxt-green-lightest`, `--bgtxt-green-normal`, `--bgtxt-orange-lightest`, `--bgtxt-orange-normal`, `--bgtxt-red-lightest`, `--bgtxt-red-normal`, `--ev-2`, `--radius-12`, `--txt-black-darker`
- 커스텀: 없음

### Button (구 Alpha) (`Button/Button.module.scss`)

- v2: 없음
- v1: `--bg-white-high`, `--bg-white-low`, `--bgtxt-absolute-black-lighter`, `--bgtxt-absolute-black-lightest`, `--bgtxt-absolute-white-dark`, `--ev-2`, `--ev-3`, `--opacity-disabled`, `--radius-12`, `--radius-16`, `--radius-6`, `--radius-8`, `--transition-s`, `--txt-black-dark`, `--txt-white-normal`, `--bgtxt-`(크로마틱 시리즈 전체)
- 커스텀: 없음

### Center (`Center/Center.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: 없음

### Checkbox (`Checkbox/Checkbox.module.scss`)

- v2: 없음
- v1: `--bdr-black-dark`, `--bg-black-dark`, `--bg-white-normal`, `--bgtxt-green-dark`, `--bgtxt-green-normal`, `--input-box-shadow-focused`, `--input-box-shadow-invalid`, `--opacity-disabled`, `--txt-black-darkest`
- 커스텀: `--b-form-field-size`

### CheckableAvatar (`CheckableAvatar/CheckableAvatar.module.scss`)

- v2: 없음
- v1: `--bg-grey-dark`, `--bgtxt-green-dark`, `--z-index-base`, `--z-index-floating`
- 커스텀: 없음

### Divider (`Divider/Divider.module.scss`)

- v2: 없음
- v1: `--bdr-black-light`
- 커스텀: `--b-divider-indent-size`, `--b-divider-thickness`

### Emoji (`Emoji/Emoji.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: `--b-emoji-background-image`, `--b-emoji-size`

### FormControl (`FormControl/FormControl.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: `--b-form-field-size`

### FormHelperText (`FormHelperText/FormHelperText.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: 없음

### FormLabel (`FormLabel/FormLabel.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: 없음

### Help (`Help/Help.module.scss`)

- v2: 없음
- v1: `--txt-black-darkest`
- 커스텀: 없음

### Icon (`Icon/Icon.module.scss`)

- v2: 없음
- v1: `--transition-s`
- 커스텀: `--b-icon-color`

### KeyValueItem (`KeyValueItem/KeyValueItem.module.scss`)

- v2: 없음
- v1: `--bg-black-lighter`, `--radius-6`, `--transition-s`, `--txt-black-darkest`
- 커스텀: 없음

### LegacyStack (`LegacyStack/LegacyStack.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: `--b-grow-weight`, `--b-main-axis-size`, `--b-margin-after`, `--b-margin-before`, `--b-shrink-weight`

### LegacyTooltip (`LegacyTooltip/LegacyTooltip.module.scss`)

- v2: 없음
- v1: `--bg-white-low`, `--ev-2`, `--radius-8`, `--txt-black-darkest`, `--z-index-tooltip`
- 커스텀: 없음

### ListItem (`ListItem/ListItem.module.scss`)

- v2: 없음
- v1: `--bg-black-lighter`, `--bgtxt-blue-lighter`, `--bgtxt-blue-lightest`, `--bgtxt-blue-normal`, `--bgtxt-cobalt-normal`, `--bgtxt-green-normal`, `--bgtxt-red-normal`, `--opacity-disabled`, `--radius-12`, `--radius-6`, `--radius-8`, `--transition-m`, `--transition-s`, `--txt-black-dark`, `--txt-black-darkest`
- 커스텀: 없음

### Modal (`Modal/Modal.module.scss`)

- v2: 없음
- v1: `--bg-grey-darkest`, `--bg-white-high`, `--bgtxt-absolute-black-lighter`, `--bgtxt-cobalt-light`, `--ev-4`, `--radius-20`, `--transition-m`
- 커스텀: `--b-modal-collision-padding`, `--b-modal-height`, `--b-modal-width`

### NavItem (`NavItem/NavItem.module.scss`)

- v2: 없음
- v1: `--bg-black-lighter`, `--bgtxt-blue-lightest`, `--bgtxt-blue-normal`, `--radius-6`, `--txt-black-darkest`
- 커스텀: 없음

### NavGroup (`NavGroup/NavGroup.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: 없음

### OutlineItem (`OutlineItem/OutlineItem.module.scss`)

- v2: 없음
- v1: `--bg-black-lighter`, `--bgtxt-blue-lightest`, `--bgtxt-blue-normal`, `--radius-6`, `--transition-s`, `--txt-black-darkest`
- 커스텀: `--b-outline-item-indent`

### Overlay (`Overlay/Overlay.module.scss`)

- v2: 없음
- v1: `--transition-s`, `--z-index-base`, `--z-index-overlay`
- 커스텀: 없음

### ProgressBar (`ProgressBar/ProgressBar.module.scss`)

- v2: 없음
- v1: `--bg-black-dark`, `--bg-black-light`, `--bgtxt-absolute-white-normal`, `--bgtxt-green-dark`, `--bgtxt-green-normal`, `--green-300`, `--radius-3`, `--transition-s`
- 커스텀: `--b-progress-bar-value`, `--b-progress-bar-width`

### RadioGroup (`RadioGroup/RadioGroup.module.scss`)

- v2: 없음
- v1: `--bdr-black-dark`, `--bg-black-dark`, `--bg-white-normal`, `--bgtxt-absolute-white-dark`, `--bgtxt-green-dark`, `--bgtxt-green-normal`, `--input-box-shadow-focused`, `--opacity-disabled`
- 커스텀: `--b-form-field-size`

### SegmentedControl (`SegmentedControl/SegmentedControl.module.scss`)

- v2: 없음
- v1: `--bg-black-light`, `--bg-black-lighter`, `--bg-white-high`, `--ev-1`, `--input-box-shadow-focused`, `--opacity-disabled`, `--radius-12`, `--radius-6`, `--radius-8`, `--transition-m`, `--transition-s`, `--txt-black-dark`, `--txt-black-darkest`, `--z-index-base`, `--z-index-floating`
- 커스텀: `--b-divider-thickness`, `--b-segmented-control-height`, `--b-segmented-control-item-count`, `--b-segmented-control-item-index`, `--b-segmented-control-padding`, `--b-segmented-control-width`

### SectionLabel (`SectionLabel/SectionLabel.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: 없음

### Select (`Select/Select.module.scss`)

- v2: 없음
- v1: `--bg-grey-lighter`, `--bg-grey-lightest`, `--bg-white-high`, `--ev-3`, `--input-box-shadow`, `--input-box-shadow-focused`, `--input-box-shadow-invalid`, `--opacity-disabled`, `--radius-8`, `--transition-s`, `--txt-black-darker`, `--txt-black-darkest`
- 커스텀: `--b-form-field-size`

### Slider (`Slider/Slider.module.scss`)

- v2: 없음
- v1: `--bg-black-dark`, `--bg-black-light`, `--bgtxt-absolute-white-dark`, `--bgtxt-green-normal`, `--ev-2`, `--ev-3`, `--input-box-shadow-focused`, `--opacity-disabled`, `--radius-12`, `--radius-3`, `--transition-s`
- 커스텀: `--b-slider-guide-height`, `--b-slider-guide-left`, `--b-slider-thumb-size`, `--b-slider-width`

### SmoothCornersBox (`SmoothCornersBox/SmoothCornersBox.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: `--b-smooth-corners-box-background-color`, `--b-smooth-corners-box-background-image`, `--b-smooth-corners-box-border-radius`, `--b-smooth-corners-box-margin`, `--b-smooth-corners-box-padding`, `--b-smooth-corners-box-shadow-blur-radius`, `--b-smooth-corners-box-shadow-color`, `--b-smooth-corners-box-shadow-offset-x`, `--b-smooth-corners-box-shadow-offset-y`, `--b-smooth-corners-box-shadow-spread-radius`

### Spinner (`Spinner/Spinner.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: `--b-spinner-color`

### Stack (`Stack/Stack.module.scss`)

- v2: 없음
- v1: 없음
- 커스텀: `--b-stack-spacing`

### Status (`Status/Status.module.scss`)

- v2: 없음
- v1: `--bg-white-high`, `--z-index-base`, `--z-index-floating`
- 커스텀: `--b-status-bg-color`, `--b-status-border-width`, `--b-status-size`

### Switch (`Switch/Switch.module.scss`)

- v2: 없음
- v1: `--bg-black-dark`, `--bgtxt-absolute-white-dark`, `--bgtxt-green-dark`, `--bgtxt-green-normal`, `--ev-2`, `--input-box-shadow-focused`, `--opacity-disabled`, `--radius-12`, `--transition-s`
- 커스텀: `--b-switch-height`, `--b-switch-thumb-padding`, `--b-switch-thumb-size`, `--b-switch-width`

### Tabs (`Tabs/Tabs.module.scss`)

- v2: 없음
- v1: `--bg-black-light`, `--bg-black-lighter`, `--bgtxt-blue-lightest`, `--bgtxt-blue-normal`, `--bgtxt-cobalt-light`, `--opacity-disabled`, `--radius-12`, `--radius-6`, `--radius-8`, `--transition-s`, `--txt-black-dark`, `--txt-black-darker`
- 커스텀: 없음

### Tag (`Tag/Tag.module.scss`)

- v2: 없음
- v1: `--bgtxt-cobalt-light`
- 커스텀: 없음

### Text (`Text/Text.module.scss`)

- v2: 없음
- v1: `--font-weight-400`, `--font-weight-700`
- 커스텀: `--b-text-color`, `--b-text-font-size`, `--b-text-letter-spacing`, `--b-text-line-clamp`, `--b-text-line-height`

### TextArea (`TextArea/TextArea.module.scss`)

- v2: 없음
- v1: `--bg-grey-lighter`, `--bg-grey-lightest`, `--bg-white-normal`, `--input-box-shadow`, `--input-box-shadow-focused`, `--input-box-shadow-invalid`, `--opacity-disabled`, `--radius-8`, `--transition-s`, `--txt-black-darker`, `--txt-black-darkest`
- 커스텀: 없음

### TextField (`TextField/TextField.module.scss`)

- v2: 없음
- v1: `--bg-black-lighter`, `--bg-grey-lighter`, `--bg-grey-lightest`, `--bg-white-normal`, `--input-box-shadow`, `--input-box-shadow-focused`, `--input-box-shadow-invalid`, `--opacity-disabled`, `--radius-12`, `--radius-8`, `--transition-s`, `--txt-black-dark`, `--txt-black-darker`, `--txt-black-darkest`
- 커스텀: `--b-form-field-size`

### Toast (`Toast/Toast.module.scss`)

- v2: 없음
- v1: `--bg-black-light`, `--bg-black-lighter`, `--bg-grey-lighter`, `--bgtxt-green-normal`, `--bgtxt-orange-normal`, `--bgtxt-red-normal`, `--ev-3`, `--radius-12`, `--transition-m`, `--txt-black-darker`, `--txt-black-darkest`
- 커스텀: 없음

### Tooltip (`Tooltip/Tooltip.module.scss`)

- v2: 없음
- v1: `--bg-white-low`, `--ev-3`, `--radius-8`, `--z-index-tooltip`
- 커스텀: 없음

## 메모

- v2(알파) 토큰 사용 컴포넌트는 AlphaLoader, AlphaToggleButton, AlphaToggleEmojiButtonGroup, AlphaAvatar, AlphaStatusBadge에 한정됨.
- 구형/공용 v1 토큰(무프리픽스)은 다수 레거시 컴포넌트에서 여전히 사용되며, `--b-*` 계열은 디자인 토큰이 아닌 컴포넌트 내부 커스텀 변수임.

---

## Props로 토큰을 사용하는 컴포넌트 현황

CSS variables 형태가 아닌 **props를 통해 토큰을 받아서 사용**하는 컴포넌트들이 있습니다. 이들은 `props-helpers.ts`의 `getLayoutStyles`, `tokenCssVar` 등을 통해 토큰 값을 CSS 변수로 변환하거나 className으로 변환합니다.

### 현재 상태 (v3 토큰 마이그레이션 완료 ✅)

**✅ 완료된 작업:**

- `beta-tokens.ts` 파일 생성 완료 (v3 토큰 타입 정의)
- `props.ts`가 `beta-tokens.ts`에서 타입을 import하도록 변경됨
- v3 토큰 타입은 프리픽스가 제거된 형태로 정의됨 (예: `fill-neutral-light`, `text-neutral`)
- `props-helpers.ts`: `Elevation`, `Radius`, `ZIndex`를 `beta-tokens.ts`에서 import하도록 변경됨
- `tokenCssVar` 함수: `FlattenAllToken`을 `beta-tokens.ts`에서 import하고, beta 토큰을 `--beta-color-*` 형태로 변환하도록 수정됨
- SCSS 모듈들: v3 토큰으로 업데이트됨 (`elevation.module.scss`, `radius.module.scss`, `z-index.module.scss`)

### LayoutProps를 사용하는 컴포넌트

다음 컴포넌트들은 `LayoutProps`를 통해 토큰 props를 받습니다:

#### Box (`Box/Box.tsx`)

- `backgroundColor`: `BackgroundSemanticColor | TextSemanticColor` (v3 토큰: `fill-*`, `surface-*`, `text-*`)
- `borderColor`: `BorderSemanticColor` (v3 토큰: `border-*`)
- `borderRadius`: `Radius` (v3 토큰: `beta-radius-*`에서 프리픽스 제거)
- `elevation`: `Elevation` (v3 토큰: `beta-elevation-*`에서 프리픽스 제거)
- `zIndex`: `ZIndex` (v3 토큰: `beta-z-index-*`에서 프리픽스 제거)

#### Center (`Center/Center.tsx`)

- `backgroundColor`: `BackgroundSemanticColor | TextSemanticColor`
- `borderColor`: `BorderSemanticColor`
- `borderRadius`: `Radius`
- `elevation`: `Elevation`
- `zIndex`: `ZIndex`

#### Stack (`Stack/Stack.tsx`)

- `backgroundColor`: `BackgroundSemanticColor | TextSemanticColor`
- `borderColor`: `BorderSemanticColor`
- `borderRadius`: `Radius`
- `elevation`: `Elevation`
- `zIndex`: `ZIndex`

**변환 방식:**

- `backgroundColor`, `borderColor`: `tokenCssVar()`를 통해 `--b-background-color`, `--b-border-color` CSS 변수로 변환
  - v3 토큰 사용 시: `fill-neutral-light` → `var(--beta-color-fill-neutral-light)`
- `borderRadius`, `elevation`, `zIndex`: className으로 변환 (예: `radius-8`, `elevation-2`, `z-index-base`)
  - v3 토큰 사용 시: `8` → `radius-8` className (SCSS 모듈에서 `--beta-radius-8` CSS 변수 사용)

### ColorProps를 사용하는 컴포넌트

다음 컴포넌트들은 `ColorProps`를 통해 `color` prop을 받습니다:

#### Text (`Text/Text.tsx`)

- `color`: `SemanticColor` (v3 토큰: `text-*`, `icon-*`, `fill-*`, `border-*` 등 모든 semantic color)
- 변환: `tokenCssVar()`를 통해 `--b-text-color` CSS 변수로 변환
  - v3 토큰 사용 시: `text-neutral` → `var(--beta-color-text-neutral)`

#### Icon (`Icon/Icon.tsx`)

- `color`: `SemanticColor`
- 변환: `tokenCssVar()`를 통해 `--b-icon-color` CSS 변수로 변환
  - v3 토큰 사용 시: `icon-neutral` → `var(--beta-color-icon-neutral)`

#### Spinner (`Spinner/Spinner.tsx`)

- `color`: `SemanticColor`
- 변환: `tokenCssVar()`를 통해 `--b-spinner-color` CSS 변수로 변환

#### AlphaLoader (`AlphaLoader/Loader.tsx`)

- `color`: `SemanticColor`
- 변환: `tokenCssVar()`를 통해 `--b-loader-color` CSS 변수로 변환

### AdditionalColorProps를 사용하는 컴포넌트

다음 컴포넌트들은 `AdditionalColorProps`를 통해 특정 요소의 색상을 지정합니다:

#### TextField (`TextField/TextField.tsx`)

- `iconColor`: `SemanticColor` (leftContent/rightContent의 icon에 적용)

#### Select (`Select/Select.tsx`)

- `iconColor`: `SemanticColor` (leftContent/rightContent의 icon에 적용)
- `textColor`: `SemanticColor` (텍스트에 적용, 기본값: `txt-black-darkest` → v3: `text-neutral`)

#### Banner (`Banner/Banner.tsx`)

- `iconColor`: `SemanticColor` (아이콘에 적용)

### 커스텀 color props를 가진 컴포넌트

#### SmoothCornersBox (`SmoothCornersBox/SmoothCornersBox.tsx`)

- `backgroundColor`: `SemanticColor`
- 변환: `cssVar()`를 통해 `--b-smooth-corners-box-background-color` CSS 변수로 변환

#### AlphaButton, AlphaFloatingButton, AlphaFloatingIconButton, AlphaIconButton

- 각 컴포넌트별로 고유한 `color` prop 타입을 가짐 (컴포넌트별 variant에 따라 제한된 색상 세트)
- 이들은 SCSS에서 직접 토큰을 사용하므로 props 기반이 아닌 하드코딩된 스타일 사용

### 사용된 토큰 타입 요약 (v3 기준)

**v3 토큰 타입 (beta-tokens.ts):**

- **BackgroundSemanticColor**: `fill-*` 또는 `surface-*`로 시작하는 시맨틱 색상 (예: `fill-neutral-light`, `surface-high`)
- **TextSemanticColor**: `text-*`로 시작하는 시맨틱 색상 (예: `text-neutral`, `text-action`)
- **BorderSemanticColor**: `border-*`로 시작하는 시맨틱 색상 (예: `border-neutral`)
- **SemanticColor**: 모든 시맨틱 색상 (프리픽스 제거된 형태: `text-*`, `icon-*`, `fill-*`, `border-*`, `surface-*`, `dim-*`, `state-*`, `elevation-*`)
- **Radius**: `beta-radius-*`에서 프리픽스 제거 (예: `2`, `3`, `4`, `6`, `8`, `12`, `16`, `20`, `32`)
- **Elevation**: `beta-elevation-*`에서 프리픽스 제거 (예: `1`, `2`, `3`, `4`, `5`, `6`)
- **ZIndex**: `beta-z-index-*`에서 프리픽스 제거 (예: `base`, `floating`, `overlay`, `modal`, `toast`, `tooltip`)

**참고: v1 토큰 타입 (레거시, 하위 호환성 유지)**

- **BackgroundSemanticColor**: `bg-*`로 시작하는 시맨틱 색상 (예: `bg-black-light`, `bg-white-high`)
- **BackgroundTextSemanticColor**: `bgtxt-*`로 시작하는 시맨틱 색상 (예: `bgtxt-blue-normal`, `bgtxt-green-dark`)
- **BorderSemanticColor**: `bdr-*`로 시작하는 시맨틱 색상 (예: `bdr-black-light`, `bdr-black-dark`)
- **Radius**: `radius-*` 토큰 (예: `radius-6`, `radius-8`, `radius-12`)
- **Elevation**: `ev-*` 토큰 (예: `ev-1`, `ev-2`, `ev-3`, `ev-4`)
- **ZIndex**: `z-index-*` 토큰 (예: `z-index-base`, `z-index-floating`, `z-index-overlay`)

---

## Props 기반 토큰 사용의 마이그레이션 계획

### 현재 상황 분석

1. **Props 기반 사용의 장점:**

   - 타입 안정성: TypeScript로 토큰 값 검증
   - 개발자 경험: 자동완성 및 타입 체크
   - 런타임 변환: props를 받아 CSS 변수로 변환

2. **Props 기반 사용의 단점:**
   - CSS variables 직접 사용과의 이중 구조
   - 일부 컴포넌트만 props 지원, 일관성 부족
   - v2/v3 토큰으로 마이그레이션 시 props 타입도 함께 업데이트 필요

### 마이그레이션 전략

#### 1단계: 현황 파악 및 문서화 (완료)

- ✅ Props로 토큰을 사용하는 컴포넌트 목록 정리
- ✅ 각 컴포넌트별 사용 토큰 타입 정리

#### 2단계: beta-tokens.ts 파일 생성 (✅ 완료)

- ✅ `beta-tokens.ts` 파일 생성 완료
- ✅ `@channel.io/bezier-tokens/beta`에서 토큰 타입 import
- ✅ v3 토큰 타입 정의 (프리픽스 제거된 형태):
  - `BackgroundSemanticColor`: `fill-*` 또는 `surface-*` 형태
  - `TextSemanticColor`: `text-*` 형태
  - `BorderSemanticColor`: `border-*` 형태
  - `IconSemanticColor`: `icon-*` 형태
  - `SemanticColor`: 모든 semantic color (프리픽스 제거)
  - `Radius`, `Elevation`, `ZIndex` 등 기타 토큰 타입
- ✅ `props.ts`의 `LayoutProps`, `ColorProps` 등이 `beta-tokens.ts`에서 타입을 import하도록 변경됨
  - `backgroundColor?: BackgroundSemanticColor | TextSemanticColor` (v3 토큰)
  - `borderColor?: BorderSemanticColor` (v3 토큰)
  - `color?: SemanticColor` (v3 토큰)

#### 3단계: props-helpers.ts 및 tokenCssVar 마이그레이션 (⚠️ 진행 필요)

**완료된 변경사항:**

1. **`props-helpers.ts` 업데이트 완료:**

   - ✅ `Elevation`, `Radius`, `ZIndex`를 `beta-tokens.ts`에서 import하도록 변경됨
   - ✅ `getElevationClassName`, `getRadiusClassName`, `getZIndexClassName` 함수들이 v3 토큰을 올바르게 처리함

2. **`tokenCssVar` 함수 업데이트 완료:**

   - ✅ `style.ts`의 `tokenCssVar` 함수가 `FlattenAllToken`을 `beta-tokens.ts`에서 import하도록 변경됨
   - ✅ `SemanticColor` 타입도 지원하도록 타입 확장됨
   - ✅ beta 토큰 (프리픽스 제거된 형태)을 `--beta-color-*` 형태의 CSS 변수로 변환하도록 로직 추가됨
   - 예: `fill-neutral-light` → `var(--beta-color-fill-neutral-light)`

3. **SCSS 모듈 업데이트 완료:**
   - ✅ `elevation.module.scss`: v3 토큰 사용 (`@use '@channel.io/bezier-tokens/dist/beta/scss'`)
   - ✅ `radius.module.scss`: v3 토큰 사용
   - ✅ `z-index.module.scss`: v3 토큰 사용 (layer.z-index 경로 사용)
   - ✅ CSS 변수명이 `--beta-*` 형태로 올바르게 생성됨

#### 4단계: 사용처 코드 마이그레이션

**변환 방식:**

- **내부 자동 변환이 아닌, 사용자가 직접 코드를 수정해야 함**
- v1 토큰을 v3 토큰으로 수동 변경 (프리픽스 제거된 형태)
- 예: `<Box backgroundColor="bg-grey-light" />` → `<Box backgroundColor="fill-neutral-light" />`

**마이그레이션 범위:**

1. **bezier-react 라이브러리 내부 코드**

   - 컴포넌트 내부에서 하드코딩된 v1 토큰 사용처
   - 예: `AlphaAvatar/Avatar.tsx`, `Avatar/Avatar.tsx`, `Status/Status.stories.tsx` 등
   - 스토리 파일 (`.stories.tsx`)에서 사용하는 v1 토큰들

2. **bezier-react 라이브러리를 사용하는 외부 코드**
   - 라이브러리 사용자가 props로 전달하는 v1 토큰
   - 예: `<Box backgroundColor="bg-grey-light" />` 형태의 사용 코드

**변환 가이드:**

1. `token-table-v1.md`에서 v1 토큰에 해당하는 v3 토큰 찾기
2. props에 전달하는 토큰 문자열을 v3 토큰으로 변경
3. 타입 시스템이 beta 토큰을 인식하도록 `beta-tokens.ts` 타입 사용

**변환 예시:**

```tsx
// Before (v1 토큰)
<Box backgroundColor="bg-grey-light" />
<Box backgroundColor="bg-black-lighter" />
<Text color="txt-black-darkest" />
<Box borderColor="bdr-black-light" />

// After (v3 토큰, 프리픽스 제거된 형태)
<Box backgroundColor="fill-neutral-light" />
<Box backgroundColor="fill-neutral-light" />
<Text color="text-neutral" />
<Box borderColor="border-neutral" />
```

**참고:** v3 토큰은 프리픽스가 제거된 형태로 정의되어 있습니다. `tokenCssVar` 함수가 이를 `--beta-color-*` 형태의 CSS 변수로 변환합니다.

**bezier-react 내부에서 마이그레이션이 필요한 경우:**

- 컴포넌트 내부 코드에서 하드코딩된 v1 토큰
  - 예: `AlphaAvatar/Avatar.tsx`의 `backgroundColor="bg-white-normal"`
  - 예: `Status/Status.stories.tsx`의 `backgroundColor="bg-grey-light"`
  - 예: `Stack/Stack.stories.tsx`의 `backgroundColor="bg-black-light"`
- 스토리 파일에서 사용하는 v1 토큰들

**외부 사용처에서 마이그레이션이 필요한 경우:**

- 라이브러리를 사용하는 외부 코드에서 props로 전달하는 v1 토큰
  - 예: `<Box backgroundColor="bg-grey-light" />` 형태의 사용 코드

**주의사항:**

- bezier-react 내부 코드와 외부 사용처 모두 마이그레이션 필요
- 모든 사용처를 일괄 변경하는 것은 어려우므로 점진적 마이그레이션 필요
- 기존 v1 토큰은 하위 호환성을 위해 계속 지원
- 신규 코드는 v3 토큰 사용 권장

#### 5단계: 최종 마이그레이션 (beta 프리픽스 제거) - 향후 계획

**최종 목표:**

- v3 토큰에서 `beta-` 프리픽스를 완전히 제거
- CSS 변수명도 `--beta-*`에서 `--*`로 변경
- 예: `fill-neutral-light` → CSS 변수: `--fill-neutral-light` (현재는 `--beta-color-fill-neutral-light`)

**변경 사항:**

1. `beta-tokens.ts`에서 타입 정의는 이미 프리픽스 제거된 형태로 정의됨 ✅
2. `tokenCssVar()` 함수가 beta 프리픽스 없이도 올바르게 변환하도록 수정 필요
   - 현재: `fill-neutral-light` → `var(--beta-color-fill-neutral-light)`
   - 최종: `fill-neutral-light` → `var(--fill-neutral-light)`
3. SCSS 모듈에서도 beta 프리픽스 제거
4. 사용처 코드는 이미 프리픽스 제거된 형태로 사용 가능 ✅

**참고:**

- 현재 단계에서는 타입 정의와 사용 코드는 프리픽스 제거된 형태이지만, CSS 변수명은 아직 `--beta-*` 형태입니다.
- 최종 단계에서는 CSS 변수명도 `--beta-*`에서 `--*`로 변경될 예정입니다.

#### 6단계: 마이그레이션 가이드 작성

- Props 기반 토큰 사용 가이드 문서화
- v1 → v3 마이그레이션 예제 제공
- CSS variables 직접 사용 vs Props 사용 선택 기준 명시

#### 7단계: 점진적 마이그레이션

- 기존 코드는 v1 토큰 유지 (하위 호환성)
- 신규 코드는 v3 토큰 사용 권장
- Deprecation 경고 추가 (선택적)

### 주의사항

1. **하위 호환성 유지**: 기존 v1 토큰 props는 계속 지원해야 함
2. **타입 안정성**: v2/v3 토큰 타입이 올바르게 정의되어 있는지 확인
3. **변환 로직 검증**: `tokenCssVar()`가 모든 토큰 버전을 올바르게 처리하는지 테스트
4. **일관성**: CSS variables 직접 사용과 props 사용 간의 일관된 네이밍 및 동작 확인

### 마이그레이션 예시

**v1 → v3 변환 (프리픽스 제거된 형태)**

```tsx
// Before (v1 토큰)
<Box backgroundColor="bg-grey-light" />
<Text color="txt-black-darkest" />
<Box borderColor="bdr-black-light" />

// After (v3 토큰, 프리픽스 제거된 형태)
<Box backgroundColor="fill-neutral-light" />
<Text color="text-neutral" />
<Box borderColor="border-neutral" />
```

**변환 매핑 예시:**

```typescript
// v1 → v3 변환 매핑 (프리픽스 제거된 형태)
'bg-grey-lightest' → 'fill-neutral-lightest'
'bg-grey-lighter' → 'fill-neutral-lighter'
'bg-black-light' → 'fill-neutral-light'
'bg-black-lighter' → 'fill-neutral-lighter'
'bgtxt-blue-normal' → 'text-accent-blue'
'bgtxt-green-normal' → 'text-accent-green'
'bdr-black-light' → 'border-neutral'
'txt-black-darkest' → 'text-neutral'
```

**참고:** v3 토큰은 타입 정의에서 프리픽스가 제거되어 있지만, `tokenCssVar` 함수가 이를 `--beta-color-*` 형태의 CSS 변수로 변환합니다. 최종 단계에서는 CSS 변수명도 `--beta-*`에서 `--*`로 변경될 예정입니다.

**현재 타입 정의 (beta-tokens.ts):**

```typescript
// beta-tokens.ts
import { type tokens } from '@channel.io/bezier-tokens/beta'
import { type RemovePrefix, type StartsWithPrefix } from './utils'

// 프리픽스 제거된 형태로 정의
export type SemanticColor = RemovePrefix<
  'beta-color',
  keyof SemanticToken['color']
>

export type BackgroundSemanticColor =
  | StartsWithPrefix<'fill', SemanticColor>
  | StartsWithPrefix<'surface', SemanticColor>
export type TextSemanticColor = StartsWithPrefix<'text', SemanticColor>
export type BorderSemanticColor = StartsWithPrefix<'border', SemanticColor>
export type IconSemanticColor = StartsWithPrefix<'icon', SemanticColor>

// props.ts
export interface LayoutProps {
  backgroundColor?: BackgroundSemanticColor | TextSemanticColor // v3 토큰
  borderColor?: BorderSemanticColor // v3 토큰
  // ...
}
```

**참고:** 현재 `props.ts`는 `beta-tokens.ts`에서 타입을 import하고 있으며, v3 토큰만 사용하도록 변경되었습니다. v1 토큰은 하위 호환성을 위해 별도로 지원하지 않지만, 타입 시스템이 v3 토큰을 올바르게 인식합니다.
