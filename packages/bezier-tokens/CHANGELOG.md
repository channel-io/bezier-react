# @channel.io/bezier-tokens

## 0.3.1-alpha.0

### Patch Changes

- Remove 'color-' prefix from alpha color tokens ([#2588](https://github.com/channel-io/bezier-react/pull/2588)) by @sungik-choi

## 0.3.0

### Minor Changes

- Add SCSS support to access design tokens directly through SCSS variables. ([#2568](https://github.com/channel-io/bezier-react/pull/2568)) by @sungik-choi

## 0.2.13

### Patch Changes

- The alpha version dimension token is removed. The alpha version radius token is added. ([#2540](https://github.com/channel-io/bezier-react/pull/2540)) by @sungik-choi

## 0.2.12

### Patch Changes

- Changes in alpha color tokens. ([#2515](https://github.com/channel-io/bezier-react/pull/2515)) by @yangwooseong
  - `color-fg(bg)-grey-grey-alpha-*` are renamed to `color-fg(bg)-grey-alpha-*`.
  - `color-fg(bg)-white-white-alpha-*` are renamed to `color-fg(bg)-white-alpha-*`.
  - add `color-fg-grey-darkest` token.

## 0.2.11

### Patch Changes

- Change `alpha-color-green-300-0` alpha token. ([#2471](https://github.com/channel-io/bezier-react/pull/2471)) by @yangwooseong
  Modify hovered color generating formula so that they are more visible in dark theme.

## 0.2.10

### Patch Changes

- Rename `bg-${red}-shade-light` token to `bg-${red}-shade-lighter`. ([#2466](https://github.com/channel-io/bezier-react/pull/2466)) by @yangwooseong

- Changes to the build result of package. ([#2462](https://github.com/channel-io/bezier-react/pull/2462)) by @yangwooseong

  - `dark(light)ThemeHovered` property of entry object is removed and merged into the `dark(light)Theme` property.
  - duplicate selector issue is resolved in `styles.css` stylesheet.

## 0.2.9

### Patch Changes

- Changes in alpha functional tokens ([#2460](https://github.com/channel-io/bezier-react/pull/2460)) by @yangwooseong
  - fix value of dark theme `bg-white-white-alpha-transparent` to `black-0`.
  - add `bg-absolute-white,black-transparent`.

## 0.2.8

### Patch Changes

- Add transparent tokens for alpha global and functional tokens. ([#2454](https://github.com/channel-io/bezier-react/pull/2454)) by @yangwooseong

- Change some value of alpha tokens and add transparent token for alpha tokens. ([#2453](https://github.com/channel-io/bezier-react/pull/2453)) by @yangwooseong

## 0.2.7

### Patch Changes

- Add hovered color tokens for alpha functional color. ([#2422](https://github.com/channel-io/bezier-react/pull/2422)) by @yangwooseong

## 0.2.6

### Patch Changes

- Fix the value of alpha color.green.300(-15,30,45) ([#2362](https://github.com/channel-io/bezier-react/pull/2362)) by @yangwooseong

## 0.2.5

### Patch Changes

- Add `white-alpha/transparent` token. ([#2253](https://github.com/channel-io/bezier-react/pull/2253)) by @yangwooseong

- Change `innerShadow` value of `alpha-shadow-input-default` token to reference `color.shadow.medium` ([#2274](https://github.com/channel-io/bezier-react/pull/2274)) by @yangwooseong

## 0.2.4

### Patch Changes

- Add missing `fg-{color}-dark` alpha version color tokens. ([#2212](https://github.com/channel-io/bezier-react/pull/2212)) by @sungik-choi

## 0.2.3

### Patch Changes

- Add the font-family format supported by Google Web Font ([#2209](https://github.com/channel-io/bezier-react/pull/2209)) by @leejiwoo2002

## 0.2.2

### Patch Changes

- Add `opacity-disabled` to alpha token. ([#2162](https://github.com/channel-io/bezier-react/pull/2162)) by @yangwooseong

- Fix the value of alpha color.cobalt.300 ([#2160](https://github.com/channel-io/bezier-react/pull/2160)) by @sungik-choi

## 0.2.1

### Patch Changes

- Add "color" prefix to alpha color tokens and fix misnaming of alpha font/typography tokens. ([#2152](https://github.com/channel-io/bezier-react/pull/2152)) by @sungik-choi

## 0.2.0

### Minor Changes

- Add `ref` value to design tokens of alpha version. ([#2135](https://github.com/channel-io/bezier-react/pull/2135)) by @sungik-choi

- Add design tokens for next(alpha) version. ([#2132](https://github.com/channel-io/bezier-react/pull/2132)) by @sungik-choi

### Patch Changes

- Modify alpha design tokens according to figma design ([#2138](https://github.com/channel-io/bezier-react/pull/2138)) by @yangwooseong

## 0.1.0

### Minor Changes

- Apply deep freeze to the `tokens` object. ([#1992](https://github.com/channel-io/bezier-react/pull/1992)) by @sungik-choi

- Add the missing `bg-header-float` semantic color token ([#1842](https://github.com/channel-io/bezier-react/pull/1842)) by @sungik-choi

- Add composition tokens, such as box-shadow ([#1769](https://github.com/channel-io/bezier-react/pull/1769)) by @sungik-choi

- Now serving one combined styles.css file. This is a breaking change for anyone who was importing the individual CSS files. You will need to update your import to `@channel.io/bezier-tokens/css/styles.css`. ([#1769](https://github.com/channel-io/bezier-react/pull/1769)) by @sungik-choi

- Add z-index and opacity tokens ([#1766](https://github.com/channel-io/bezier-react/pull/1766)) by @sungik-choi

- Remove invalid radius tokens ([#1934](https://github.com/channel-io/bezier-react/pull/1934)) by @sungik-choi

  - `radius-10`
  - `radius-14`
  - `radius-100-p`

- Fix invalid letter spacing token values ([#1821](https://github.com/channel-io/bezier-react/pull/1821)) by @sungik-choi

- First release ([#1685](https://github.com/channel-io/bezier-react/pull/1685)) by @sungik-choi

- Add categories by token to the JavaScript build file ([#1766](https://github.com/channel-io/bezier-react/pull/1766)) by @sungik-choi

- Remove unused tokens and add missing unit to radius tokens ([#1752](https://github.com/channel-io/bezier-react/pull/1752)) by @sungik-choi

### Patch Changes

- Remove duplicate styles in styles.css ([#1779](https://github.com/channel-io/bezier-react/pull/1779)) by @sungik-choi

## 0.1.0-alpha.5

### Minor Changes

- Apply deep freeze to the `tokens` object. ([#1992](https://github.com/channel-io/bezier-react/pull/1992)) by @sungik-choi

## 0.1.0-alpha.4

### Minor Changes

- Remove invalid radius tokens ([#1934](https://github.com/channel-io/bezier-react/pull/1934)) by @sungik-choi

  - `radius-10`
  - `radius-14`
  - `radius-100-p`

## 0.1.0-alpha.3

### Minor Changes

- Add the missing `bg-header-float` semantic color token. ([#1842](https://github.com/channel-io/bezier-react/pull/1842)) by @sungik-choi

- Fix invalid letter spacing token values ([#1821](https://github.com/channel-io/bezier-react/pull/1821)) by @sungik-choi

## 0.1.0-alpha.2

### Minor Changes

- Add composition tokens, such as box-shadow. ([#1769](https://github.com/channel-io/bezier-react/pull/1769)) by @sungik-choi

- Now serving one combined styles.css file. This is a breaking change for anyone who was importing the individual CSS files. You will need to update your import to `@channel.io/bezier-tokens/css/styles.css`. ([#1769](https://github.com/channel-io/bezier-react/pull/1769)) by @sungik-choi

- Add z-index and opacity tokens. ([#1766](https://github.com/channel-io/bezier-react/pull/1766)) by @sungik-choi

- Add categories by token to the JavaScript build file. ([#1766](https://github.com/channel-io/bezier-react/pull/1766)) by @sungik-choi

### Patch Changes

- Remove duplicate styles in styles.css ([#1779](https://github.com/channel-io/bezier-react/pull/1779)) by @sungik-choi

## 0.1.0-alpha.1

### Minor Changes

- Remove unused tokens and add missing unit to radius tokens. ([#1752](https://github.com/channel-io/bezier-react/pull/1752)) by @sungik-choi

## 0.1.0-alpha.0

### Minor Changes

- First release ([#1685](https://github.com/channel-io/bezier-react/pull/1685)) by @sungik-choi
