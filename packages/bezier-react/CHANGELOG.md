# @channel.io/bezier-react

## 4.0.0-alpha.0

### Major Changes

- Migrate to alpha version color tokens ([#2588](https://github.com/channel-io/bezier-react/pull/2588)) by @sungik-choi

### Patch Changes

- Updated dependencies
  - @channel.io/bezier-tokens@0.3.1-alpha.0

## 3.0.3

### Patch Changes

- Add `text-align: left` style to `Banner` component. ([#2577](https://github.com/channel-io/bezier-react/pull/2577)) by @sungik-choi

## 3.0.2

### Patch Changes

- Modify the `iconColor` property of the `Banner` component to override the color. ([#2575](https://github.com/channel-io/bezier-react/pull/2575)) by @yangwooseong

## 3.0.1

### Patch Changes

- Export the `alphaTokens`, `AlphaTokens`, and `useAlphaTokens` modules. ([#2564](https://github.com/channel-io/bezier-react/pull/2564)) by @sungik-choi

- Updated dependencies
  - @channel.io/bezier-tokens@0.3.0

## 3.0.0

### Major Changes

- Add support for React 19 and enable new JSX transform. Increase minimum supported React peer dependency version from 16.8 to 17. ([#2559](https://github.com/channel-io/bezier-react/pull/2559)) by @sungik-choi

## 2.6.2

### Patch Changes

- If disabled is not passed from Button's props, disabled follows loading ([#2510](https://github.com/channel-io/bezier-react/pull/2510)) by @jintak0401

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.13

## 2.6.1

### Patch Changes

- Decreate icon size of `AlphaButton`, `AlphaIconbutton`, `AlphaFloatingButton`, and `AlphaFloatingIconButton`. ([#2532](https://github.com/channel-io/bezier-react/pull/2532)) by @yangwooseong

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.12

## 2.6.0

### Minor Changes

- - Add `clickable` property to `ListItem` and `OutlineItem`. This property makes the component appear clickable even when it's not inherently interactive. ([#2502](https://github.com/channel-io/bezier-react/pull/2502)) by @sungik-choi
  - `OutlineItem` now does not have a clickable style by default.

## 2.5.1

### Patch Changes

- Improves the styling of the `ListItem` component based on whether it is interacted with or not. ([#2501](https://github.com/channel-io/bezier-react/pull/2501)) by @sungik-choi

## 2.5.0

### Minor Changes

- Layout components support the `basis` (`flex-basis`) property. ([#2495](https://github.com/channel-io/bezier-react/pull/2495)) by @sungik-choi

### Patch Changes

- Improve the rendering performance of components that use `LegacyIcon`. ([#2494](https://github.com/channel-io/bezier-react/pull/2494)) by @sungik-choi

## 2.4.0

### Minor Changes

- The use client directive has been added at the top of all components inside @channel.io/bezier-react. ([#2468](https://github.com/channel-io/bezier-react/pull/2468)) by @nayounsang

### Patch Changes

- Remove 1px gap between icon and text in `s` size `AlphaButton`, `AlphaFloatingButton`. ([#2484](https://github.com/channel-io/bezier-react/pull/2484)) by @yangwooseong

- Apply hovered color token for `AlphaButton`, `AlphaFloatingButton`, and `AlphaFloatingIconButton`. ([#2471](https://github.com/channel-io/bezier-react/pull/2471)) by @yangwooseong

- Add `ToggleEmojiButtonGroup` and `ToggleEmojiButtonSource` component. ([#2301](https://github.com/channel-io/bezier-react/pull/2301)) by @yangwooseong

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.11

## 2.3.3

### Patch Changes

- Fix a bug where "+1" emoji does not render. ([#2470](https://github.com/channel-io/bezier-react/pull/2470)) by @yangwooseong

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.10

## 2.3.2

### Patch Changes

- Fix `variant` props of `AlphaLoader` component used in `AlphaButton` component. ([#2461](https://github.com/channel-io/bezier-react/pull/2461)) by @yangwooseong

- Fix `size` props of `AlphaLoader` component to be required. ([#2458](https://github.com/channel-io/bezier-react/pull/2458)) by @yangwooseong

- Modify background color of tertiary `AlphaButton` and `AlphaIconButton`. ([#2460](https://github.com/channel-io/bezier-react/pull/2460)) by @yangwooseong

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.9

## 2.3.1

### Patch Changes

- Add `AlphaStatusBadge` component. ([#2434](https://github.com/channel-io/bezier-react/pull/2434)) by @babycroc

- Changes to `AlphaButton` and `AlphaIconButton` ([#2454](https://github.com/channel-io/bezier-react/pull/2454)) by @yangwooseong

  - `white` color is renamed to `white-absolute`.
  - use transparent token for background color of tertiary style.
  - add missed color style for `white-absolute`.

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.8

## 2.3.0

### Minor Changes

- Fix z-index not being applied correctly in `Toast`. Add `zIndex` prop to `ToastProvider`. ([#2438](https://github.com/channel-io/bezier-react/pull/2438)) by @sungik-choi

### Patch Changes

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.7

## 2.2.4

### Patch Changes

- Deprecate `imageUrl` props of `Emoji` component. ([#2400](https://github.com/channel-io/bezier-react/pull/2400)) by @yangwooseong

- Fix `OutlineItem` component's icon size and gap between icon and leftContent. ([#2403](https://github.com/channel-io/bezier-react/pull/2403)) by @yangwooseong

- Prevent right button of `TextField` from shrinking. ([#2375](https://github.com/channel-io/bezier-react/pull/2375)) by @yangwooseong

- Keep the color of text when hovering over the tertiary `Button` component. ([#2381](https://github.com/channel-io/bezier-react/pull/2381)) by @yangwooseong

## 2.2.3

### Patch Changes

- Fix vertical align bug with icon in `AlphaFloatingIconButton` component. ([#2383](https://github.com/channel-io/bezier-react/pull/2383)) by @yangwooseong

## 2.2.2

### Patch Changes

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.6

## 2.2.1

### Patch Changes

- Change `source` type of IconProps to `BezierIcon` ([#2344](https://github.com/channel-io/bezier-react/pull/2344)) by @yangwooseong

## 2.2.0

### Minor Changes

- Focus on the clear button in `TextField` component when tab is pressed. ([#2325](https://github.com/channel-io/bezier-react/pull/2325)) by @ehgmsdk20

### Patch Changes

- Rename `AlphaSpinner` component to `AlphaLoader`. ([#2336](https://github.com/channel-io/bezier-react/pull/2336)) by @yangwooseong

## 2.1.0

### Minor Changes

- Add `dropdownKeepInContainer` prop in `Select` ([#2323](https://github.com/channel-io/bezier-react/pull/2323)) by @igy95

## 2.0.9

### Patch Changes

- Add `AlphaToggleButton` component. ([#2276](https://github.com/channel-io/bezier-react/pull/2276)) by @yangwooseong

- Add `AlphaToggleButtonGroup` component. ([#2276](https://github.com/channel-io/bezier-react/pull/2276)) by @yangwooseong

- Fixed a bug where the focus effect of the `TabItem` component was cut off. ([#2295](https://github.com/channel-io/bezier-react/pull/2295)) by @theaniketnegi

## 2.0.8

### Patch Changes

- Changes in `Button` component set ([#2252](https://github.com/channel-io/bezier-react/pull/2252)) by @yangwooseong

  - use `AlphaSpinner` instead of `Spinner` component for loading state.
  - set size of `AlphaSpinner` to be `Icon` size.

- Change `white-absolute` to `white` in `AlphaButton` and `AlphaIconButton` color. ([#2278](https://github.com/channel-io/bezier-react/pull/2278)) by @yangwooseong

- Changes with `Button` component ([#2253](https://github.com/channel-io/bezier-react/pull/2253)) by @yangwooseong

  - Change `white` to `white-absolute` in `color` props.
  - Apply `white-alpha/transparent` token for `tertiary` button.

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.5

## 2.0.7

### Patch Changes

- Change `position` property of `ToastContainer` to `fixed` ([#2245](https://github.com/channel-io/bezier-react/pull/2245)) by @yangwooseong

- Fix typo in `IconProps` jsdoc ([#2232](https://github.com/channel-io/bezier-react/pull/2232)) by @yangwooseong

- - Fix ReactJS console warnings. ([#2238](https://github.com/channel-io/bezier-react/pull/2238)) by @nabi-chan
  - Introduce `useIsomorphicLayoutEffect` hook to use `useLayoutEffect` in SSR environment.

- Add `AlphaSpinner` component ([#2237](https://github.com/channel-io/bezier-react/pull/2237)) by @yangwooseong

## 2.0.6

### Patch Changes

- - Add `AlphaFloatingIconButton` component. ([#2223](https://github.com/channel-io/bezier-react/pull/2223)) by @yangwooseong
  - Fix disabled style bug with `AlphaButton` and `AlphaIconButton`.
  - Change `icon` type of `AlphaIconButton` to be required.

## 2.0.5

### Patch Changes

- Add `AlphaIconButton` component. ([#2200](https://github.com/channel-io/bezier-react/pull/2200)) by @yangwooseong

- Replace `aria-label` of non-interactive elements ([#2217](https://github.com/channel-io/bezier-react/pull/2217)) by @Dogdriip

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.4

## 2.0.4

### Patch Changes

- Change outline color of primary and blue `Button` component when focused. ([#2182](https://github.com/channel-io/bezier-react/pull/2182)) by @yangwooseong

- Add `AlphaButton` component. ([#2182](https://github.com/channel-io/bezier-react/pull/2182)) by @yangwooseong

- Add `AlphaFloatingButton` component. ([#2193](https://github.com/channel-io/bezier-react/pull/2193)) by @yangwooseong

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.3

## 2.0.3

### Patch Changes

- Implement `AlphaAvatar` component. ([#2162](https://github.com/channel-io/bezier-react/pull/2162)) by @yangwooseong

- Add `AlphaAvatarGroup` component ([#2177](https://github.com/channel-io/bezier-react/pull/2177)) by @yangwooseong

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.2

## 2.0.2

### Patch Changes

- Fixes an issue where injecting `className` into `FormLabel`, `FormHelperText` inside a `FormControl` does not apply styles correctly. ([#2156](https://github.com/channel-io/bezier-react/pull/2156)) by @sungik-choi

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.1

## 2.0.1

### Patch Changes

- The style sheet(styles.css) now includes the alpha version of the design token. ([#2141](https://github.com/channel-io/bezier-react/pull/2141)) by @sungik-choi

- Remove the `/alpha` directory and add the `Alpha` prefix to alpha components. ([#2140](https://github.com/channel-io/bezier-react/pull/2140)) by @sungik-choi

  - `TooltipPrimitive` -> `AlphaTooltipPrimitive`
  - `DialogPrimitive` -> `AlphaDialogPrimitive`

- Updated dependencies
  - @channel.io/bezier-tokens@0.2.0

## 2.0.0

### Major Changes

- **Breaking Changes: Property updates in `Avatar` component** ([#1871](https://github.com/channel-io/bezier-react/pull/1871)) by @yangwooseong

  No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking changes: Remove TagBadge-related types** ([#2114](https://github.com/channel-io/bezier-react/pull/2114)) by @sungik-choi

  - Remove `color` prop of `TagProps` and `TagBadgeBgColorPreset`.
  - Remove `TagBadgeSize`. Please change it to `TagSize` and `BadgeSize`.
  - Remove `TagBadgeVariant`. Please change it to `TagVariant` and `BadgeVariant`.

- **Breaking Changes: Property updates in `SegmentedControl` component** ([#1866](https://github.com/channel-io/bezier-react/pull/1866)) by @sungik-choi

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `ListItem` component** ([#1925](https://github.com/channel-io/bezier-react/pull/1925)) by @sungik-choi

  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `iconStyle`, `iconClassName`, `iconInterpolation`, `contentStyle`, `contentClassName` and `contentInterpolation`. This decision was made to reduce excessive flexibility in the interface.
  - No longer support `leftIcon` property. Removed for consistency with other component interfaces. Replace it to `leftContent`.
  - No longer support `name` property. The second argument (name) of `onClick` is also removed. If you need an identifier, combine functions outside of the component.
  - No longer support `hide`, `nested`, `optionKey` and `disableIconActive` property. Removed because it is a legacy property. Replace `hide` property with conditional rendering.
  - The size changes according to the `ListItemSize`. This is a change to unify the design. Please change it like below.
    - `ListItemSize.S` -> `ListItemSize.XS`
    - `ListItemSize.M` -> `ListItemSize.S`
    - `ListItemSize.L` -> `ListItemSize.M`
    - `ListItemSize.XL` -> `ListItemSize.L`

  **Minor Changes:**

  - Fix incorrect text size for `XL`(now `L`) size.

- **Breaking Changes: Property updates in `Overlay` component** ([#1949](https://github.com/channel-io/bezier-react/pull/1949)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `containerInterpolation` property. Replace any usage of `containerInterpolation` property with appropriate `containerStyle` or `containerClassName` implementations.
  - No longer support `wrapperTestId` property.

- **Breaking Changes: Remove `TooltipProvider` and Property updates in `Tooltip` component** ([#1974](https://github.com/channel-io/bezier-react/pull/1974)) by @sungik-choi

  - No longer support `TooltipProvider` and `TooltipProviderProps`. `Tooltip` component was implemented via radix-ui's Tooltip, which required the use of a `TooltipProvider`, which caused all subcomponents to be re-rendered and caused a performance hit. We decided that the ability to share hover delay time between `Tooltip` components via `TooltipProvider` was not a feature we needed, even with the performance penalty. Also, by providing `TooltipProvider` built-in to `AppProvider`, we were unnecessarily importing modules from our library usage that didn't require `Tooltip`.
  - `Tooltip` component now contains a `TooltipProvider` inside it.

  **Minor Changes:**

  - Change the default value of `delayShow` prop from `300` to `0`.

- **Breaking Changes: Property updates in `Tag` and `Badge` component** ([#1872](https://github.com/channel-io/bezier-react/pull/1872)) by @yangwooseong

  No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `CheckableAvatar` component** ([#1921](https://github.com/channel-io/bezier-react/pull/1921)) by @sungik-choi

  No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: `AlphaSmoothCornersBox` component is now `SmoothCornersBox` component.** ([#2079](https://github.com/channel-io/bezier-react/pull/2079)) by @sungik-choi

- **Breaking Changes: Property updates in `LegacyTooltip` component** ([#1945](https://github.com/channel-io/bezier-react/pull/1945)) by @sungik-choi

  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `contentInterpolation` property. Replace any usage of `contentInterpolation` property with appropriate `contentStyle` or `contentClassName` implementations.
  - No longer support `contentWrapperInterpolation` property. Replace any usage of `contentWrapperInterpolation` property with appropriate `contentWrapperStyle` or `contentWrapperClassName` implementations.

- **Breaking Changes: `AlphaCenter` component is now `Center` component. Property updates in `Center` component** ([#1854](https://github.com/channel-io/bezier-react/pull/1854)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - Now supports margin props, layout props and `display` prop.

- **Breaking Changes: Property updates in `FormLabel`, `FormHelperText`, and `FormErrorMessage` component** ([#1893](https://github.com/channel-io/bezier-react/pull/1893)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `NavGroup` and `NavItem` component** ([#1931](https://github.com/channel-io/bezier-react/pull/1931)) by @sungik-choi

  `leftIcon` renamed to `leftContent`. Changed to improve consistency of interface property names across libraries.

- **Breaking Changes: The enum type that the component receives as props is changed to a string (or number) literal type** ([#2059](https://github.com/channel-io/bezier-react/pull/2059)) by @yangwooseong

  The properties that change are:

  - `AvatarGroupEllipsisType`
  - `IconSize`
  - `LegacyTooltipPosition`
  - `ModalTitleSize`
  - `OverlayPosition`
  - `ProgressBarSize`, `ProgressBarVariant`
  - `SpinnerSize`
  - `SwitchSize`
  - `TagBadgeSize`, `TagBadgeVariant`
  - `TextAreaHeight`
  - `TextFieldSize`, `TextFieldVariant`
  - `ToastPlacement`, `ToastAppearance`, `ToastPreset`
  - `TooltipPosition`

  Also, `SpinnerThickness` props of `Spinner` is not supported any more.

  When changed to string literal type, it is changed to the kebab-cased value of enum. e.g. `TooltipPosition.TopCenter` -> `top-center`. Among the above enums, `TextAreaHeight` is converted to number literal type. e.g. `TextAreaHeight.Row16` -> `16`, and `IconSize.normal` is converted to `m` for consistency

- **Breaking Changes: Property updates in `FormControl`, `Select`, and `TextField` component** ([#1948](https://github.com/channel-io/bezier-react/pull/1948)) by @yangwooseong

  - `FormControl` component no longer supports `leftLabelWrapperHeight` props.
  - `FormControl` component now supports `size` props, which is passed as context to the child component such as `TextField` and `Select` and specified as the size property.
  - The size property of `Select` and `TextField` component changes from enum to string literal union type. Also, `SelectSize` and `TextFieldSize` enum are deprecated.

- **Breaking changes: Remove `testId` and related properties** ([#1971](https://github.com/channel-io/bezier-react/pull/1971)) by @sungik-choi

  No longer supports `testId` and related properties(e.g. `wrapperTestId`). `testId` is a property used internally by the library for testing with testing-library (`getByTestId`). We don't see a need to expose this as a public API, so we remove it.

  If you were using it, please replace it with the `data-testid` property. See <https://testing-library.com/docs/queries/bytestid/>.

- **Breaking Changes: Property updates in `FormControl` component** ([#1935](https://github.com/channel-io/bezier-react/pull/1935)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `Select` component** ([#1913](https://github.com/channel-io/bezier-react/pull/1913)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `dropdownInterpolation` property. Replace any usage of `dropdownInterpolation` property with appropriate `dropdownStyle` or `dropdownClassName` implementations.
  - The type of `zIndex` property is changed to a z-index token. (e.g. `"modal"`)

- **Breaking Changes: Reorganizing `SectionLabel` component** ([#1936](https://github.com/channel-io/bezier-react/pull/1936)) by @sungik-choi

  `SectionLabel` is a complex component that can be used both in the form of an accordion and as a simple heading. To better meet the needs of both, we've changed the internal implementation of the component.

  We've also made changes to make styling overrides as predictable as they are for other components. The style override property, which was unnecessarily open, is now removed.

  - Remove the internal div wrapper. `style`, `className` properties are now injected into the component instead of the old `wrapperStyle`, `wrapperClassName`.
  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support additional style properties of `wrapper`, `contentWrapper`, `leftWrapper` and `rightWrapper`.
  - No longer support `divider` property. Replace it by adding `Divider` component to the component's before.
  - The side content property is changed. It is no longer possible to override `iconColor`.
  - When injecting `onClick` handler, the root element now behaves as a `button` element. This change is to better support keyboard focus control.

- **Breaking Changes: Property updates in `Emoji` component** ([#1881](https://github.com/channel-io/bezier-react/pull/1881)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `Radio` component** ([#1923](https://github.com/channel-io/bezier-react/pull/1923)) by @sungik-choi

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Deprecated modules for internal use** ([#1963](https://github.com/channel-io/bezier-react/pull/1963)) by @sungik-choi

  - No longer provides `useEventHandler` and `useMergeRefs` hook.
  - No longer provides `useId` hook. Use `useId` hook of `react` instead.
  - No longer provides `getRootElement` hook. Use `useWindow` hook instead.
  - No longer provides `StyleUtils` and `StringUtils` utils.

- **Breaking Changes: Property updates in `ProgressBar` component** ([#1947](https://github.com/channel-io/bezier-react/pull/1947)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `activeStyle`, `activeClassName` and `activeInterpolation` property.
  - No longer support `activeTestId` property.

- **Breaking Changes: Property updates in `Tabs`-related components** ([#1960](https://github.com/channel-io/bezier-react/pull/1960)) by @sungik-choi

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `Text` component** ([#1820](https://github.com/channel-io/bezier-react/pull/1820)) by @sungik-choi

  `typo` prop in the `Text` component has been changed to accept only string literals in order to simplify the API and improve the predictability of text styling, particularly in the context of the removal of `styled-components` from `bezier-react`, which has led to the unavailability of CSS Interpolation.

  **Migration Instructions:**

  Use [`v2-text-component-interface`](https://github.com/channel-io/bezier-react/tree/alpha/packages/bezier-codemod#change-interface-of-text) transformer from `bezier-codemod` for automated migration.

- **Breaking Changes: Reorganizing `KeyValueListItem` component** ([#1941](https://github.com/channel-io/bezier-react/pull/1941)) by @sungik-choi

  - **Renamed to `KeyValueItem`.**
  - - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `valueWrapperStyle`, `valueWrapperClassName`, `valueWrapperInterpolation`, `keyWrapperStyle`, `keyWrapperClassName` and `keyWrapperInterpolation`. This decision was made to reduce excessive flexibility in the interface.
  - No longer support `AdditionalColorProps` and `show` property of ItemAction.
  - The icon inside ItemAction is now implemented through `Button` component.
  - The Value Container will now always have 100% of the parent's width.

- Add new margin properties to `Icon` component ([#1863](https://github.com/channel-io/bezier-react/pull/1863)) by @yangwooseong

  - `margin`
  - `marginHorizontal`
  - `marginVertical`

- **Breaking Changes: Property updates in `NavItem` and `NavGroup` component** ([#1905](https://github.com/channel-io/bezier-react/pull/1905)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: The enum type that the component receives as props is changed to a string literal type** ([#2059](https://github.com/channel-io/bezier-react/pull/2059)) by @yangwooseong

  The properties that change are:

  - `AvatarSize`
  - `BannerVariant`
  - `ButtonColorVariant`, `ButtonStyleVariant`, `ButtonSize`
  - `EmojiSize`
  - `SegmentedControlSize`
  - `TabSize`
  - `ListItemVariant`, `ListItemSize`
  - `StatusType`, `StatusSize`

  When changed to string literal type, it is changed to the kebab-cased value of enum. e.g. `ButtonStyleVariant.MonoChromeDark` -> `monochrome-dark`, `StatusType.OnlineCrescent` -> `online-crescent`

- **Breaking Changes: Property updates in `Modal`-related components** ([#1903](https://github.com/channel-io/bezier-react/pull/1903)) by @sungik-choi

  - No longer supports `as` and `interpolation` props.
  - The type of `zIndex` property is changed to a z-index token. (e.g. `"modal"`)

- **Breaking Change: Removal of `LegacySegmentedControl` Component** ([#1786](https://github.com/channel-io/bezier-react/pull/1786)) by @sungik-choi

  We have removed the `LegacySegmentedControl` component from our library. This change follows its deprecation in `next-v1.204`.

  **Reasons for Removal:**

  - To enhance web accessibility and improve keyboard navigation.
  - To align with our goals of design modernization and consistent user experience.

  **Impact:**

  `LegacySegmentedControl` component is no longer available and cannot be used in your projects. Replace all instances of `LegacySegmentedControl` with `SegmentedControl` component.

- **Breaking Changes: Property updates in `LegacyStack` components** ([#1944](https://github.com/channel-io/bezier-react/pull/1944)) by @sungik-choi

  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer export `AxisAlignment` type.

- **Breaking Changes: Property updates in `TextField` component** ([#1904](https://github.com/channel-io/bezier-react/pull/1904)) by @sungik-choi

  - No longer support `interpolation`-related properties. Replace any usage of `interpolation` -related properties with appropriate `***style` or `***className` implementations.
  - No longer support `inputStyle` and `inputClassName` properties. Replace any usage of `inputStyle` and `inputClassName` with appropriate `style` or `className` implementations.
  - Change the value of `TextFieldVariant` enum value to string.

- **Breaking Changes: Remove the default offset(`GNB_WIDTH`) in `Toast`** ([#2117](https://github.com/channel-io/bezier-react/pull/2117)) by @sungik-choi

  Remove the style because it was dependent on a specific application. Use `{ left: 68 }` instead.

- **Breaking Changes: Property updates in `Banner` component** ([#1891](https://github.com/channel-io/bezier-react/pull/1891)) by @sungik-choi

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

  **Other changes in `Banner` component**

  - now supports HTML attributes.
  - now supports style props.

- **Breaking Change: Removal of `LegacyRadio` Component** ([#1943](https://github.com/channel-io/bezier-react/pull/1943)) by @sungik-choi

  - `LegacyRadio` component has been removed from the library. Please use `RadioGroup` and `Radio` component instead.
  - Now if `Radio` has no label, its size is reduced by an indicator.

- **Breaking Changes: Property updates in `Checkbox` component** ([#1918](https://github.com/channel-io/bezier-react/pull/1918)) by @sungik-choi

  No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `Switch` component** ([#1885](https://github.com/channel-io/bezier-react/pull/1885)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- Export the css style sheet for the new design system. ([#1492](https://github.com/channel-io/bezier-react/pull/1492)) by @sungik-choi

- **Breaking Changes: Reorganizing `OutlineItem` component** ([#1930](https://github.com/channel-io/bezier-react/pull/1930)) by @sungik-choi

  `OutlineItem` component was originally designed as a component to draw a tree-like view, _but it was not used as intended in production_. We simplified the component's responsibilities by removing unused properties while retaining the component's ability to apply indentation to subcomponents.

  - No longer support `paddingLeft` property. **By default, 6px of left padding has been added.** If you need to make changes, override the style.
  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `iconStyle`, `iconClassName`, `iconInterpolation`, `contentStyle`, `contentClassName` and `contentInterpolation`. This decision was made to reduce excessive flexibility in the interface.
  - No longer support `leftIcon` property. Removed for consistency with other component interfaces. Replace it to `leftContent`.
  - No longer support `leftIconColor` and `leftIconTestId` property.
  - No longer support `name` property. The second argument (name) of `onClick` is also removed. If you need an identifier, combine functions outside of the component.
  - No longer support `hide`, `optionKey` and `disableIconActive` property. Replace `hide` property with conditional rendering.
  - No longer support `onOpen`, `onClickArrow`, `selectedOutlineItemIndex` and `onChangeOption` property.

- **Breaking Changes: Property updates in `Slider` component** ([#1883](https://github.com/channel-io/bezier-react/pull/1883)) by @yangwooseong

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - `dir` type is narrowed from `string | undefined` to `ltr | rtl | undefined`

- **Breaking Changes: Property updates in `Button` component** ([#1882](https://github.com/channel-io/bezier-react/pull/1882)) by @sungik-choi

  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - `ButtonSize` and `ButtonColorVariant` enums have been updated to use kebab case.

- **Breaking Change: No longer supports `smoothCorners` mixin. Use `AlphaSmoothCornersBox` components instead.** ([#1892](https://github.com/channel-io/bezier-react/pull/1892)) by @sungik-choi

  ```tsx
  // Before
  const Box = styled.div`
    ${smoothCorners({
      borderRadius: 10,
      shadow: '0 5px 15px 0 var(--shdw-large)',
      shadowBlur: 15,
      backgroundColor: 'var(--bgtxt-absolute-white-dark)',
      hasBackgroundImage: true,
    })}
  `

  <Box>...</Box>

  // After
  <AlphaSmoothCornersBox
    borderRadius={10}
    shadow={{
      offsetX: 0,
      offsetY: 5,
      blurRadius: 15,
      spreadRadius: 0,
      color: 'shdw-large',
    }}
    backgroundColor="bgtxt-absolute-white-dark"
    backgroundImage="..."
  >...</AlphaSmoothCornersBox>
  ```

- **Breaking Changes: `Toast`-related modules** ([#1950](https://github.com/channel-io/bezier-react/pull/1950)) by @sungik-choi

  - No longer support `actionContent` and `onClick` properties in `ToastOptions`.
  - Value type of `zIndex` property in `ToastOptions` is changed from `number` to `ZIndex` token.
  - No longer export `ToastIconColor` enum.

- **Breaking Changes: Property updates in `TextArea` component** ([#1914](https://github.com/channel-io/bezier-react/pull/1914)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `wrapperStyle`, `wrapperClassName` and `wrapperInterpolation` property. It was never properly implemented before, and the Wrapper element inside was also removed.

- **Breaking Changes: Deprecate support for `styled-components` related modules** ([#1962](https://github.com/channel-io/bezier-react/pull/1962)) by @sungik-choi

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

      @supports not (gap: ${spacing}px) {
        margin-top: ${-spacing}px;
        margin-left: ${-spacing}px;

        > * {
          margin-top: ${spacing}px;
          margin-left: ${spacing}px;
        }
      }
    `
  }

  function touchableHover(
    interpolation: InjectedInterpolation
  ): InjectedInterpolation {
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

- **Breaking Changes: `AlphaStack` component has been changed to a `Stack` component, and `Stack` component has been changed to `LegacyStack` component.** ([#1837](https://github.com/channel-io/bezier-react/pull/1837)) by @sungik-choi

  Changes to remove the dependency of `Stack` and `StackItem` to allow stack layouts to be configured without additional DOM elements. And improved the existing `AlphaStack` to support more Flex layout related properties like reverse, wrap, and more align options, etc. See StackProps for more information.

  We also added new `HStack` and `VStack` components, which are shorthand components that fix the direction prop of `AlphaStack`. As mentioned above, the existing components become `LegacyHStack`, `LegacyVStack`.

  The layout implemented by `StackItem` can be partially replaced by the Layout component's `grow`, `shrink` common properties and margin common properties. Note that the `align`, `justify` (align-self, justify-self in CSS flex) properties provided by `StackItem` are not provided by the Layout component.

  ```jsx
  /* AS-IS */
  return (
    <Stack
      direction="horizontal"
      spacing={8}
      style={{ width: 300, height: 50 }}
    >
      <StackItem
        grow
        shrink
        weight={1}
      />
      <StackItem
        weight={0}
        size={10}
        marginBefore={20}
      >
        <Stack direction="vertical" />
      </StackItem>
    </Stack>
  )

  /* TO-BE */
  return (
    <Stack
      direction="horizontal"
      spacing={8}
      width={300}
      height={50}
    >
      <Box
        grow={1}
        shrink={1}
      />
      <Stack
        direction="vertical"
        shrink={0}
        width={10}
        ml={12}
      />
    </Stack>
  )
  ```

  The changes also apply to other components that use `Stack` internally, and there are a few breaking changes.

  - `RadioGroup`, `ButtonGroup`, `FormGroup` no longer support `as` prop.

- **Breaking Change: Removal of `ListMenuTitle` Component** ([#1900](https://github.com/channel-io/bezier-react/pull/1900)) by @yangwooseong

  - It was no longer being managed or utilized by our designers.
  - If you are currently using `ListMenuTitle` in your application, please replace it with the `SectionLabel` component for similar functionality.

### Minor Changes

- Implement multi theme feature based on data attributes ([#1756](https://github.com/channel-io/bezier-react/pull/1756)) by @sungik-choi

- Move `@channel.io/bezier-tokens` from dev depdency to dependency ([#1985](https://github.com/channel-io/bezier-react/pull/1985)) by @sungik-choi

- Add the `TooltipPrimitive` component, which is the same as the [`Tooltip` component in radix-ui](https://www.radix-ui.com/primitives/docs/components/tooltip). You can use it by importing it from the `/alpha` path. ([#2049](https://github.com/channel-io/bezier-react/pull/2049)) by @sungik-choi

  ```tsx
  import {
    TooltipPrimitive,
    TooltipPrimitiveArrow,
    TooltipPrimitiveContent,
    TooltipPrimitivePortal,
    TooltipPrimitiveProvider,
    TooltipPrimitiveTrigger,
  } from '@channel.io/bezier-react/alpha'
  ```

- When you pass a value of number type to the dimension-related properties of margin prop and layout prop, they implicitly add px units as a suffix. See: <https://react.dev/reference/react-dom/components/common#common> ([#1823](https://github.com/channel-io/bezier-react/pull/1823)) by @sungik-choi

- Add `Box` component. `Box` component is responsible for the primitive layout and provides easy access to the design tokens in the design system ([#1785](https://github.com/channel-io/bezier-react/pull/1785)) by @sungik-choi

  ```tsx
  <Box
    width="100px"
    height="100px"
    p="6px"
    m="6px"
    bgColor="bg-black-light"
  />
  ```

- Fixes style inheritance issues by explicitly giving CSS custom properties an initial value ([#1846](https://github.com/channel-io/bezier-react/pull/1846)) by @sungik-choi

- Apply bezier-tokens to bezier-react's style sheet and fix some invalid css selector ([#1495](https://github.com/channel-io/bezier-react/pull/1495)) by @sungik-choi

- Add the `DialogPrimitive` component, which is the same as the [`Dialog` component in radix-ui](https://www.radix-ui.com/primitives/docs/components/dialog). You can use it by importing it from the `/alpha` path. ([#2049](https://github.com/channel-io/bezier-react/pull/2049)) by @sungik-choi

  ```tsx
  import {
    DialogPrimitive,
    DialogPrimitiveClose,
    DialogPrimitiveContent,
    DialogPrimitiveDescription,
    DialogPrimitiveOverlay,
    DialogPrimitivePortal,
    DialogPrimitiveTitle,
    DialogPrimitiveTrigger,
  } from '@channel.io/bezier-react/alpha'
  ```

- `ButtonGroup` now supports HTML attributes ([#1890](https://github.com/channel-io/bezier-react/pull/1890)) by @sungik-choi

- `Banner` will now render content even if the `content` prop is not a string. The same applies to link-related props. ([#1972](https://github.com/channel-io/bezier-react/pull/1972)) by @sungik-choi

- Rename `AlphaAppProvider` to `AppProvider` ([#1834](https://github.com/channel-io/bezier-react/pull/1834)) by @sungik-choi

- Rename the `style.css` file to `styles.css` ([#1791](https://github.com/channel-io/bezier-react/pull/1791)) by @sungik-choi

- Add `align` prop to `Text` component. This prop is used to set horizontal alignment of text ([#1820](https://github.com/channel-io/bezier-react/pull/1820)) by @sungik-choi

  ```tsx
  <Text align="left" />
  <Text align="center" />
  <Text align="right" />
  ```

- Remove `borderStyle` prop from Layout props ([#1848](https://github.com/channel-io/bezier-react/pull/1848)) by @sungik-choi

- Add `useRootElement` hook. It is only available to `WindowProvider` children, and provides easy access to the root element of window context value. ([#1981](https://github.com/channel-io/bezier-react/pull/1981)) by @sungik-choi

  ```tsx
  const { window, document, rootElement } = useWindow()
  // Same as useWindow().rootElement
  const rootElement = useRootElement()
  ```

### Patch Changes

- Fixes an issue with color inheritance across components. ([#2009](https://github.com/channel-io/bezier-react/pull/2009)) by @sungik-choi

- Add missing default margin styles of `LegacyStackItem` ([#2004](https://github.com/channel-io/bezier-react/pull/2004)) by @sungik-choi

- Fixes issue with `ModalBody`, `ModalFooter` not applying styling correctly when wrapped in other elements. ([#2017](https://github.com/channel-io/bezier-react/pull/2017)) by @sungik-choi

- Add `overflow: hidden` to `ListItem` component ([#2013](https://github.com/channel-io/bezier-react/pull/2013)) by @yangwooseong

- Fix invalid `aria-modal` value in Modal Content. ([#2052](https://github.com/channel-io/bezier-react/pull/2052)) by @sungik-choi

- Fix `TabAction` typography style for size M. ([#2035](https://github.com/channel-io/bezier-react/pull/2035)) by @sungik-choi

- Minify the CSS output ([#1791](https://github.com/channel-io/bezier-react/pull/1791)) by @sungik-choi

- Update background color of `TextField`'s secondary variant. ([#2016](https://github.com/channel-io/bezier-react/pull/2016)) by @sungik-choi

- Mute the error of `smoothCornerScript` when called twice. ([#2010](https://github.com/channel-io/bezier-react/pull/2010)) by @chaejunlee

- Now exports the `tokens` object from `@channel.io/bezier-tokens`. ([#1992](https://github.com/channel-io/bezier-react/pull/1992)) by @sungik-choi

- Adds icon and typo size for avatar size `"72"`, which were missing from `AvatarGroup`. ([#2071](https://github.com/channel-io/bezier-react/pull/2071)) by @sungik-choi

- Add missing `overflow: hidden` style to item wrapper of `KeyValueItem` component. ([#2036](https://github.com/channel-io/bezier-react/pull/2036)) by @sungik-choi

- Fixes `Overlay` not closing in other windows. ([#2037](https://github.com/channel-io/bezier-react/pull/2037)) by @sungik-choi

- Fixes a bug where onHide is called when clicking inside the overlay, causing the overlay to close. ([#1977](https://github.com/channel-io/bezier-react/pull/1977)) by @yangwooseong

- Fix invalid style migrations of `Tabs` component. ([#2014](https://github.com/channel-io/bezier-react/pull/2014)) by @sungik-choi

- Add missing spreading props to `ThemeProvider` and related components. ([#1986](https://github.com/channel-io/bezier-react/pull/1986)) by @sungik-choi

- Fix `ListItem`'s left icon color specificity issue. ([#2018](https://github.com/channel-io/bezier-react/pull/2018)) by @sungik-choi

- Fix `Badge` component style issue ([#2068](https://github.com/channel-io/bezier-react/pull/2068)) by @yangwooseong

- Fixes an issue where multi line truncated in `Text` was not being applied. ([#1994](https://github.com/channel-io/bezier-react/pull/1994)) by @sungik-choi

- Updated dependencies
  - @channel.io/bezier-tokens@0.1.0

## 2.0.0-alpha.21

### Major Changes

- **Breaking changes: Remove TagBadge-related types** ([#2114](https://github.com/channel-io/bezier-react/pull/2114)) by @sungik-choi

  - Remove `color` prop of `TagProps` and `TagBadgeBgColorPreset`.
  - Remove `TagBadgeSize`. Please change it to `TagSize` and `BadgeSize`.
  - Remove `TagBadgeVariant`. Please change it to `TagVariant` and `BadgeVariant`.

- **Breaking Changes: Remove the default offset(`GNB_WIDTH`) in `Toast`** ([#2117](https://github.com/channel-io/bezier-react/pull/2117)) by @sungik-choi

  Remove the style because it was dependent on a specific application. Use `{ left: 68 }` instead.

## 2.0.0-alpha.20

### Major Changes

- **Breaking Changes: `AlphaSmoothCornersBox` component is now `SmoothCornersBox` component.** ([#2079](https://github.com/channel-io/bezier-react/pull/2079)) by @sungik-choi

### Minor Changes

- Add the `TooltipPrimitive` component, which is the same as the [`Tooltip` component in radix-ui](https://www.radix-ui.com/primitives/docs/components/tooltip). You can use it by importing it from the `/alpha` path. ([#2049](https://github.com/channel-io/bezier-react/pull/2049)) by @sungik-choi

  ```tsx
  import {
    TooltipPrimitive,
    TooltipPrimitiveArrow,
    TooltipPrimitiveContent,
    TooltipPrimitivePortal,
    TooltipPrimitiveProvider,
    TooltipPrimitiveTrigger,
  } from '@channel.io/bezier-react/alpha'
  ```

- Add the `DialogPrimitive` component, which is the same as the [`Dialog` component in radix-ui](https://www.radix-ui.com/primitives/docs/components/dialog). You can use it by importing it from the `/alpha` path. ([#2049](https://github.com/channel-io/bezier-react/pull/2049)) by @sungik-choi

  ```tsx
  import {
    DialogPrimitive,
    DialogPrimitiveClose,
    DialogPrimitiveContent,
    DialogPrimitiveDescription,
    DialogPrimitiveOverlay,
    DialogPrimitivePortal,
    DialogPrimitiveTitle,
    DialogPrimitiveTrigger,
  } from '@channel.io/bezier-react/alpha'
  ```

## 2.0.0-alpha.19

### Patch Changes

- Adds icon and typo size for avatar size `"72"`, which were missing from `AvatarGroup`. ([#2071](https://github.com/channel-io/bezier-react/pull/2071)) by @sungik-choi

## 2.0.0-alpha.18

### Patch Changes

- Fix `Badge` component style issue ([#2068](https://github.com/channel-io/bezier-react/pull/2068)) by @yangwooseong

## 2.0.0-alpha.17

### Major Changes

- **Breaking Changes: The enum type that the component receives as props is changed to a string (or number) literal type** ([#2059](https://github.com/channel-io/bezier-react/pull/2059)) by @yangwooseong

  The properties that change are:

  - `AvatarGroupEllipsisType`
  - `IconSize`
  - `LegacyTooltipPosition`
  - `ModalTitleSize`
  - `OverlayPosition`
  - `ProgressBarSize`, `ProgressBarVariant`
  - `SpinnerSize`
  - `SwitchSize`
  - `TagBadgeSize`, `TagBadgeVariant`
  - `TextAreaHeight`
  - `TextFieldSize`, `TextFieldVariant`
  - `ToastPlacement`, `ToastAppearance`, `ToastPreset`
  - `TooltipPosition`

  Also, `SpinnerThickness` props of `Spinner` is not supported any more.

  When changed to string literal type, it is changed to the kebab-cased value of enum. e.g. `TooltipPosition.TopCenter` -> `top-center`. Among the above enums, `TextAreaHeight` is converted to number literal type. e.g. `TextAreaHeight.Row16` -> `16`, and `IconSize.normal` is converted to `m` for consistency

- **Breaking Changes: The enum type that the component receives as props is changed to a string literal type** ([#2059](https://github.com/channel-io/bezier-react/pull/2059)) by @yangwooseong

  The properties that change are:

  - `AvatarSize`
  - `BannerVariant`
  - `ButtonColorVariant`, `ButtonStyleVariant`, `ButtonSize`
  - `EmojiSize`
  - `SegmentedControlSize`
  - `TabSize`
  - `ListItemVariant`, `ListItemSize`
  - `StatusType`, `StatusSize`

  When changed to string literal type, it is changed to the kebab-cased value of enum. e.g. `ButtonStyleVariant.MonoChromeDark` -> `monochrome-dark`, `StatusType.OnlineCrescent` -> `online-crescent`

### Patch Changes

- Fix invalid `aria-modal` value in Modal Content. ([#2052](https://github.com/channel-io/bezier-react/pull/2052)) by @sungik-choi

## 2.0.0-alpha.16

### Patch Changes

- Fix `TabAction` typography style for size M. ([#2035](https://github.com/channel-io/bezier-react/pull/2035)) by @sungik-choi

- Add missing `overflow: hidden` style to item wrapper of `KeyValueItem` component. ([#2036](https://github.com/channel-io/bezier-react/pull/2036)) by @sungik-choi

- Fixes `Overlay` not closing in other windows. ([#2037](https://github.com/channel-io/bezier-react/pull/2037)) by @sungik-choi

## 2.0.0-alpha.15

### Patch Changes

- Fix `ListItem`'s left icon color specificity issue. ([#2018](https://github.com/channel-io/bezier-react/pull/2018)) by @sungik-choi

## 2.0.0-alpha.14

### Patch Changes

- Fixes issue with `ModalBody`, `ModalFooter` not applying styling correctly when wrapped in other elements. ([#2017](https://github.com/channel-io/bezier-react/pull/2017)) by @sungik-choi

- Add `overflow: hidden` to `ListItem` component ([#2013](https://github.com/channel-io/bezier-react/pull/2013)) by @yangwooseong

- Update background color of `TextField`'s secondary variant. ([#2016](https://github.com/channel-io/bezier-react/pull/2016)) by @sungik-choi

- Mute the error of `smoothCornerScript` when called twice. ([#2010](https://github.com/channel-io/bezier-react/pull/2010)) by @chaejunlee

- Fix invalid style migrations of `Tabs` component. ([#2014](https://github.com/channel-io/bezier-react/pull/2014)) by @sungik-choi

## 2.0.0-alpha.13

### Patch Changes

- Fixes an issue with color inheritance across components. ([#2009](https://github.com/channel-io/bezier-react/pull/2009)) by @sungik-choi

- Add missing default margin styles of `LegacyStackItem` ([#2004](https://github.com/channel-io/bezier-react/pull/2004)) by @sungik-choi

## 2.0.0-alpha.12

### Patch Changes

- Now exports the `tokens` object from `@channel.io/bezier-tokens`. ([#1992](https://github.com/channel-io/bezier-react/pull/1992)) by @sungik-choi

- Fixes an issue where multi line truncated in `Text` was not being applied. ([#1994](https://github.com/channel-io/bezier-react/pull/1994)) by @sungik-choi

- Updated dependencies
  - @channel.io/bezier-tokens@0.1.0-alpha.5

## 2.0.0-alpha.11

### Minor Changes

- Move `@channel.io/bezier-tokens` from dev depdency to dependency ([#1985](https://github.com/channel-io/bezier-react/pull/1985)) by @sungik-choi

### Patch Changes

- Add missing spreading props to `ThemeProvider` and related components. ([#1986](https://github.com/channel-io/bezier-react/pull/1986)) by @sungik-choi

## 2.0.0-alpha.10

### Major Changes

- **Breaking Changes: Remove `TooltipProvider` and Property updates in `Tooltip` component** ([#1974](https://github.com/channel-io/bezier-react/pull/1974)) by @sungik-choi

  - No longer support `TooltipProvider` and `TooltipProviderProps`. `Tooltip` component was implemented via radix-ui's Tooltip, which required the use of a `TooltipProvider`, which caused all subcomponents to be re-rendered and caused a performance hit. We decided that the ability to share hover delay time between `Tooltip` components via `TooltipProvider` was not a feature we needed, even with the performance penalty. Also, by providing `TooltipProvider` built-in to `AppProvider`, we were unnecessarily importing modules from our library usage that didn't require `Tooltip`.
  - `Tooltip` component now contains a `TooltipProvider` inside it.

  **Minor Changes:**

  - Change the default value of `delayShow` prop from `300` to `0`.

- **Breaking changes: Remove `testId` and related properties** ([#1971](https://github.com/channel-io/bezier-react/pull/1971)) by @sungik-choi

  No longer supports `testId` and related properties(e.g. `wrapperTestId`). `testId` is a property used internally by the library for testing with testing-library (`getByTestId`). We don't see a need to expose this as a public API, so we remove it.

  If you were using it, please replace it with the `data-testid` property. See <https://testing-library.com/docs/queries/bytestid/>.

- **Breaking Changes: Deprecated modules for internal use** ([#1963](https://github.com/channel-io/bezier-react/pull/1963)) by @sungik-choi

  - No longer provides `useEventHandler` and `useMergeRefs` hook.
  - No longer provides `useId` hook. Use `useId` hook of `react` instead.
  - No longer provides `getRootElement` hook. Use `useWindow` hook instead.
  - No longer provides `StyleUtils` and `StringUtils` utils.

- **Breaking Changes: Deprecate support for `styled-components` related modules** ([#1962](https://github.com/channel-io/bezier-react/pull/1962)) by @sungik-choi

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

      @supports not (gap: ${spacing}px) {
        margin-top: ${-spacing}px;
        margin-left: ${-spacing}px;

        > * {
          margin-top: ${spacing}px;
          margin-left: ${spacing}px;
        }
      }
    `
  }

  function touchableHover(
    interpolation: InjectedInterpolation
  ): InjectedInterpolation {
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

### Minor Changes

- `Banner` will now render content even if the `content` prop is not a string. The same applies to link-related props. ([#1972](https://github.com/channel-io/bezier-react/pull/1972)) by @sungik-choi

- Add `useRootElement` hook. It is only available to `WindowProvider` children, and provides easy access to the root element of window context value. ([#1981](https://github.com/channel-io/bezier-react/pull/1981)) by @sungik-choi

  ```tsx
  const { window, document, rootElement } = useWindow()
  // Same as useWindow().rootElement
  const rootElement = useRootElement()
  ```

### Patch Changes

- Fixes a bug where onHide is called when clicking inside the overlay, causing the overlay to close. ([#1977](https://github.com/channel-io/bezier-react/pull/1977)) by @yangwooseong

## 2.0.0-alpha.9

### Major Changes

- **Breaking Changes: Property updates in `Overlay` component** ([#1949](https://github.com/channel-io/bezier-react/pull/1949)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `containerInterpolation` property. Replace any usage of `containerInterpolation` property with appropriate `containerStyle` or `containerClassName` implementations.
  - No longer support `wrapperTestId` property.

- **Breaking Changes: Property updates in `FormControl`, `Select`, and `TextField` component** ([#1948](https://github.com/channel-io/bezier-react/pull/1948)) by @yangwooseong

  - `FormControl` component no longer supports `leftLabelWrapperHeight` props.
  - `FormControl` component now supports `size` props, which is passed as context to the child component such as `TextField` and `Select` and specified as the size property.
  - The size property of `Select` and `TextField` component changes from enum to string literal union type. Also, `SelectSize` and `TextFieldSize` enum are deprecated.

- **Breaking Changes: Property updates in `ProgressBar` component** ([#1947](https://github.com/channel-io/bezier-react/pull/1947)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `activeStyle`, `activeClassName` and `activeInterpolation` property.
  - No longer support `activeTestId` property.

- **Breaking Changes: Property updates in `Tabs`-related components** ([#1960](https://github.com/channel-io/bezier-react/pull/1960)) by @sungik-choi

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: `Toast`-related modules** ([#1950](https://github.com/channel-io/bezier-react/pull/1950)) by @sungik-choi

  - No longer support `actionContent` and `onClick` properties in `ToastOptions`.
  - Value type of `zIndex` property in `ToastOptions` is changed from `number` to `ZIndex` token.
  - No longer export `ToastIconColor` enum.

## 2.0.0-alpha.8

### Major Changes

- **Breaking Changes: Property updates in `LegacyTooltip` component** ([#1945](https://github.com/channel-io/bezier-react/pull/1945)) by @sungik-choi

  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `contentInterpolation` property. Replace any usage of `contentInterpolation` property with appropriate `contentStyle` or `contentClassName` implementations.
  - No longer support `contentWrapperInterpolation` property. Replace any usage of `contentWrapperInterpolation` property with appropriate `contentWrapperStyle` or `contentWrapperClassName` implementations.

- **Breaking Changes: Reorganizing `KeyValueListItem` component** ([#1941](https://github.com/channel-io/bezier-react/pull/1941)) by @sungik-choi

  - **Renamed to `KeyValueItem`.**
  - - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `valueWrapperStyle`, `valueWrapperClassName`, `valueWrapperInterpolation`, `keyWrapperStyle`, `keyWrapperClassName` and `keyWrapperInterpolation`. This decision was made to reduce excessive flexibility in the interface.
  - No longer support `AdditionalColorProps` and `show` property of ItemAction.
  - The icon inside ItemAction is now implemented through `Button` component.
  - The Value Container will now always have 100% of the parent's width.

- **Breaking Changes: Property updates in `LegacyStack` components** ([#1944](https://github.com/channel-io/bezier-react/pull/1944)) by @sungik-choi

  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer export `AxisAlignment` type.

- **Breaking Change: Removal of `LegacyRadio` Component** ([#1943](https://github.com/channel-io/bezier-react/pull/1943)) by @sungik-choi

  - `LegacyRadio` component has been removed from the library. Please use `RadioGroup` and `Radio` component instead.
  - Now if `Radio` has no label, its size is reduced by an indicator.

## 2.0.0-alpha.7

### Major Changes

- **Breaking Changes: Property updates in `ListItem` component** ([#1925](https://github.com/channel-io/bezier-react/pull/1925)) by @sungik-choi

  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `iconStyle`, `iconClassName`, `iconInterpolation`, `contentStyle`, `contentClassName` and `contentInterpolation`. This decision was made to reduce excessive flexibility in the interface.
  - No longer support `leftIcon` property. Removed for consistency with other component interfaces. Replace it to `leftContent`.
  - No longer support `name` property. The second argument (name) of `onClick` is also removed. If you need an identifier, combine functions outside of the component.
  - No longer support `hide`, `nested`, `optionKey` and `disableIconActive` property. Removed because it is a legacy property. Replace `hide` property with conditional rendering.
  - The size changes according to the `ListItemSize`. This is a change to unify the design. Please change it like below.
    - `ListItemSize.S` -> `ListItemSize.XS`
    - `ListItemSize.M` -> `ListItemSize.S`
    - `ListItemSize.L` -> `ListItemSize.M`
    - `ListItemSize.XL` -> `ListItemSize.L`

  **Minor Changes:**

  - Fix incorrect text size for `XL`(now `L`) size.

- **Breaking Changes: Property updates in `NavGroup` and `NavItem` component** ([#1931](https://github.com/channel-io/bezier-react/pull/1931)) by @sungik-choi

  `leftIcon` renamed to `leftContent`. Changed to improve consistency of interface property names across libraries.

- **Breaking Changes: Property updates in `FormControl` component** ([#1935](https://github.com/channel-io/bezier-react/pull/1935)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Reorganizing `SectionLabel` component** ([#1936](https://github.com/channel-io/bezier-react/pull/1936)) by @sungik-choi

  `SectionLabel` is a complex component that can be used both in the form of an accordion and as a simple heading. To better meet the needs of both, we've changed the internal implementation of the component.

  We've also made changes to make styling overrides as predictable as they are for other components. The style override property, which was unnecessarily open, is now removed.

  - Remove the internal div wrapper. `style`, `className` properties are now injected into the component instead of the old `wrapperStyle`, `wrapperClassName`.
  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support additional style properties of `wrapper`, `contentWrapper`, `leftWrapper` and `rightWrapper`.
  - No longer support `divider` property. Replace it by adding `Divider` component to the component's before.
  - The side content property is changed. It is no longer possible to override `iconColor`.
  - When injecting `onClick` handler, the root element now behaves as a `button` element. This change is to better support keyboard focus control.

- **Breaking Changes: Reorganizing `OutlineItem` component** ([#1930](https://github.com/channel-io/bezier-react/pull/1930)) by @sungik-choi

  `OutlineItem` component was originally designed as a component to draw a tree-like view, _but it was not used as intended in production_. We simplified the component's responsibilities by removing unused properties while retaining the component's ability to apply indentation to subcomponents.

  - No longer support `paddingLeft` property. **By default, 6px of left padding has been added.** If you need to make changes, override the style.
  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `iconStyle`, `iconClassName`, `iconInterpolation`, `contentStyle`, `contentClassName` and `contentInterpolation`. This decision was made to reduce excessive flexibility in the interface.
  - No longer support `leftIcon` property. Removed for consistency with other component interfaces. Replace it to `leftContent`.
  - No longer support `leftIconColor` and `leftIconTestId` property.
  - No longer support `name` property. The second argument (name) of `onClick` is also removed. If you need an identifier, combine functions outside of the component.
  - No longer support `hide`, `optionKey` and `disableIconActive` property. Replace `hide` property with conditional rendering.
  - No longer support `onOpen`, `onClickArrow`, `selectedOutlineItemIndex` and `onChangeOption` property.

## 2.0.0-alpha.6

### Major Changes

- **Breaking Changes: Property updates in `CheckableAvatar` component** ([#1921](https://github.com/channel-io/bezier-react/pull/1921)) by @sungik-choi

  No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `FormLabel`, `FormHelperText`, and `FormErrorMessage` component** ([#1893](https://github.com/channel-io/bezier-react/pull/1893)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `Select` component** ([#1913](https://github.com/channel-io/bezier-react/pull/1913)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `dropdownInterpolation` property. Replace any usage of `dropdownInterpolation` property with appropriate `dropdownStyle` or `dropdownClassName` implementations.
  - The type of `zIndex` property is changed to a z-index token. (e.g. `"modal"`)

- **Breaking Changes: Property updates in `Radio` component** ([#1923](https://github.com/channel-io/bezier-react/pull/1923)) by @sungik-choi

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `NavItem` and `NavGroup` component** ([#1905](https://github.com/channel-io/bezier-react/pull/1905)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `TextField` component** ([#1904](https://github.com/channel-io/bezier-react/pull/1904)) by @sungik-choi

  - No longer support `interpolation`-related properties. Replace any usage of `interpolation` -related properties with appropriate `***style` or `***className` implementations.
  - No longer support `inputStyle` and `inputClassName` properties. Replace any usage of `inputStyle` and `inputClassName` with appropriate `style` or `className` implementations.
  - Change the value of `TextFieldVariant` enum value to string.

- **Breaking Changes: Property updates in `Checkbox` component** ([#1918](https://github.com/channel-io/bezier-react/pull/1918)) by @sungik-choi

  No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `TextArea` component** ([#1914](https://github.com/channel-io/bezier-react/pull/1914)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - No longer support `wrapperStyle`, `wrapperClassName` and `wrapperInterpolation` property. It was never properly implemented before, and the Wrapper element inside was also removed.

## 2.0.0-alpha.5

### Major Changes

- **Breaking Changes: Property updates in `Avatar` component** ([#1871](https://github.com/channel-io/bezier-react/pull/1871)) by @yangwooseong

  No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `SegmentedControl` component** ([#1866](https://github.com/channel-io/bezier-react/pull/1866)) by @sungik-choi

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `Tag` and `Badge` component** ([#1872](https://github.com/channel-io/bezier-react/pull/1872)) by @yangwooseong

  No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: `AlphaCenter` component is now `Center` component. Property updates in `Center` component** ([#1854](https://github.com/channel-io/bezier-react/pull/1854)) by @sungik-choi

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - Now supports margin props, layout props and `display` prop.

- **Breaking Changes: Property updates in `Emoji` component** ([#1881](https://github.com/channel-io/bezier-react/pull/1881)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- Add new margin properties to `Icon` component ([#1863](https://github.com/channel-io/bezier-react/pull/1863)) by @yangwooseong

  - `margin`
  - `marginHorizontal`
  - `marginVertical`

- **Breaking Changes: Property updates in `Modal`-related components** ([#1903](https://github.com/channel-io/bezier-react/pull/1903)) by @sungik-choi

  - No longer supports `as` and `interpolation` props.
  - The type of `zIndex` property is changed to a z-index token. (e.g. `"modal"`)

- **Breaking Changes: Property updates in `Banner` component** ([#1891](https://github.com/channel-io/bezier-react/pull/1891)) by @sungik-choi

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

  **Other changes in `Banner` component**

  - now supports HTML attributes.
  - now supports style props.

- **Breaking Changes: Property updates in `Switch` component** ([#1885](https://github.com/channel-io/bezier-react/pull/1885)) by @yangwooseong

  No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.

- **Breaking Changes: Property updates in `Slider` component** ([#1883](https://github.com/channel-io/bezier-react/pull/1883)) by @yangwooseong

  - No longer support `as` and `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - `dir` type is narrowed from `string | undefined` to `ltr | rtl | undefined`

- **Breaking Changes: Property updates in `Button` component** ([#1882](https://github.com/channel-io/bezier-react/pull/1882)) by @sungik-choi

  - No longer support `interpolation` property. Replace any usage of `interpolation` property with appropriate `style` or `className` implementations.
  - `ButtonSize` and `ButtonColorVariant` enums have been updated to use kebab case.

- **Breaking Change: No longer supports `smoothCorners` mixin. Use `AlphaSmoothCornersBox` components instead.** ([#1892](https://github.com/channel-io/bezier-react/pull/1892)) by @sungik-choi

  ```tsx
  // Before
  const Box = styled.div`
    ${smoothCorners({
      borderRadius: 10,
      shadow: '0 5px 15px 0 var(--shdw-large)',
      shadowBlur: 15,
      backgroundColor: 'var(--bgtxt-absolute-white-dark)',
      hasBackgroundImage: true,
    })}
  `

  <Box>...</Box>

  // After
  <AlphaSmoothCornersBox
    borderRadius={10}
    shadow={{
      offsetX: 0,
      offsetY: 5,
      blurRadius: 15,
      spreadRadius: 0,
      color: 'shdw-large',
    }}
    backgroundColor="bgtxt-absolute-white-dark"
    backgroundImage="..."
  >...</AlphaSmoothCornersBox>
  ```

- **Breaking Change: Removal of `ListMenuTitle` Component** ([#1900](https://github.com/channel-io/bezier-react/pull/1900)) by @yangwooseong

  - It was no longer being managed or utilized by our designers.
  - If you are currently using `ListMenuTitle` in your application, please replace it with the `SectionLabel` component for similar functionality.

### Minor Changes

- `ButtonGroup` now supports HTML attributes ([#1890](https://github.com/channel-io/bezier-react/pull/1890)) by @sungik-choi

## 2.0.0-alpha.4

### Major Changes

- `typo` prop of `Text` component is changed to a string literal. Please migrate it like below. With the removal of the styled-component from bezier-react, CSS interpolation is no longer available. ([#1820](https://github.com/channel-io/bezier-react/pull/1820)) by @sungik-choi

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

- `AlphaStack` component has been changed to a `Stack` component, and `Stack` component has been changed to `LegacyStack` component. Changes to remove the dependency of `Stack` and `StackItem` to allow stack layouts to be configured without additional DOM elements. And improved the existing `AlphaStack` to support more Flex layout related properties like reverse, wrap, and more align options, etc. See StackProps for more information. ([#1837](https://github.com/channel-io/bezier-react/pull/1837)) by @sungik-choi

  We also added new `HStack` and `VStack` components, which are shorthand components that fix the direction prop of `AlphaStack`. As mentioned above, the existing components become `LegacyHStack`, `LegacyVStack`.

  The layout implemented by `StackItem` can be partially replaced by the Layout component's `grow`, `shrink` common properties and margin common properties. Note that the `align`, `justify` (align-self, justify-self in CSS flex) properties provided by `StackItem` are not provided by the Layout component.

  ```jsx
  /* AS-IS */
  return (
    <Stack
      direction="horizontal"
      spacing={8}
      style={{ width: 300, height: 50 }}
    >
      <StackItem
        grow
        shrink
        weight={1}
      />
      <StackItem
        weight={0}
        size={10}
        marginBefore={20}
      >
        <Stack direction="vertical" />
      </StackItem>
    </Stack>
  )

  /* TO-BE */
  return (
    <Stack
      direction="horizontal"
      spacing={8}
      width={300}
      height={50}
    >
      <Box
        grow={1}
        shrink={1}
      />
      <Stack
        direction="vertical"
        shrink={0}
        width={10}
        ml={12}
      />
    </Stack>
  )
  ```

  The changes also apply to other components that use `Stack` internally, and there are a few changes.

  - `RadioGroup` component no longer supports `as` prop.
  - `ButtonGroup` component now extends the interfaces of new `Stack`. It no longer supports `as` prop.
  - `FormGroup` component now extends the interfaces of new `Stack`. It no longer supports `as` prop.

### Minor Changes

- Fixes style inheritance issues by explicitly giving CSS custom properties an initial value. ([#1846](https://github.com/channel-io/bezier-react/pull/1846)) by @sungik-choi

- Add `align` prop to `Text` component. This prop is used to set horizontal alignment of text. ([#1820](https://github.com/channel-io/bezier-react/pull/1820)) by @sungik-choi

  ```tsx
  <Text align="left" />
  <Text align="center" />
  <Text align="right" />
  ```

- Remove `borderStyle` prop from Layout props. ([#1848](https://github.com/channel-io/bezier-react/pull/1848)) by @sungik-choi

## 2.0.0-alpha.3

### Major Changes

- Removed `LegacySegmentedControl` component. Previously deprecated in next-v1.204. This component was removed for reasons of web accessibility, keyboard navigation, and design modernization. Use `SegmentedControl` instead. ([#1786](https://github.com/channel-io/bezier-react/pull/1786)) by @sungik-choi

### Minor Changes

- When you pass a value of number type to the dimension-related properties of margin prop and layout prop, they implicitly add px units as a suffix. See: <https://react.dev/reference/react-dom/components/common#common> ([#1823](https://github.com/channel-io/bezier-react/pull/1823)) by @sungik-choi

- Add `Box` component. `Box` component is responsible for the primitive layout and provides easy access to the design tokens in the design system. ([#1785](https://github.com/channel-io/bezier-react/pull/1785)) by @sungik-choi

  ```tsx
  <Box
    width="100px"
    height="100px"
    p="6px"
    m="6px"
    bgColor="bg-black-light"
  />
  ```

- Rename `AlphaAppProvider` to `AppProvider`. ([#1834](https://github.com/channel-io/bezier-react/pull/1834)) by @sungik-choi

- Rename the `style.css` file to `styles.css`. ([#1791](https://github.com/channel-io/bezier-react/pull/1791)) by @sungik-choi

### Patch Changes

- Minify the CSS output. ([#1791](https://github.com/channel-io/bezier-react/pull/1791)) by @sungik-choi

## 2.0.0-alpha.2

### Minor Changes

- Implement multi theme feature based on data attributes. ([#1756](https://github.com/channel-io/bezier-react/pull/1756)) by @sungik-choi

## 2.0.0-alpha.1

### Minor Changes

- Apply bezier-tokens to bezier-react's style sheet and fix some invalid css selector. ([#1495](https://github.com/channel-io/bezier-react/pull/1495)) by @sungik-choi

## 2.0.0-alpha.0

### Major Changes

- Export the css style sheet for the new design system. ([#1492](https://github.com/channel-io/bezier-react/pull/1492)) by @sungik-choi

## 1.20.0

### Minor Changes

- Add `offset` prop for positioning the toast container to `ToastProvider` ([#1915](https://github.com/channel-io/bezier-react/pull/1915)) by @leejiwoo2002

  - Adjust the default position of the toast container to `GNB_WIDTH` on the left and `0` on the right and bottom
  - Inject the `GNB_WIDTH` value as default into the offset object of `ToastProvider` to ensure the same behavior as before

## 1.19.0

### Minor Changes

- Allow external window for bezier ([#1764](https://github.com/channel-io/bezier-react/pull/1764)) by @Tanney-102

  - You can inject window object with WindowProvider.

    - example

      ```ts
      <WindowProvider
        window={givenExternalWindow ?? window}
        document={givenExternalDocument ?? window.document}
      >
        // ...
      </WindowProvider>;

      // use window in context with useWindow
      const { window, document } = useWindow();
      ```

  - BezierProvider includes WindowProvider so that inject external window with BezierProvider.
  - WindowProvider also provide getRootElement function that returns window.document.
  - Migrate Bezier components to use useWindow instead of functions in utils/dom.ts

## 1.18.0

### Minor Changes

- Add ModalContent's prop to allow custom value for overlay padding ([#1747](https://github.com/channel-io/bezier-react/pull/1747)) by @Tanney-102

## 1.17.1

### Patch Changes

- Show clear button in TextField only when its value is not empty and focused/hovered. ([#1713](https://github.com/channel-io/bezier-react/pull/1713)) by @jintak0401

- fix onDelete function to prevent it from being called when a tag is clicked. ([#1712](https://github.com/channel-io/bezier-react/pull/1712)) by @jintak0401

## 1.17.0

### Minor Changes

- Add container prop to ToastProvider ([#1692](https://github.com/channel-io/bezier-react/pull/1692)) by @leejiwoo2002

## 1.16.0

### Minor Changes

- Fix "document is not defined" error when building in SSR frameworks like Next.js. ([#1688](https://github.com/channel-io/bezier-react/pull/1688)) by @sungik-choi

## 1.15.1

### Patch Changes

- Fix return type of `TextFieldRef.getDOMNode()` to `HTMLInputElement | null` ([#1668](https://github.com/channel-io/bezier-react/pull/1668)) by @sungik-choi

## 1.15.0

### Minor Changes

- Add `title` props on `Tooltip` ([#1666](https://github.com/channel-io/bezier-react/pull/1666)) by @nabi-chan

## 1.14.0

### Minor Changes

- Added StyleSheetManager to export ([#1645](https://github.com/channel-io/bezier-react/pull/1645)) by @leejiwoo2002

### Patch Changes

- Implement the feature to add scripts by injecting a window object into the `activate` function of `SmoothCornersFeatures`, if needed. ([#1642](https://github.com/channel-io/bezier-react/pull/1642)) by @sungik-choi

  ```tsx
  SmoothCornersFeature.activate(window)
  ```

## 1.13.0

### Minor Changes

- Add `preventHideOnOutsideClick` property to `Modal` component ([#1617](https://github.com/channel-io/bezier-react/pull/1617)) by @yangwooseong

### Patch Changes

- Fixes an issue where the height of `TextArea` component is not specified correctly. Modify the build settings to match the package.json exports fields change in 8.5.0 of `react-textarea-autosize`. ([#1637](https://github.com/channel-io/bezier-react/pull/1637)) by @sungik-choi

- Add `ProgressBarSize`, `ProgressBarVariant` string literal type and deprecate enum ([#1595](https://github.com/channel-io/bezier-react/pull/1595)) by @Dogdriip

## 1.12.0

### Minor Changes

- Allow `iconName` prop of `Button`, `Banner`, `SectionLabel` component to include `BezierIcon` type ([#1562](https://github.com/channel-io/bezier-react/pull/1562)) by @yangwooseong

### Patch Changes

- Fixed a rendering bug that occurs when using `react-resize-detector` and `asChild`prop of `radix-ui` simultaneously. ([#1577](https://github.com/channel-io/bezier-react/pull/1577)) by @yangwooseong

  - Removed indicator adjusting logic by `react-resize-detector` using css transform property

- Replace `@channel.io/react-docgen-typescript-plugin` with Storybook's `reactDocgen` option ([#1594](https://github.com/channel-io/bezier-react/pull/1594)) by @Dogdriip

## 1.11.1

### Patch Changes

- `Tooltip`: Removes the risk of infinite loop. removes conditional rendering logic based on disabled prop. ([#1558](https://github.com/channel-io/bezier-react/pull/1558)) by @sungik-choi

## 1.11.0

### Minor Changes

- `Tooltip`: If `content` property has a nil or empty string value, it will no longer render the content. ([#1552](https://github.com/channel-io/bezier-react/pull/1552)) by @sungik-choi

### Patch Changes

- `SegmentedControl`: Apply the text ellipsis style to each item label. ([#1557](https://github.com/channel-io/bezier-react/pull/1557)) by @sungik-choi

## 1.10.2

### Patch Changes

- Fixed a bug where tooltips prevented focus from moving inside a modal. As a side-effect of #1472, revert the tooltip to be rendered on the root element. ([#1540](https://github.com/channel-io/bezier-react/pull/1540)) by @sungik-choi

- Add bdr-black-lightest color to Light/DarkTheme ([#1538](https://github.com/channel-io/bezier-react/pull/1538)) by @heech1013

## 1.10.1

### Patch Changes

- Add ProgressBar `GreenAlt` variant ([#1536](https://github.com/channel-io/bezier-react/pull/1536)) by @Dogdriip

- Add bg-black-darkest color to DarkTheme ([#1535](https://github.com/channel-io/bezier-react/pull/1535)) by @Dogdriip

## 1.10.0

### Minor Changes

- - Add Shadow DOM root element(`:host`) to the default `scope` of `ThemeVars`, and allow selectors to be injected into the `scope` type. ([#1521](https://github.com/channel-io/bezier-react/pull/1521)) by @dinohan

- `Button` : Change the text color of monochrome dark - primary variant ([#1523](https://github.com/channel-io/bezier-react/pull/1523)) by @sungik-choi

## 1.9.0

### Minor Changes

- Update foundation ([#1506](https://github.com/channel-io/bezier-react/pull/1506)) by @sungik-choi

  - Add semantic color `txt-black-pure`
  - Add palette `grey800_80` and modify `bg-lounge` color to reference it

### Patch Changes

- add type cast to fix incorrect type infer in `TabAction` component ([#1497](https://github.com/channel-io/bezier-react/pull/1497)) by @yangwooseong

## 1.8.0

### Minor Changes

- Change root element of `createPortal` in `<ToastProvider />`. ([#1485](https://github.com/channel-io/bezier-react/pull/1485)) by @GwangYeol-Im

- Change default value of `container` for `Overlay`, `Tooltip` placed inside `Modal` to container element of `Modal`. ([#1472](https://github.com/channel-io/bezier-react/pull/1472)) by @sungik-choi

## 1.7.2

### Patch Changes

- Removes the animation of `Tooltip`. Changes the default values of `delayShow` and `skipDelayShow` of `TooltipProvider`. ([#1469](https://github.com/channel-io/bezier-react/pull/1469)) by @sungik-choi

## 1.7.1

### Patch Changes

- Fix module resolve errors that occur in CJS environments. ([#1459](https://github.com/channel-io/bezier-react/pull/1459)) by @sungik-choi

## 1.7.0

### Minor Changes

- Change icon prop type from `iconName` to `BezierIcon` ([#1423](https://github.com/channel-io/bezier-react/pull/1423)) by @yangwooseong

- Add `Tooltip` to the thumb of `Slider`. ([#1324](https://github.com/channel-io/bezier-react/pull/1324)) by @sungik-choi

  - `disableTooltip` property is added to `SliderProps`.
  - The default value of `defaultValue` property of `SliderProps` is changed from `[5]` to `[0]`.

- Apply the re-implemented `Tooltip` component to `Help`, `KeyValueListItem`, and `SectionLabel` components. ([#1293](https://github.com/channel-io/bezier-react/pull/1293)) by @sungik-choi

  - Change onClick handler type of `ItemAction` of `KeyValueListItem` to the correct one.
  - The type of `help` property of `SectionLabel` is changed to `React.ReactNode`.

- **BREAKING CHANGES**: Re-implement `Tooltip` component. ([#1438](https://github.com/channel-io/bezier-react/pull/1438)) by @sungik-choi

  - No longer render div elements outside of the trigger(children) component.
  - The legacy tooltip is now exported with the name `LegacyTooltip`.
  - The `keepInContainer` property defaults from false to true.

  `Tooltip` is a component that shows additional information when the mouse hovers or the keyboard is focused.

  ```tsx
  // Anatomy of the Tooltip
  <TooltipProvider>
    <Tooltip />
  </TooltipProvider>

  // Example of a Tooltip with a button
  <Tooltip content="Ta-da!">
    <button>Hover me</button>
  </Tooltip>
  ```

- Correctly change `children` prop on components that pass `children` prop directly to radix-ui `Slot`. ([#1438](https://github.com/channel-io/bezier-react/pull/1438)) by @sungik-choi

  **BREAKING_CHANGE**: `children` prop of the following components will be changed from `React.ReactNode` to `React.ReactElement`.

  - `Tooltip`
  - `ModalTrigger`
  - `ModalClose`
  - `VisuallyHidden`

### Patch Changes

- Now below components forward the ref. ([#1449](https://github.com/channel-io/bezier-react/pull/1449)) by @sungik-choi

  - `Tag`
  - `Badge`
  - `SectionLabel`
  - `NavGroup`
  - `NavItem`
  - `ListMenuTitle`
  - `Help`

## 1.6.2

### Patch Changes

- Fixes an issue where `styled` functions are not interpreted correctly when using the `.mjs` extension in the Next.js environment. ([#1437](https://github.com/channel-io/bezier-react/pull/1437)) by @sungik-choi

## 1.6.1

### Patch Changes

- Update the following packages to the latest versions: `react-resize-detector`, `ssr-window` ([#1429](https://github.com/channel-io/bezier-react/pull/1429)) by @sungik-choi

## 1.6.0

### Minor Changes

- Add @channel.io/bezier-icons >= 0.2.0 as a peer dependency of bezier-react, bezier-icons is no longer bundled. ([#1424](https://github.com/channel-io/bezier-react/pull/1424)) by @sungik-choi

### Patch Changes

- Updated dependencies
  - @channel.io/bezier-icons@0.3.0

## 1.5.0

### Minor Changes

- Remove `LegacyIcon` used in `ListItem`, `Select`, `TextField`, `KeyValueListItem`, `OutlineItem`. ([#1383](https://github.com/channel-io/bezier-react/pull/1383)) by @yangwooseong

  **BREAKING CHANGE**: No more support for `IconName` type with `icon` prop in these components.

## 1.4.0

### Minor Changes

- **Important notice:** Changed the way icon component uniqueness is checked in the @channel.io/bezier-icons package, please use with the @channel.io/bezier-icons@0.2.0 version for normal behavior. ([#1414](https://github.com/channel-io/bezier-react/pull/1414)) by @sungik-choi

### Patch Changes

- Changed the styling of the active state of `OutlineItem`'s icon and the clickable state of `SectionLabel` to classname-based styling. ([#1312](https://github.com/channel-io/bezier-react/pull/1312)) by @sungik-choi

- Updated dependencies
  - @channel.io/bezier-icons@0.2.0

## 1.3.0

### Minor Changes

- **BREAKING CHANGE**: No longer exports IconSource related modules. Now import from the `@channel.io/bezier-icons` package. ([#1375](https://github.com/channel-io/bezier-react/pull/1375)) by @sungik-choi

  For more details see: [@channel.io/bezier-codemod - transformations](https://github.com/channel-io/bezier-react/tree/main/packages/bezier-codemod#transformations)

## 1.2.0

### Minor Changes

- Update icons ([#1363](https://github.com/channel-io/bezier-react/pull/1363)) by @Jamie-channel

## 1.1.0

### Minor Changes

- [#1371](https://github.com/channel-io/bezier-react/pull/1371) [`11e393f7`](https://github.com/channel-io/bezier-react/commit/11e393f795845571e00c8f13671dbf60bf554445) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Release v1.1.0

## 1.0.0

### Minor Changes

- [#1310](https://github.com/channel-io/bezier-react/pull/1310) [`b37f1971`](https://github.com/channel-io/bezier-react/commit/b37f1971fa3f8170ed85fc5daaabcebe4f8b7ecb) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Enhance the accessibility of icons.

- [#913](https://github.com/channel-io/bezier-react/pull/913) [`38aec7d6`](https://github.com/channel-io/bezier-react/commit/38aec7d6612b493439b41b358a54c947011a299e) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Add size17 option to Typography

- [#1284](https://github.com/channel-io/bezier-react/pull/1284) [`4dcf60d7`](https://github.com/channel-io/bezier-react/commit/4dcf60d7437c10c761989c27df4c64f9caadf7eb) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#878](https://github.com/channel-io/bezier-react/pull/878) [`fa1e0d76`](https://github.com/channel-io/bezier-react/commit/fa1e0d7692204b8207911284e6c61c3c92860842) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add ButtonGroup component

- [#1347](https://github.com/channel-io/bezier-react/pull/1347) [`91d69e9b`](https://github.com/channel-io/bezier-react/commit/91d69e9b5ddae7ea20f15eb0c53b18b2f51ef056) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change `SegmentedControlItem` button element type from 'submit' to 'button'.

- [#1361](https://github.com/channel-io/bezier-react/pull/1361) [`dbca37c3`](https://github.com/channel-io/bezier-react/commit/dbca37c391ec1499f377cd3b8cd08a795e742590) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Revert `Icon` a11y enhancements.

- [#866](https://github.com/channel-io/bezier-react/pull/866) [`eceaa9e7`](https://github.com/channel-io/bezier-react/commit/eceaa9e7a26765e03a78a6fd97f50c8e1e112303) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change FormGroup implementation to use Stack internally

  BREAKING CHANGE

  - Change 'gap' prop to 'spacing' prop
  - Change the allowable value of 'direction' prop to be the same as Stack

- [#1071](https://github.com/channel-io/bezier-react/pull/1071) [`8df05c64`](https://github.com/channel-io/bezier-react/commit/8df05c641807c7429f20c98dd9963383f146cd21) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `Radio` component.

  BREAKING CHANGES

  - Legacy `Radio` component is now exported with namespace `LEGACY__Radio`. It will be deprecated.
  - New `Radio` component must be used with the new `RadioGroup` component. See below.

  ```tsx
  // AS-IS
  <Radio
    value={value}
    watchingValue={watchingValue}
    onClick={() => setWatchingValue(value)}
  />

  // TO-BE
  <RadioGroup
    value={watchingValue}
    onChangeValue={setWatchingValue}
  >
    <Radio value={value} />
  </RadioGroup>
  ```

- [#1128](https://github.com/channel-io/bezier-react/pull/1128) [`e8593727`](https://github.com/channel-io/bezier-react/commit/e85937271b119e5fb68c8aeaa24d83b388716d1a) Thanks [@sungik-choi](https://github.com/sungik-choi)! - **Breaking changes**

  No longer provide `layout`-related modules (e.g. `LayoutProvider`, `GNB`...)

- [#1302](https://github.com/channel-io/bezier-react/pull/1302) [`0d7b8a63`](https://github.com/channel-io/bezier-react/commit/0d7b8a63d752d5a11b8981a0741defef3677ad45) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Reverts `DragableIcon`.

- [#1036](https://github.com/channel-io/bezier-react/pull/1036) [`e23c54a8`](https://github.com/channel-io/bezier-react/commit/e23c54a81fa6647e378985d660a95fcfedbd253a) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `Modal` component

  BREAKING_CHANGES

  - No longer use `BaseModal` for internal implementations of `Modal`.
  - The existing `Modal` is renamed `LegacyModal` and will be removed from subsequent PR.
  - The `ModalAction` component is renamed `ModalFooter`.
  - The `targetElement` property in `ModalProps` is renamed `container`.
  - The `showCloseIcon` property is moved from `ModalProps` to `ModalContentProps`.
  - The `title`, `subTitle`, `description`, and `titleSize` properties are moved from `ModalContentProps` to the new `ModalHeaderProps`.

- [#1298](https://github.com/channel-io/bezier-react/pull/1298) [`284d3d8b`](https://github.com/channel-io/bezier-react/commit/284d3d8b041223dacdab2e3a3773f772ebe47180) Thanks [@sungik-choi](https://github.com/sungik-choi)! - BREAKING CHANGE

  Change `LegacyRadio` component to export individually named instead of the `LegacyRadio` namespace.

  ```diff
  - import { LegacyRadio } from '@channel.io/bezier-react'
  - type RadioProps = LegacyRadio.RadioProps
  - const RadioComponent = LegacyRadio.Radio
  + import { LegacyRadio, type LegacyRadioProps } from '@channel.io/bezier-react'
  + type RadioProps = LegacyRadioProps
  + const RadioComponent = LegacyRadio
  ```

- [#1281](https://github.com/channel-io/bezier-react/pull/1281) [`123f4cdd`](https://github.com/channel-io/bezier-react/commit/123f4cdd4f05bff9d4f3c44b9e5fad246f3c1b3b) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix no spacing between form fields and `FormLabel` and `FormHelperText` when `labelPosition="left"`.

- [#1048](https://github.com/channel-io/bezier-react/pull/1048) [`fe9640b0`](https://github.com/channel-io/bezier-react/commit/fe9640b071fa98d903c9a2ddf1fc48c16741be0c) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change return value of `getRootElement()` from element with specific id to `document.body` element

- [#1002](https://github.com/channel-io/bezier-react/pull/1002) [`cb677dde`](https://github.com/channel-io/bezier-react/commit/cb677dde40d92582f8fade504b54ee8532d3ae0f) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Apply `@radix-ui/react-switch` primitives to `Switch` component

  BREAKING CHANGE:

  - `onClick` handler is now `React.MouseEventHandler<HTMLButtonElement>`.
  - `Switch` component is now `HTMLButtonElement`.

- [#1082](https://github.com/channel-io/bezier-react/pull/1082) [`89f18836`](https://github.com/channel-io/bezier-react/commit/89f1883616d0c460aaf5222328f334303773c238) Thanks [@Tanney-102](https://github.com/Tanney-102)! - - keyboard event locker added.

  - TextField and TextArea use keyboard event locker, so that they can block keyboard event handling for IME control keys while composing.

- [#1061](https://github.com/channel-io/bezier-react/pull/1061) [`d4e04675`](https://github.com/channel-io/bezier-react/commit/d4e046759a501f56513df1b31d76b34a3ff511e4) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Re-implement `Tabs` component

  BREAKING_CHANGES

  - The existing `Tabs` is renamed `LegacyTabs` and will be removed from following PR.
  - No longer use selectedOptionIndex in `Tabs`
  - Some props such as `withIndicator`, `optionKey` are removed from `TabItem`
  - Wrap with `TabContent` component for tab panel

- [#1191](https://github.com/channel-io/bezier-react/pull/1191) [`0a53d6aa`](https://github.com/channel-io/bezier-react/commit/0a53d6aa1daad028c786c35ed2b874360e389f87) Thanks [@sungik-choi](https://github.com/sungik-choi)! - `Checkbox` re-implementation and design updates:

  `Checkbox` is a control that allows the user to toggle between checked and not checked.
  It can be used with labels or standalone.

  ```tsx
  const [checked, setChecked] = useState(false)
  // Controlled / With label
  <Checkbox
    checked={checked}
    onCheckedChange={setChecked}
  >
    Label
  </Checkbox>
  // Controlled / Standalone
  <Checkbox
    checked={checked}
    onCheckedChange={setChecked}
  />
  // Uncontrolled
  <Checkbox
    defaultChecked={true}
  >
    Label
  </Checkbox>
  ```

  Breaking Changes:

  - Delete `CheckType` enum
  - Change the allowable value of the `checked` property:
    - AS-IS: `boolean | CheckType`
    - TO-BE: `boolean | 'indeterminate'`

- [#871](https://github.com/channel-io/bezier-react/pull/871) [`29c4a62b`](https://github.com/channel-io/bezier-react/commit/29c4a62bcb92b5bc888b44bcbc00437fbccadca8) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Add Slider component

- [#1254](https://github.com/channel-io/bezier-react/pull/1254) [`e4a0d68c`](https://github.com/channel-io/bezier-react/commit/e4a0d68c0808debb50a8316cad2680dbca057db4) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add `container` property to `Tooltip` component.

  ```tsx
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  return (
    <div ref={setContainer}>
      <Tooltip
        content="Lorem ipsum"
        container={container}
      >
        <div />
      </Tooltip>
    </div>
  )
  ```

- [#1359](https://github.com/channel-io/bezier-react/pull/1359) [`d52a2710`](https://github.com/channel-io/bezier-react/commit/d52a27103641e6c2908e4b7983e7ac9e33dc4e78) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix `Avatar` not resizing under flex layout.

- [#1356](https://github.com/channel-io/bezier-react/pull/1356) [`7b93217f`](https://github.com/channel-io/bezier-react/commit/7b93217fad916b49145db6bcefd040e38f5002e9) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#930](https://github.com/channel-io/bezier-react/pull/930) [`ee01d66d`](https://github.com/channel-io/bezier-react/commit/ee01d66dca77f95b09c72a45b26e96d54a993ad2) Thanks [@dinohan](https://github.com/dinohan)! - Add new semantic color 'bg-lounge'

- [#945](https://github.com/channel-io/bezier-react/pull/945) [`51e45692`](https://github.com/channel-io/bezier-react/commit/51e45692d3fb20f2937cf857ed4357a323345127) Thanks [@dinohan](https://github.com/dinohan)! - change the font-weight of bold text from 600 to 'bold'

- [#1292](https://github.com/channel-io/bezier-react/pull/1292) [`3b6d7feb`](https://github.com/channel-io/bezier-react/commit/3b6d7feb8c397d92534b603065be17effba8ffb0) Thanks [@rktguswjd](https://github.com/rktguswjd)! - Remove `container` property from `Tooltip` component and add `contentWrapperStyle` property.

- [#1309](https://github.com/channel-io/bezier-react/pull/1309) [`04e05209`](https://github.com/channel-io/bezier-react/commit/04e052097472743ff8d1f43a6192999c1770a559) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add a `FeatureProvider` to make non-required features optional.

  BRAKING CHANGES

  The smooth corners feature is turned off by default. To make it behave the same as before, wrap the root of app in a `FeatureProvider`, as shown below.

  ```tsx
  import {
    FeatureProvider,
    SmoothCornersFeature,
    BezierProvider,
  } from '@channel.io/bezier-react'

  root.render(
    <FeatureProvider features={[SmoothCornersFeature]}>
      <BezierProvider>
        <App />
      </BezierProvider>
    </FeatureProvider>
  )
  ```

- [#1279](https://github.com/channel-io/bezier-react/pull/1279) [`dc2e30cd`](https://github.com/channel-io/bezier-react/commit/dc2e30cdb198e2d74000a67f2147ddd6370d967c) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fixes an issue that causes the focus to move whenever the state changes when using `AutoFocus` component.

- [#1317](https://github.com/channel-io/bezier-react/pull/1317) [`b2629ece`](https://github.com/channel-io/bezier-react/commit/b2629ece4ffcee334fdb0554ed37ee29ed5fa9eb) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Implement `AlphaSmoothCornersBox`.

  `AlphaSmoothCornersBox` is a simple `div` element with smooth corners.
  It is available by enabling the `SmoothCornersFeature`.

  ```tsx
  <FeatureProvider features={[SmoothCornersFeature]}>
    <AlphaSmoothCornersBox />
  </FeatureProvider>
  ```

  - Change to use `AlphaSmoothCornersBox` for `Avatar`'s internal implementation. `Avatar`'s border is now implemented as a box-shadow instead of a qseudo element.
  - Change to use `AlphaSmoothCornersBox` for ellipsis icon of `AvatarGroup`'s internal implementation.

- [#1326](https://github.com/channel-io/bezier-react/pull/1326) [`620f864d`](https://github.com/channel-io/bezier-react/commit/620f864dce75ee176d9abc986f6549ede35a4a28) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1006](https://github.com/channel-io/bezier-react/pull/1006) [`d90c27a1`](https://github.com/channel-io/bezier-react/commit/d90c27a1d7ed27512ce204073bf4d6655240584f) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Add `bg-black-darker` semantic color, update `bg-black-darkest` palette

  BREAKING_CHANGE: `bg-black-darkest` is now `Palette.black_60` on `LightTheme`, `Palette.white_60` on `DarkTheme`.

- [#1258](https://github.com/channel-io/bezier-react/pull/1258) [`eab709b1`](https://github.com/channel-io/bezier-react/commit/eab709b1e96b15936ab02990c473dc70c9d9d4f9) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add `when` prop to the `Autofocus` component.

- [#1272](https://github.com/channel-io/bezier-react/pull/1272) [`07dc6ed8`](https://github.com/channel-io/bezier-react/commit/07dc6ed8e4cc7c1b0cce12fbbc4edcc52c23328f) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `SegmentedControl` component. Legacy components are exported to the `LegacySegmentedControl` namespace.

  `SegmentedControl` is component that looks like a combination of a radio and a button. They can be used in place of tabs and as input elements in modals. If you have more than five items, use a different element, such as a dropdown.

  `SegmentedControl` can be used as a radio group, tabs element depending on its `type`.

  ```tsx
  // Anatomy of the SegmentedControl type="radiogroup"
  <SegmentedControl type="radiogroup">
    <SegmentedControlItem />
  </SegmentedControl>

  // Anatomy of the SegmentedControl type="tabs"
  <SegmentedControl type="tabs">
    <SegmentedControlTabList>
      <SegmentedControlItem />
    </SegmentedControlTabList>

    <SegmentedControlTabContent />
  </SegmentedControl>
  ```

- [#1320](https://github.com/channel-io/bezier-react/pull/1320) [`5b6c2d5c`](https://github.com/channel-io/bezier-react/commit/5b6c2d5c220279b5f5307bdb06f734c8fa16f0e1) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `CheckableAvatar` component.

  - `CheckableAvatar` is a checkbox component that looks like `Avatar`.
  - It now behaves as a checkbox. Keyboard control is available.
  - Add `forwardRef`.

  ```tsx
  const [checked, setChecked] = useState(false)
  // Controlled
  <CheckableAvatar
    name="John Doe"
    avatarUrl="..."
    checked={checked}
    onCheckedChange={setChecked}
  />
  // Uncontrolled
  <CheckableAvatar
    name="John Doe"
    avatarUrl="..."
    defaultChecked
  />
  ```

  BREAKING CHANGES

  - Change name of `isChecked` property to `checked` property.
  - Remove `isCheckable` property.
  - Remove `checkedBackgroundColor` property.
  - Remove `checkableWrapperClassName` property.
  - Remove `checkableWrapperInterpolation` property.

- [#932](https://github.com/channel-io/bezier-react/pull/932) [`c84d1dad`](https://github.com/channel-io/bezier-react/commit/c84d1dad859ede979b9eef716bac42de8e028c8d) Thanks [@dinohan](https://github.com/dinohan)! - feat(form-label): make prop help can recieve Help component
  feat(help): implements Help component

- [#1136](https://github.com/channel-io/bezier-react/pull/1136) [`bf96d2db`](https://github.com/channel-io/bezier-react/commit/bf96d2db33886ca9dee74dabc16f9c18bdc786f1) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Organize z-index values and provide the `ZIndex` enum which is a preset of z-index values to help control the stacking order of components in consumer applications.

  Change the z-index value of the below components.

  - `Overlay`, `Select`: `1000` (container and content)
  - `Modal`: `1100`
  - `Toast`: `1200`
  - `Tooltip`: `1300`

- [#1050](https://github.com/channel-io/bezier-react/pull/1050) [`052fdb91`](https://github.com/channel-io/bezier-react/commit/052fdb9118667b1f57ae4356329f85b4172124e3) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `ConfirmModal` component

  BREAKING CHANGES:

  - `onConfirm` prop of `ConfirmModal` has been removed.

- [#1030](https://github.com/channel-io/bezier-react/pull/1030) [`f407fca8`](https://github.com/channel-io/bezier-react/commit/f407fca865efeff8fe7f0fc0bba296c2731c41be) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the default value of the `Stack`'s `align` prop from `start` to `stretch`

- [#873](https://github.com/channel-io/bezier-react/pull/873) [`3b484673`](https://github.com/channel-io/bezier-react/commit/3b484673f37d1d46b1e6425379e34284b2386aee) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Add withoutIndent prop and apply Radix to Divider component

  BREAKING_CHANGE: Divider is no longer HR, but DIV

### Patch Changes

- [#1132](https://github.com/channel-io/bezier-react/pull/1132) [`115f0d27`](https://github.com/channel-io/bezier-react/commit/115f0d2747132a1a65e4d8e5e842abb5c126c270) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Delete `RadioGroup`'s default generic parameter to fix type inferencing.

- [#1070](https://github.com/channel-io/bezier-react/pull/1070) [`78d217ec`](https://github.com/channel-io/bezier-react/commit/78d217ec20c85d4ec9485e40de1f9542a83aa29d) Thanks [@guswnsxodlf](https://github.com/guswnsxodlf)! - Enhance the Slider component

- [#920](https://github.com/channel-io/bezier-react/pull/920) [`b559bd1d`](https://github.com/channel-io/bezier-react/commit/b559bd1d8a8fe4bac5a8931da7acd72cc59dcb9c) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1077](https://github.com/channel-io/bezier-react/pull/1077) [`84e9eef7`](https://github.com/channel-io/bezier-react/commit/84e9eef79d8424fb3696bf1c5d419fed43bc500b) Thanks [@sungik-choi](https://github.com/sungik-choi)! - - Make the `Modal` overlay scrollable and enhance styling to work well when the `ModalBody` is used stand-alone.

  - Delete hide animation of the `Modal`.

- [#1230](https://github.com/channel-io/bezier-react/pull/1230) [`052b1177`](https://github.com/channel-io/bezier-react/commit/052b11775ad6687d4550138d417330f4311b6b59) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#1029](https://github.com/channel-io/bezier-react/pull/1029) [`e5e5625a`](https://github.com/channel-io/bezier-react/commit/e5e5625aa68f4633e6b6a993e196a822bbe6391d) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add justify prop to ButtonGroup component

- [#901](https://github.com/channel-io/bezier-react/pull/901) [`9be5d909`](https://github.com/channel-io/bezier-react/commit/9be5d9095b6fc753c42ba87fc88f530117f3ed8d) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Apply CSS default value to the align, justify properties of FormGroup component.

- [#861](https://github.com/channel-io/bezier-react/pull/861) [`f530f952`](https://github.com/channel-io/bezier-react/commit/f530f952718ebda5eb1b20ba2f99ed2c1d7258cc) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Change project license to Apache-2.0

- [#1143](https://github.com/channel-io/bezier-react/pull/1143) [`53d83ba2`](https://github.com/channel-io/bezier-react/commit/53d83ba27f79ae81ab82836af047f8584919a1b8) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix to pass missing property of `Overlay` component.

- [#1364](https://github.com/channel-io/bezier-react/pull/1364) [`9dc15667`](https://github.com/channel-io/bezier-react/commit/9dc15667625bdbf5a352346a6d1e09d0a545f4aa) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix status wrapper of avatar to grow in size to fit its children

- [#1103](https://github.com/channel-io/bezier-react/pull/1103) [`3bdb95e1`](https://github.com/channel-io/bezier-react/commit/3bdb95e1a022370122afb4166cc2f138028cb72b) Thanks [@annie1229](https://github.com/annie1229)! - Add truncated prop to Text component

- [#1107](https://github.com/channel-io/bezier-react/pull/1107) [`f6789fa2`](https://github.com/channel-io/bezier-react/commit/f6789fa2b0d8a2889c42163ba734e910ae01fe89) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#935](https://github.com/channel-io/bezier-react/pull/935) [`174805b1`](https://github.com/channel-io/bezier-react/commit/174805b18029459755423c847566a177f750cf09) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1226](https://github.com/channel-io/bezier-react/pull/1226) [`f02904d6`](https://github.com/channel-io/bezier-react/commit/f02904d6d30afe0f99b99d1aeec66a75372d7ff3) Thanks [@Kanary159357](https://github.com/Kanary159357)! - Introduce `AlphaStack` component

- [#1014](https://github.com/channel-io/bezier-react/pull/1014) [`a6b42ed3`](https://github.com/channel-io/bezier-react/commit/a6b42ed3bbac68e375e90ab18dcd4b376285958f) Thanks [@leejiwoo2002](https://github.com/leejiwoo2002)! - Export ServerStyleSheet Function for SSR Support

- [#937](https://github.com/channel-io/bezier-react/pull/937) [`bb8a978d`](https://github.com/channel-io/bezier-react/commit/bb8a978d9b9cdce72bd776c96db9fa78e074ea2e) Thanks [@sungik-choi](https://github.com/sungik-choi)! - - For avoiding text overflow, Change FormControl grid label cell size from flex to fixed.

  - For avoiding text overflow, Add 'work-break: break-word' style to FormLabel.
  - For avoiding text overflow, Add flex-shrink style to StackItem which is wrapping FormLabel when there is 'help'.

- [#857](https://github.com/channel-io/bezier-react/pull/857) [`f4bcf942`](https://github.com/channel-io/bezier-react/commit/f4bcf942c2521bb990b209dbcc4aa29c5689daae) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Apply changesets

- [#1026](https://github.com/channel-io/bezier-react/pull/1026) [`80f33585`](https://github.com/channel-io/bezier-react/commit/80f33585aadf9d616a1ebfe64e3bd2975cf768aa) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Change `BaseModal` animation to scale-based animation

- [#1245](https://github.com/channel-io/bezier-react/pull/1245) [`6fdb5d18`](https://github.com/channel-io/bezier-react/commit/6fdb5d184152c48ee6cc9e1f4b903c707c5bef7e) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix `FormControl`'s id always overrides `Checkbox`'s id prop

- [#1333](https://github.com/channel-io/bezier-react/pull/1333) [`45e7946d`](https://github.com/channel-io/bezier-react/commit/45e7946dfd6a1d9c18aa331d9263ddaf5216492d) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add the missing `SegmentedControlSize` enum export.

- [#1290](https://github.com/channel-io/bezier-react/pull/1290) [`e7773286`](https://github.com/channel-io/bezier-react/commit/e7773286f2308a48f38027fb94f223ce32b0b559) Thanks [@Kanary159357](https://github.com/Kanary159357)! - change keyvalue item padding

- [#1113](https://github.com/channel-io/bezier-react/pull/1113) [`3bd99b8d`](https://github.com/channel-io/bezier-react/commit/3bd99b8d573d0d7d9d0e58173adea57af2f64409) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#934](https://github.com/channel-io/bezier-react/pull/934) [`650d31bd`](https://github.com/channel-io/bezier-react/commit/650d31bdf0b9ff64bebac872378ec18799c3b468) Thanks [@aooen](https://github.com/aooen)! - Reduce bundle size (apply minify for styled-components)

- [#1015](https://github.com/channel-io/bezier-react/pull/1015) [`7d3c76c9`](https://github.com/channel-io/bezier-react/commit/7d3c76c98347279504d589941dff1af73eff988b) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Apply `font-family: 'Inter'` as StoryBook global style

- [#1131](https://github.com/channel-io/bezier-react/pull/1131) [`b4d80ecb`](https://github.com/channel-io/bezier-react/commit/b4d80ecb19e3ee00a91e87cee215662e4f31f76f) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Enhance the interface of `Radio` and `RadioGroup` components. Change `Radio` to render children when their value is evaluated as true.

- [#1031](https://github.com/channel-io/bezier-react/pull/1031) [`1afab062`](https://github.com/channel-io/bezier-react/commit/1afab062d9919bc0d3b55fa0dcf12c0ed0090842) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#907](https://github.com/channel-io/bezier-react/pull/907) [`af5cb6f8`](https://github.com/channel-io/bezier-react/commit/af5cb6f8c3947fb26e258016e540a20c576b6c61) Thanks [@guswnsxodlf](https://github.com/guswnsxodlf)! - Add floating-alt style variant in Button element

- [#1228](https://github.com/channel-io/bezier-react/pull/1228) [`c68bec81`](https://github.com/channel-io/bezier-react/commit/c68bec8199d0f33d6934f058be432c3a9a3e3353) Thanks [@leejiwoo2002](https://github.com/leejiwoo2002)! - add new text/palette specs

  - add 2 color palette
    - grey50_80
    - grey850_80
  - add 2 text specs
    - size30
    - size36
  - add 3 semantic colors
    - bg-grey-dim-lightest
    - light: grey50_80
    - dark: grey850_80

- [#1189](https://github.com/channel-io/bezier-react/pull/1189) [`cc7270dd`](https://github.com/channel-io/bezier-react/commit/cc7270dd84199ea2148623e7ceaba9ad5f5f9bf2) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Introduce `AlphaCenter` component.

- [#1062](https://github.com/channel-io/bezier-react/pull/1062) [`d38bcb42`](https://github.com/channel-io/bezier-react/commit/d38bcb42e823f14778e70e3e46d479c6e17200b8) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the `AvatarGroup` component to use CSS Variable internally

- [#1265](https://github.com/channel-io/bezier-react/pull/1265) [`d68e2524`](https://github.com/channel-io/bezier-react/commit/d68e2524b0bf9632d6d8576f2cc383713af2a964) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add forwardRef to `FormControl`.

- [#1110](https://github.com/channel-io/bezier-react/pull/1110) [`b406a268`](https://github.com/channel-io/bezier-react/commit/b406a26827b774bb99ed54d227584f972afc24e5) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change modal floating style from `inset` to `top`...`left` position to support legacy browser

- [#1122](https://github.com/channel-io/bezier-react/pull/1122) [`48f6a3b2`](https://github.com/channel-io/bezier-react/commit/48f6a3b2c820638aa4cd5a1b212d77e4540a3013) Thanks [@heech1013](https://github.com/heech1013)! - Remove default value of event handler props in Icon component

- [#874](https://github.com/channel-io/bezier-react/pull/874) [`fa944351`](https://github.com/channel-io/bezier-react/commit/fa9443517bf105e9dc3082537ed42e9975902d0c) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Add keypad icon

- [#1028](https://github.com/channel-io/bezier-react/pull/1028) [`d6b28529`](https://github.com/channel-io/bezier-react/commit/d6b285296fc444dee7d0fd720d915a21b956f360) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Update the font-size of the TextField component per size

- [#1343](https://github.com/channel-io/bezier-react/pull/1343) [`0feaed93`](https://github.com/channel-io/bezier-react/commit/0feaed93b00dfffb694ee92c26731d4ccc3c2d81) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix the styling of `SegmentedControlItem`'s content area.

- [#1339](https://github.com/channel-io/bezier-react/pull/1339) [`f674fc39`](https://github.com/channel-io/bezier-react/commit/f674fc3925f2bbcf0bcbc0862deb456cd921a7b5) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix passing a number to the `width` prop of a `SegmentedControl` to work correctly.

- [#867](https://github.com/channel-io/bezier-react/pull/867) [`5ada881b`](https://github.com/channel-io/bezier-react/commit/5ada881b4bb7c788a5d8259f8e47df615e0ca3e4) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Fix style bug: background color of switch handle is overridden by elevation css

- [#1357](https://github.com/channel-io/bezier-react/pull/1357) [`09101a9e`](https://github.com/channel-io/bezier-react/commit/09101a9e5ef2c2ce4aea4cb493e075d18d700686) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#848](https://github.com/channel-io/bezier-react/pull/848) [`1053fd1b`](https://github.com/channel-io/bezier-react/commit/1053fd1b5c9f1933e8c6e6cf96cab1a7644458a3) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Fix Switch component implementation to follow Bezier Figma spec

- [#865](https://github.com/channel-io/bezier-react/pull/865) [`7ef5ffcc`](https://github.com/channel-io/bezier-react/commit/7ef5ffcc3f3f91198682f561fd41fb2209eb2f42) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the distribute icon

- [#1250](https://github.com/channel-io/bezier-react/pull/1250) [`42c6ce74`](https://github.com/channel-io/bezier-react/commit/42c6ce7410e6db05dab7e60c6b9f6e4c275fc2a0) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Introduce `AutoFocus` component.

  `AutoFocus` is a component that automatically focuses its child component when they are added to the document. It is useful when you want to focus on a specific element when the component is mounted. It doesn't render any DOM node.

  ```tsx
  <AutoFocus>
    <button>Close</button>
  </AutoFocus>
  ```

- [#1174](https://github.com/channel-io/bezier-react/pull/1174) [`355fdaff`](https://github.com/channel-io/bezier-react/commit/355fdaffe472365dc6c18c6f77bd0c5cae40599c) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Implement `VisuallyHidden` component.

  `VisuallyHidden` is a component that visually hides the content. It doesn't render any DOM node. It is useful when you want to provide additional information to screen readers.

  ```tsx
  <VisuallyHidden>
    <span>This is a visually hidden text.</span>
  </VisuallyHidden>
  ```

- [#1139](https://github.com/channel-io/bezier-react/pull/1139) [`ff323960`](https://github.com/channel-io/bezier-react/commit/ff323960173e5b49a371e59dd78255327fbef800) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add focused style to `Button` component.

- [#1120](https://github.com/channel-io/bezier-react/pull/1120) [`70efd997`](https://github.com/channel-io/bezier-react/commit/70efd9970e6790d1dc5c4fafe7268a386249a69f) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Fix bug that first StackItem has marginBefore when the preceding node is not valid element such as null or false

- [#924](https://github.com/channel-io/bezier-react/pull/924) [`2050b668`](https://github.com/channel-io/bezier-react/commit/2050b6680aee060378c94f1409be3efd597fd45e) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Change word-break property of Modal content

- [#1093](https://github.com/channel-io/bezier-react/pull/1093) [`0424db5f`](https://github.com/channel-io/bezier-react/commit/0424db5f01f97307738cdeb7b65e82c168369737) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Support BezierIcon type for icon prop as well as IconName type in following components

  - `Select`, `TextField`, `ListItem`, `KeyValuseListItem`, `OutlineItem`

- [#1018](https://github.com/channel-io/bezier-react/pull/1018) [`8635cd56`](https://github.com/channel-io/bezier-react/commit/8635cd560cb22a47f03615cda0e54899ce2d5575) Thanks [@junbong](https://github.com/junbong)! - fix(Text): add handling code for unhandled interpolation prop

- [#1095](https://github.com/channel-io/bezier-react/pull/1095) [`3544182d`](https://github.com/channel-io/bezier-react/commit/3544182d75957616afd3d940d0c237784d45f974) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1067](https://github.com/channel-io/bezier-react/pull/1067) [`314e698e`](https://github.com/channel-io/bezier-react/commit/314e698ecce5f3ed5a5624e1448f6ac915aa7c0b) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#928](https://github.com/channel-io/bezier-react/pull/928) [`82c8d17b`](https://github.com/channel-io/bezier-react/commit/82c8d17b589bc1ed308da847f8c1a5f59e62ab1d) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Bump @radix-ui/react-separator to 1.0.0, Add ResizeObserver jest mock

- [#915](https://github.com/channel-io/bezier-react/pull/915) [`d581fb04`](https://github.com/channel-io/bezier-react/commit/d581fb04843aea1810aade3f8a174b3a1fac9532) Thanks [@Tanney-102](https://github.com/Tanney-102)! - Update icon size L from 34 to 36

- [#1244](https://github.com/channel-io/bezier-react/pull/1244) [`825bd8ae`](https://github.com/channel-io/bezier-react/commit/825bd8aed6ba1f566069a2caae56c9ef2219b6c2) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Apply a generic type to the `checked` type of `Checkbox`

- [#892](https://github.com/channel-io/bezier-react/pull/892) [`3040ea5d`](https://github.com/channel-io/bezier-react/commit/3040ea5d5538ece8350ca5f2860e0c4e97c0e69e) Thanks [@aooen](https://github.com/aooen)! - Manage visibility of sidePanel and sideView at main layout prop

  BREAKING CHANGE

  - No longer use useSidePanelHandler and useSideViewHandler. Use set Main prop SidePanelComponent, SideViewComponent to undefined instead.

- [#1079](https://github.com/channel-io/bezier-react/pull/1079) [`85d04e70`](https://github.com/channel-io/bezier-react/commit/85d04e709fb8114330650fc939a7915aab96a2c5) Thanks [@annie1229](https://github.com/annie1229)! - Remove and re-implement lodash-es

- [#1264](https://github.com/channel-io/bezier-react/pull/1264) [`e2b4291a`](https://github.com/channel-io/bezier-react/commit/e2b4291a4b3661391dcfda0667d78732aacea41e) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Remove the 100% width, 100% height style from `AlphaStack` component

- [#1129](https://github.com/channel-io/bezier-react/pull/1129) [`8d243d21`](https://github.com/channel-io/bezier-react/commit/8d243d215e4baa1832cb6bccdfe25e5d58f654ee) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix babel runtime error

- [#862](https://github.com/channel-io/bezier-react/pull/862) [`3af0187c`](https://github.com/channel-io/bezier-react/commit/3af0187c6506a9207b5d2e4887fc5d522afbee2f) Thanks [@kimminkyung94](https://github.com/kimminkyung94)! - Update the icons

- [#909](https://github.com/channel-io/bezier-react/pull/909) [`77859565`](https://github.com/channel-io/bezier-react/commit/77859565b9d5f11feedae1b90d3232f4c3001875) Thanks [@Seolhun](https://github.com/Seolhun)! - add toast update feature

- [#1063](https://github.com/channel-io/bezier-react/pull/1063) [`d924b727`](https://github.com/channel-io/bezier-react/commit/d924b727492e1a7fbb75b67b6f933b4e08a63adf) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the `Status` component to use CSS Variable internally

- [#1052](https://github.com/channel-io/bezier-react/pull/1052) [`278338ef`](https://github.com/channel-io/bezier-react/commit/278338ef8cb2ff79ddb23ae630e7f5c42ebdae67) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Revert the removed `size` property of the `TextField`'s internal `input` element.

- [#896](https://github.com/channel-io/bezier-react/pull/896) [`6d07015f`](https://github.com/channel-io/bezier-react/commit/6d07015fd59590c17ef9a7e9a2961ed31ae518f5) Thanks [@Seolhun](https://github.com/Seolhun)! - refactor(key-value-list-item): change key and value component styles removed fixed height and given default color

- [#1119](https://github.com/channel-io/bezier-react/pull/1119) [`1c52fcdc`](https://github.com/channel-io/bezier-react/commit/1c52fcdcf2934377213f7224290983cc9f7d3f62) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Decrease horizontal padding of XS size button to 2px

- [#1232](https://github.com/channel-io/bezier-react/pull/1232) [`b37bcebc`](https://github.com/channel-io/bezier-react/commit/b37bcebc54a03ba201401df79bf42c53e1224b9a) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix module resolve error in library usage

- [#927](https://github.com/channel-io/bezier-react/pull/927) [`ae5f5b6d`](https://github.com/channel-io/bezier-react/commit/ae5f5b6da051b76722aca0ae0697b3963eece463) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1135](https://github.com/channel-io/bezier-react/pull/1135) [`ee776e66`](https://github.com/channel-io/bezier-react/commit/ee776e66f25e93e6a8c6a6fe181eb84159e8d985) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Delete Legacy `Modal` and `Tabs` components. Rename `LEGACY__RADIO` to `LegacyRadio`.

- [#1249](https://github.com/channel-io/bezier-react/pull/1249) [`8466ab3c`](https://github.com/channel-io/bezier-react/commit/8466ab3c211e50baad2c69de682258615e5c9dfa) Thanks [@Kanary159357](https://github.com/Kanary159357)! - change to alphastack on ...group component

- [#1118](https://github.com/channel-io/bezier-react/pull/1118) [`40d11807`](https://github.com/channel-io/bezier-react/commit/40d11807ad72f1f21ffe40aef9850c5be4f0c0bd) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1335](https://github.com/channel-io/bezier-react/pull/1335) [`a8a2a78a`](https://github.com/channel-io/bezier-react/commit/a8a2a78aef5dc2ba8bd45c10cbd9ec8b5e5ba564) Thanks [@sungik-choi](https://github.com/sungik-choi)! - - Fix `Avatar`'s style overrides to work the same way as before.

  - Delete `wrapperStyle` prop of `AvatarProps`.
  - Delete `wrapperClassName` prop of `AvatarProps`.
  - Delete `wrapperInterpolation` prop of `AvatarProps`.

- [#811](https://github.com/channel-io/bezier-react/pull/811) [`535b20d9`](https://github.com/channel-io/bezier-react/commit/535b20d9c4f58a05897ae2decc6d98120b54d0ab) Thanks [@inhibitor1217](https://github.com/inhibitor1217)! - add storybook documentation for Button component

- [#894](https://github.com/channel-io/bezier-react/pull/894) [`ba49e2e8`](https://github.com/channel-io/bezier-react/commit/ba49e2e8123d85d4fbfae7bd462d28ca058fa1a0) Thanks [@Seolhun](https://github.com/Seolhun)! - refactor(toast): change toast content props "string" to "react-node"

- [#1001](https://github.com/channel-io/bezier-react/pull/1001) [`ca1c6145`](https://github.com/channel-io/bezier-react/commit/ca1c6145d9596a14264bd67b3acfdcdadb215e84) Thanks [@aooen](https://github.com/aooen)! - make xs tagbadge more smaller

- [#1020](https://github.com/channel-io/bezier-react/pull/1020) [`33baadb1`](https://github.com/channel-io/bezier-react/commit/33baadb17701fe9265179137eb69df4ab1bf836e) Thanks [@junbong](https://github.com/junbong)! - fix(ModalContent): invalid modal title size

- [#1337](https://github.com/channel-io/bezier-react/pull/1337) [`caa6916d`](https://github.com/channel-io/bezier-react/commit/caa6916d0d9804b4e96f35e6379fc02daf4a368f) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add missing `display: block` property of `Avatar`'s style.

- [#1086](https://github.com/channel-io/bezier-react/pull/1086) [`9a50da65`](https://github.com/channel-io/bezier-react/commit/9a50da650f1d529941fa295ae304c4cca9b1b726) Thanks [@sungik-choi](https://github.com/sungik-choi)! - revert <https://github.com/channel-io/bezier-react/pull/1068>

## 1.0.0-next-v1.214

### Patch Changes

- [#1364](https://github.com/channel-io/bezier-react/pull/1364) [`9dc15667`](https://github.com/channel-io/bezier-react/commit/9dc15667625bdbf5a352346a6d1e09d0a545f4aa) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix status wrapper of avatar to grow in size to fit its children

## 1.0.0-next-v1.213

### Minor Changes

- [#1361](https://github.com/channel-io/bezier-react/pull/1361) [`dbca37c3`](https://github.com/channel-io/bezier-react/commit/dbca37c391ec1499f377cd3b8cd08a795e742590) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Revert `Icon` a11y enhancements.

## 1.0.0-next-v1.212

### Minor Changes

- [#1359](https://github.com/channel-io/bezier-react/pull/1359) [`d52a2710`](https://github.com/channel-io/bezier-react/commit/d52a27103641e6c2908e4b7983e7ac9e33dc4e78) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix `Avatar` not resizing under flex layout.

## 1.0.0-next-v1.211

### Minor Changes

- [#1356](https://github.com/channel-io/bezier-react/pull/1356) [`7b93217f`](https://github.com/channel-io/bezier-react/commit/7b93217fad916b49145db6bcefd040e38f5002e9) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

### Patch Changes

- [#1357](https://github.com/channel-io/bezier-react/pull/1357) [`09101a9e`](https://github.com/channel-io/bezier-react/commit/09101a9e5ef2c2ce4aea4cb493e075d18d700686) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

## 1.0.0-next-v1.210

### Minor Changes

- [#1347](https://github.com/channel-io/bezier-react/pull/1347) [`91d69e9b`](https://github.com/channel-io/bezier-react/commit/91d69e9b5ddae7ea20f15eb0c53b18b2f51ef056) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change `SegmentedControlItem` button element type from 'submit' to 'button'.

## 1.0.0-next-v1.209

### Patch Changes

- [#1343](https://github.com/channel-io/bezier-react/pull/1343) [`0feaed93`](https://github.com/channel-io/bezier-react/commit/0feaed93b00dfffb694ee92c26731d4ccc3c2d81) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix the styling of `SegmentedControlItem`'s content area.

## 1.0.0-next-v1.208

### Patch Changes

- [#1339](https://github.com/channel-io/bezier-react/pull/1339) [`f674fc39`](https://github.com/channel-io/bezier-react/commit/f674fc3925f2bbcf0bcbc0862deb456cd921a7b5) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix passing a number to the `width` prop of a `SegmentedControl` to work correctly.

## 1.0.0-next-v1.207

### Patch Changes

- [#1337](https://github.com/channel-io/bezier-react/pull/1337) [`caa6916d`](https://github.com/channel-io/bezier-react/commit/caa6916d0d9804b4e96f35e6379fc02daf4a368f) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add missing `display: block` property of `Avatar`'s style.

## 1.0.0-next-v1.206

### Patch Changes

- [#1335](https://github.com/channel-io/bezier-react/pull/1335) [`a8a2a78a`](https://github.com/channel-io/bezier-react/commit/a8a2a78aef5dc2ba8bd45c10cbd9ec8b5e5ba564) Thanks [@sungik-choi](https://github.com/sungik-choi)! - - Fix `Avatar`'s style overrides to work the same way as before.
  - Delete `wrapperStyle` prop of `AvatarProps`.
  - Delete `wrapperClassName` prop of `AvatarProps`.
  - Delete `wrapperInterpolation` prop of `AvatarProps`.

## 1.0.0-next-v1.205

### Patch Changes

- [#1333](https://github.com/channel-io/bezier-react/pull/1333) [`45e7946d`](https://github.com/channel-io/bezier-react/commit/45e7946dfd6a1d9c18aa331d9263ddaf5216492d) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add the missing `SegmentedControlSize` enum export.

## 1.0.0-next-v1.204

### Minor Changes

- [#1310](https://github.com/channel-io/bezier-react/pull/1310) [`b37f1971`](https://github.com/channel-io/bezier-react/commit/b37f1971fa3f8170ed85fc5daaabcebe4f8b7ecb) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Enhance the accessibility of icons.

- [#1309](https://github.com/channel-io/bezier-react/pull/1309) [`04e05209`](https://github.com/channel-io/bezier-react/commit/04e052097472743ff8d1f43a6192999c1770a559) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add a `FeatureProvider` to make non-required features optional.

  BRAKING CHANGES

  The smooth corners feature is turned off by default. To make it behave the same as before, wrap the root of app in a `FeatureProvider`, as shown below.

  ```tsx
  import {
    FeatureProvider,
    SmoothCornersFeature,
    BezierProvider,
  } from '@channel.io/bezier-react'

  root.render(
    <FeatureProvider features={[SmoothCornersFeature]}>
      <BezierProvider>
        <App />
      </BezierProvider>
    </FeatureProvider>
  )
  ```

- [#1317](https://github.com/channel-io/bezier-react/pull/1317) [`b2629ece`](https://github.com/channel-io/bezier-react/commit/b2629ece4ffcee334fdb0554ed37ee29ed5fa9eb) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Implement `AlphaSmoothCornersBox`.

  `AlphaSmoothCornersBox` is a simple `div` element with smooth corners.
  It is available by enabling the `SmoothCornersFeature`.

  ```tsx
  <FeatureProvider features={[SmoothCornersFeature]}>
    <AlphaSmoothCornersBox />
  </FeatureProvider>
  ```

  - Change to use `AlphaSmoothCornersBox` for `Avatar`'s internal implementation. `Avatar`'s border is now implemented as a box-shadow instead of a qseudo element.
  - Change to use `AlphaSmoothCornersBox` for ellipsis icon of `AvatarGroup`'s internal implementation.

- [#1326](https://github.com/channel-io/bezier-react/pull/1326) [`620f864d`](https://github.com/channel-io/bezier-react/commit/620f864dce75ee176d9abc986f6549ede35a4a28) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1272](https://github.com/channel-io/bezier-react/pull/1272) [`07dc6ed8`](https://github.com/channel-io/bezier-react/commit/07dc6ed8e4cc7c1b0cce12fbbc4edcc52c23328f) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `SegmentedControl` component. Legacy components are exported to the `LegacySegmentedControl` namespace.

  `SegmentedControl` is component that looks like a combination of a radio and a button. They can be used in place of tabs and as input elements in modals. If you have more than five items, use a different element, such as a dropdown.

  `SegmentedControl` can be used as a radio group, tabs element depending on its `type`.

  ```tsx
  // Anatomy of the SegmentedControl type="radiogroup"
  <SegmentedControl type="radiogroup">
    <SegmentedControlItem />
  </SegmentedControl>

  // Anatomy of the SegmentedControl type="tabs"
  <SegmentedControl type="tabs">
    <SegmentedControlTabList>
      <SegmentedControlItem />
    </SegmentedControlTabList>

    <SegmentedControlTabContent />
  </SegmentedControl>
  ```

- [#1320](https://github.com/channel-io/bezier-react/pull/1320) [`5b6c2d5c`](https://github.com/channel-io/bezier-react/commit/5b6c2d5c220279b5f5307bdb06f734c8fa16f0e1) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `CheckableAvatar` component.

  - `CheckableAvatar` is a checkbox component that looks like `Avatar`.
  - It now behaves as a checkbox. Keyboard control is available.
  - Add `forwardRef`.

  ```tsx
  const [checked, setChecked] = useState(false)
  // Controlled
  <CheckableAvatar
    name="John Doe"
    avatarUrl="..."
    checked={checked}
    onCheckedChange={setChecked}
  />
  // Uncontrolled
  <CheckableAvatar
    name="John Doe"
    avatarUrl="..."
    defaultChecked
  />
  ```

  BREAKING CHANGES

  - Change name of `isChecked` property to `checked` property.
  - Remove `isCheckable` property.
  - Remove `checkedBackgroundColor` property.
  - Remove `checkableWrapperClassName` property.
  - Remove `checkableWrapperInterpolation` property.

## 1.0.0-next-v1.203

### Minor Changes

- [#1302](https://github.com/channel-io/bezier-react/pull/1302) [`0d7b8a63`](https://github.com/channel-io/bezier-react/commit/0d7b8a63d752d5a11b8981a0741defef3677ad45) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Reverts `DragableIcon`.

## 1.0.0-next-v1.202

### Minor Changes

- [#1284](https://github.com/channel-io/bezier-react/pull/1284) [`4dcf60d7`](https://github.com/channel-io/bezier-react/commit/4dcf60d7437c10c761989c27df4c64f9caadf7eb) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1298](https://github.com/channel-io/bezier-react/pull/1298) [`284d3d8b`](https://github.com/channel-io/bezier-react/commit/284d3d8b041223dacdab2e3a3773f772ebe47180) Thanks [@sungik-choi](https://github.com/sungik-choi)! - BREAKING CHANGE

  Change `LegacyRadio` component to export individually named instead of the `LegacyRadio` namespace.

  ```diff
  - import { LegacyRadio } from '@channel.io/bezier-react'
  - type RadioProps = LegacyRadio.RadioProps
  - const RadioComponent = LegacyRadio.Radio
  + import { LegacyRadio, type LegacyRadioProps } from '@channel.io/bezier-react'
  + type RadioProps = LegacyRadioProps
  + const RadioComponent = LegacyRadio
  ```

- [#1292](https://github.com/channel-io/bezier-react/pull/1292) [`3b6d7feb`](https://github.com/channel-io/bezier-react/commit/3b6d7feb8c397d92534b603065be17effba8ffb0) Thanks [@rktguswjd](https://github.com/rktguswjd)! - Remove `container` property from `Tooltip` component and add `contentWrapperStyle` property.

### Patch Changes

- [#1290](https://github.com/channel-io/bezier-react/pull/1290) [`e7773286`](https://github.com/channel-io/bezier-react/commit/e7773286f2308a48f38027fb94f223ce32b0b559) Thanks [@Kanary159357](https://github.com/Kanary159357)! - change keyvalue item padding

## 1.0.0-next-v1.201

### Minor Changes

- [#1281](https://github.com/channel-io/bezier-react/pull/1281) [`123f4cdd`](https://github.com/channel-io/bezier-react/commit/123f4cdd4f05bff9d4f3c44b9e5fad246f3c1b3b) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix no spacing between form fields and `FormLabel` and `FormHelperText` when `labelPosition="left"`.

## 1.0.0-next-v1.200

### Minor Changes

- [#1279](https://github.com/channel-io/bezier-react/pull/1279) [`dc2e30cd`](https://github.com/channel-io/bezier-react/commit/dc2e30cdb198e2d74000a67f2147ddd6370d967c) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fixes an issue that causes the focus to move whenever the state changes when using `AutoFocus` component.

## 1.0.0-next-v1.199

### Patch Changes

- [#1265](https://github.com/channel-io/bezier-react/pull/1265) [`d68e2524`](https://github.com/channel-io/bezier-react/commit/d68e2524b0bf9632d6d8576f2cc383713af2a964) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add forwardRef to `FormControl`.

- [#1264](https://github.com/channel-io/bezier-react/pull/1264) [`e2b4291a`](https://github.com/channel-io/bezier-react/commit/e2b4291a4b3661391dcfda0667d78732aacea41e) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Remove the 100% width, 100% height style from `AlphaStack` component

## 1.0.0-next-v1.198

### Minor Changes

- [#1258](https://github.com/channel-io/bezier-react/pull/1258) [`eab709b1`](https://github.com/channel-io/bezier-react/commit/eab709b1e96b15936ab02990c473dc70c9d9d4f9) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add `when` prop to the `Autofocus` component.

## 1.0.0-next-v1.197

### Minor Changes

- [#1254](https://github.com/channel-io/bezier-react/pull/1254) [`e4a0d68c`](https://github.com/channel-io/bezier-react/commit/e4a0d68c0808debb50a8316cad2680dbca057db4) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add `container` property to `Tooltip` component.

  ```tsx
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  return (
    <div ref={setContainer}>
      <Tooltip
        content="Lorem ipsum"
        container={container}
      >
        <div />
      </Tooltip>
    </div>
  )
  ```

### Patch Changes

- [#1250](https://github.com/channel-io/bezier-react/pull/1250) [`42c6ce74`](https://github.com/channel-io/bezier-react/commit/42c6ce7410e6db05dab7e60c6b9f6e4c275fc2a0) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Introduce `AutoFocus` component.

  `AutoFocus` is a component that automatically focuses its child component when they are added to the document. It is useful when you want to focus on a specific element when the component is mounted. It doesn't render any DOM node.

  ```tsx
  <AutoFocus>
    <button>Close</button>
  </AutoFocus>
  ```

- [#1249](https://github.com/channel-io/bezier-react/pull/1249) [`8466ab3c`](https://github.com/channel-io/bezier-react/commit/8466ab3c211e50baad2c69de682258615e5c9dfa) Thanks [@Kanary159357](https://github.com/Kanary159357)! - change to alphastack on ...group component

## 1.0.0-next-v1.196

### Patch Changes

- [#1245](https://github.com/channel-io/bezier-react/pull/1245) [`6fdb5d18`](https://github.com/channel-io/bezier-react/commit/6fdb5d184152c48ee6cc9e1f4b903c707c5bef7e) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix `FormControl`'s id always overrides `Checkbox`'s id prop

- [#1244](https://github.com/channel-io/bezier-react/pull/1244) [`825bd8ae`](https://github.com/channel-io/bezier-react/commit/825bd8aed6ba1f566069a2caae56c9ef2219b6c2) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Apply a generic type to the `checked` type of `Checkbox`

## 1.0.0-next-v1.195

### Patch Changes

- [#1226](https://github.com/channel-io/bezier-react/pull/1226) [`f02904d6`](https://github.com/channel-io/bezier-react/commit/f02904d6d30afe0f99b99d1aeec66a75372d7ff3) Thanks [@Kanary159357](https://github.com/Kanary159357)! - Introduce `AlphaStack` component

## 1.0.0-next-v1.194

### Patch Changes

- [#1232](https://github.com/channel-io/bezier-react/pull/1232) [`b37bcebc`](https://github.com/channel-io/bezier-react/commit/b37bcebc54a03ba201401df79bf42c53e1224b9a) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix module resolve error in library usage

## 1.0.0-next-v1.193

### Patch Changes

- [#1230](https://github.com/channel-io/bezier-react/pull/1230) [`052b1177`](https://github.com/channel-io/bezier-react/commit/052b11775ad6687d4550138d417330f4311b6b59) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#1228](https://github.com/channel-io/bezier-react/pull/1228) [`c68bec81`](https://github.com/channel-io/bezier-react/commit/c68bec8199d0f33d6934f058be432c3a9a3e3353) Thanks [@leejiwoo2002](https://github.com/leejiwoo2002)! - add new text/palette specs
  - add 2 color palette
    - grey50_80
    - grey850_80
  - add 2 text specs
    - size30
    - size36
  - add 3 semantic colors
    - bg-grey-dim-lightest
    - light: grey50_80
    - dark: grey850_80

## 1.0.0-next-v1.192

### Minor Changes

- [#1191](https://github.com/channel-io/bezier-react/pull/1191) [`0a53d6aa`](https://github.com/channel-io/bezier-react/commit/0a53d6aa1daad028c786c35ed2b874360e389f87) Thanks [@sungik-choi](https://github.com/sungik-choi)! - `Checkbox` re-implementation and design updates:

  `Checkbox` is a control that allows the user to toggle between checked and not checked.
  It can be used with labels or standalone.

  ```tsx
  const [checked, setChecked] = useState(false)
  // Controlled / With label
  <Checkbox
    checked={checked}
    onCheckedChange={setChecked}
  >
    Label
  </Checkbox>
  // Controlled / Standalone
  <Checkbox
    checked={checked}
    onCheckedChange={setChecked}
  />
  // Uncontrolled
  <Checkbox
    defaultChecked={true}
  >
    Label
  </Checkbox>
  ```

  Breaking Changes:

  - Delete `CheckType` enum
  - Change the allowable value of the `checked` property:
    - AS-IS: `boolean | CheckType`
    - TO-BE: `boolean | 'indeterminate'`

## 1.0.0-next-v1.191

### Patch Changes

- [#1189](https://github.com/channel-io/bezier-react/pull/1189) [`cc7270dd`](https://github.com/channel-io/bezier-react/commit/cc7270dd84199ea2148623e7ceaba9ad5f5f9bf2) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Introduce `AlphaCenter` component.

- [#1174](https://github.com/channel-io/bezier-react/pull/1174) [`355fdaff`](https://github.com/channel-io/bezier-react/commit/355fdaffe472365dc6c18c6f77bd0c5cae40599c) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Implement `VisuallyHidden` component.

  `VisuallyHidden` is a component that visually hides the content. It doesn't render any DOM node. It is useful when you want to provide additional information to screen readers.

  ```tsx
  <VisuallyHidden>
    <span>This is a visually hidden text.</span>
  </VisuallyHidden>
  ```

## 1.0.0-next-v1.190

### Patch Changes

- [#1093](https://github.com/channel-io/bezier-react/pull/1093) [`0424db5f`](https://github.com/channel-io/bezier-react/commit/0424db5f01f97307738cdeb7b65e82c168369737) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Support BezierIcon type for icon prop as well as IconName type in following components

  - `Select`, `TextField`, `ListItem`, `KeyValuseListItem`, `OutlineItem`

## 1.0.0-next-v1.189

### Patch Changes

- [#1139](https://github.com/channel-io/bezier-react/pull/1139) [`ff323960`](https://github.com/channel-io/bezier-react/commit/ff323960173e5b49a371e59dd78255327fbef800) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add focused style to `Button` component.

## 1.0.0-next-v1.188

### Minor Changes

- [#1082](https://github.com/channel-io/bezier-react/pull/1082) [`89f18836`](https://github.com/channel-io/bezier-react/commit/89f1883616d0c460aaf5222328f334303773c238) Thanks [@Tanney-102](https://github.com/Tanney-102)! - - keyboard event locker added.
  - TextField and TextArea use keyboard event locker, so that they can block keyboard event handling for IME control keys while composing.

### Patch Changes

- [#1143](https://github.com/channel-io/bezier-react/pull/1143) [`53d83ba2`](https://github.com/channel-io/bezier-react/commit/53d83ba27f79ae81ab82836af047f8584919a1b8) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix to pass missing property of `Overlay` component.

- [#1079](https://github.com/channel-io/bezier-react/pull/1079) [`85d04e70`](https://github.com/channel-io/bezier-react/commit/85d04e709fb8114330650fc939a7915aab96a2c5) Thanks [@annie1229](https://github.com/annie1229)! - Remove and re-implement lodash-es

## 1.0.0-next-v1.187

### Minor Changes

- [#1136](https://github.com/channel-io/bezier-react/pull/1136) [`bf96d2db`](https://github.com/channel-io/bezier-react/commit/bf96d2db33886ca9dee74dabc16f9c18bdc786f1) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Organize z-index values and provide the `ZIndex` enum which is a preset of z-index values to help control the stacking order of components in consumer applications.

  Change the z-index value of the below components.

  - `Overlay`, `Select`: `1000` (container and content)
  - `Modal`: `1100`
  - `Toast`: `1200`
  - `Tooltip`: `1300`

## 1.0.0-next-v1.186

### Minor Changes

- [#1128](https://github.com/channel-io/bezier-react/pull/1128) [`e8593727`](https://github.com/channel-io/bezier-react/commit/e85937271b119e5fb68c8aeaa24d83b388716d1a) Thanks [@sungik-choi](https://github.com/sungik-choi)! - **Breaking changes**

  No longer provide `layout`-related modules (e.g. `LayoutProvider`, `GNB`...)

### Patch Changes

- [#1103](https://github.com/channel-io/bezier-react/pull/1103) [`3bdb95e1`](https://github.com/channel-io/bezier-react/commit/3bdb95e1a022370122afb4166cc2f138028cb72b) Thanks [@annie1229](https://github.com/annie1229)! - Add truncated prop to Text component

- [#1135](https://github.com/channel-io/bezier-react/pull/1135) [`ee776e66`](https://github.com/channel-io/bezier-react/commit/ee776e66f25e93e6a8c6a6fe181eb84159e8d985) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Delete Legacy `Modal` and `Tabs` components. Rename `LEGACY__RADIO` to `LegacyRadio`.

## 1.0.0-next-v1.185

### Patch Changes

- [#1132](https://github.com/channel-io/bezier-react/pull/1132) [`115f0d27`](https://github.com/channel-io/bezier-react/commit/115f0d2747132a1a65e4d8e5e842abb5c126c270) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Delete `RadioGroup`'s default generic parameter to fix type inferencing.

## 1.0.0-next-v1.184

### Patch Changes

- [#1131](https://github.com/channel-io/bezier-react/pull/1131) [`b4d80ecb`](https://github.com/channel-io/bezier-react/commit/b4d80ecb19e3ee00a91e87cee215662e4f31f76f) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Enhance the interface of `Radio` and `RadioGroup` components. Change `Radio` to render children when their value is evaluated as true.

- [#1129](https://github.com/channel-io/bezier-react/pull/1129) [`8d243d21`](https://github.com/channel-io/bezier-react/commit/8d243d215e4baa1832cb6bccdfe25e5d58f654ee) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix babel runtime error

## 1.0.0-next-v1.183

### Minor Changes

- [#1071](https://github.com/channel-io/bezier-react/pull/1071) [`8df05c64`](https://github.com/channel-io/bezier-react/commit/8df05c641807c7429f20c98dd9963383f146cd21) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `Radio` component.

  BREAKING CHANGES

  - Legacy `Radio` component is now exported with namespace `LEGACY__Radio`. It will be deprecated.
  - New `Radio` component must be used with the new `RadioGroup` component. See below.

  ```tsx
  // AS-IS
  <Radio
    value={value}
    watchingValue={watchingValue}
    onClick={() => setWatchingValue(value)}
  />

  // TO-BE
  <RadioGroup
    value={watchingValue}
    onChangeValue={setWatchingValue}
  >
    <Radio value={value} />
  </RadioGroup>
  ```

### Patch Changes

- [#1122](https://github.com/channel-io/bezier-react/pull/1122) [`48f6a3b2`](https://github.com/channel-io/bezier-react/commit/48f6a3b2c820638aa4cd5a1b212d77e4540a3013) Thanks [@heech1013](https://github.com/heech1013)! - Remove default value of event handler props in Icon component

- [#1120](https://github.com/channel-io/bezier-react/pull/1120) [`70efd997`](https://github.com/channel-io/bezier-react/commit/70efd9970e6790d1dc5c4fafe7268a386249a69f) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Fix bug that first StackItem has marginBefore when the preceding node is not valid element such as null or false

- [#1119](https://github.com/channel-io/bezier-react/pull/1119) [`1c52fcdc`](https://github.com/channel-io/bezier-react/commit/1c52fcdcf2934377213f7224290983cc9f7d3f62) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Decrease horizontal padding of XS size button to 2px

## 1.0.0-next-v1.182

### Patch Changes

- [#1118](https://github.com/channel-io/bezier-react/pull/1118) [`40d11807`](https://github.com/channel-io/bezier-react/commit/40d11807ad72f1f21ffe40aef9850c5be4f0c0bd) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

## 1.0.0-next-v1.181

### Patch Changes

- [#1107](https://github.com/channel-io/bezier-react/pull/1107) [`f6789fa2`](https://github.com/channel-io/bezier-react/commit/f6789fa2b0d8a2889c42163ba734e910ae01fe89) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1113](https://github.com/channel-io/bezier-react/pull/1113) [`3bd99b8d`](https://github.com/channel-io/bezier-react/commit/3bd99b8d573d0d7d9d0e58173adea57af2f64409) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1110](https://github.com/channel-io/bezier-react/pull/1110) [`b406a268`](https://github.com/channel-io/bezier-react/commit/b406a26827b774bb99ed54d227584f972afc24e5) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change modal floating style from `inset` to `top`...`left` position to support legacy browser

- [#1095](https://github.com/channel-io/bezier-react/pull/1095) [`3544182d`](https://github.com/channel-io/bezier-react/commit/3544182d75957616afd3d940d0c237784d45f974) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

## 1.0.0-next-v1.180

### Minor Changes

- [#1061](https://github.com/channel-io/bezier-react/pull/1061) [`d4e04675`](https://github.com/channel-io/bezier-react/commit/d4e046759a501f56513df1b31d76b34a3ff511e4) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Re-implement `Tabs` component

  BREAKING_CHANGES

  - The existing `Tabs` is renamed `LegacyTabs` and will be removed from following PR.
  - No longer use selectedOptionIndex in `Tabs`
  - Some props such as `withIndicator`, `optionKey` are removed from `TabItem`
  - Wrap with `TabContent` component for tab panel

## 1.0.0-next-v1.179

### Patch Changes

- [#1070](https://github.com/channel-io/bezier-react/pull/1070) [`78d217ec`](https://github.com/channel-io/bezier-react/commit/78d217ec20c85d4ec9485e40de1f9542a83aa29d) Thanks [@guswnsxodlf](https://github.com/guswnsxodlf)! - Enhance the Slider component

- [#1086](https://github.com/channel-io/bezier-react/pull/1086) [`9a50da65`](https://github.com/channel-io/bezier-react/commit/9a50da650f1d529941fa295ae304c4cca9b1b726) Thanks [@sungik-choi](https://github.com/sungik-choi)! - revert <https://github.com/channel-io/bezier-react/pull/1068>

## 1.0.0-next-v1.178

### Patch Changes

- [#1077](https://github.com/channel-io/bezier-react/pull/1077) [`84e9eef7`](https://github.com/channel-io/bezier-react/commit/84e9eef79d8424fb3696bf1c5d419fed43bc500b) Thanks [@sungik-choi](https://github.com/sungik-choi)! - - Make the `Modal` overlay scrollable and enhance styling to work well when the `ModalBody` is used stand-alone.

  - Delete hide animation of the `Modal`.

- [#1068](https://github.com/channel-io/bezier-react/pull/1068) [`65cdafa7`](https://github.com/channel-io/bezier-react/commit/65cdafa78b5551e39f657440ac54cc833c678163) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the `Text` component to use CSS Variable internally

## 1.0.0-next-v1.177

### Minor Changes

- [#1036](https://github.com/channel-io/bezier-react/pull/1036) [`e23c54a8`](https://github.com/channel-io/bezier-react/commit/e23c54a81fa6647e378985d660a95fcfedbd253a) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `Modal` component

  BREAKING_CHANGES

  - No longer use `BaseModal` for internal implementations of `Modal`.
  - The existing `Modal` is renamed `LegacyModal` and will be removed from subsequent PR.
  - The `ModalAction` component is renamed `ModalFooter`.
  - The `targetElement` property in `ModalProps` is renamed `container`.
  - The `showCloseIcon` property is moved from `ModalProps` to `ModalContentProps`.
  - The `title`, `subTitle`, `description`, and `titleSize` properties are moved from `ModalContentProps` to the new `ModalHeaderProps`.

- [#1002](https://github.com/channel-io/bezier-react/pull/1002) [`cb677dde`](https://github.com/channel-io/bezier-react/commit/cb677dde40d92582f8fade504b54ee8532d3ae0f) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Apply `@radix-ui/react-switch` primitives to `Switch` component

  BREAKING CHANGE:

  - `onClick` handler is now `React.MouseEventHandler<HTMLButtonElement>`.
  - `Switch` component is now `HTMLButtonElement`.

- [#1050](https://github.com/channel-io/bezier-react/pull/1050) [`052fdb91`](https://github.com/channel-io/bezier-react/commit/052fdb9118667b1f57ae4356329f85b4172124e3) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `ConfirmModal` component

  BREAKING CHANGES:

  - `onConfirm` prop of `ConfirmModal` has been removed.

### Patch Changes

- [#1062](https://github.com/channel-io/bezier-react/pull/1062) [`d38bcb42`](https://github.com/channel-io/bezier-react/commit/d38bcb42e823f14778e70e3e46d479c6e17200b8) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the `AvatarGroup` component to use CSS Variable internally

- [#1067](https://github.com/channel-io/bezier-react/pull/1067) [`314e698e`](https://github.com/channel-io/bezier-react/commit/314e698ecce5f3ed5a5624e1448f6ac915aa7c0b) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#1063](https://github.com/channel-io/bezier-react/pull/1063) [`d924b727`](https://github.com/channel-io/bezier-react/commit/d924b727492e1a7fbb75b67b6f933b4e08a63adf) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the `Status` component to use CSS Variable internally

## 1.0.0-next-v1.176

### Minor Changes

- [#1048](https://github.com/channel-io/bezier-react/pull/1048) [`fe9640b0`](https://github.com/channel-io/bezier-react/commit/fe9640b071fa98d903c9a2ddf1fc48c16741be0c) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change return value of `getRootElement()` from element with specific id to `document.body` element

### Patch Changes

- [#1018](https://github.com/channel-io/bezier-react/pull/1018) [`8635cd56`](https://github.com/channel-io/bezier-react/commit/8635cd560cb22a47f03615cda0e54899ce2d5575) Thanks [@junbong](https://github.com/junbong)! - fix(Text): add handling code for unhandled interpolation prop

- [#1052](https://github.com/channel-io/bezier-react/pull/1052) [`278338ef`](https://github.com/channel-io/bezier-react/commit/278338ef8cb2ff79ddb23ae630e7f5c42ebdae67) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Revert the removed `size` property of the `TextField`'s internal `input` element.

## 1.0.0-next-v1.175

### Minor Changes

- [#1030](https://github.com/channel-io/bezier-react/pull/1030) [`f407fca8`](https://github.com/channel-io/bezier-react/commit/f407fca865efeff8fe7f0fc0bba296c2731c41be) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the default value of the `Stack`'s `align` prop from `start` to `stretch`

### Patch Changes

- [#1029](https://github.com/channel-io/bezier-react/pull/1029) [`e5e5625a`](https://github.com/channel-io/bezier-react/commit/e5e5625aa68f4633e6b6a993e196a822bbe6391d) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add justify prop to ButtonGroup component

- [#1031](https://github.com/channel-io/bezier-react/pull/1031) [`1afab062`](https://github.com/channel-io/bezier-react/commit/1afab062d9919bc0d3b55fa0dcf12c0ed0090842) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#1028](https://github.com/channel-io/bezier-react/pull/1028) [`d6b28529`](https://github.com/channel-io/bezier-react/commit/d6b285296fc444dee7d0fd720d915a21b956f360) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Update the font-size of the TextField component per size

- [#1020](https://github.com/channel-io/bezier-react/pull/1020) [`33baadb1`](https://github.com/channel-io/bezier-react/commit/33baadb17701fe9265179137eb69df4ab1bf836e) Thanks [@junbong](https://github.com/junbong)! - fix(ModalContent): invalid modal title size

## 1.0.0-next-v1.174

### Minor Changes

- [#945](https://github.com/channel-io/bezier-react/pull/945) [`51e45692`](https://github.com/channel-io/bezier-react/commit/51e45692d3fb20f2937cf857ed4357a323345127) Thanks [@dinohan](https://github.com/dinohan)! - change the font-weight of bold text from 600 to 'bold'

- [#1006](https://github.com/channel-io/bezier-react/pull/1006) [`d90c27a1`](https://github.com/channel-io/bezier-react/commit/d90c27a1d7ed27512ce204073bf4d6655240584f) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Add `bg-black-darker` semantic color, update `bg-black-darkest` palette

  BREAKING_CHANGE: `bg-black-darkest` is now `Palette.black_60` on `LightTheme`, `Palette.white_60` on `DarkTheme`.

### Patch Changes

- [#1014](https://github.com/channel-io/bezier-react/pull/1014) [`a6b42ed3`](https://github.com/channel-io/bezier-react/commit/a6b42ed3bbac68e375e90ab18dcd4b376285958f) Thanks [@leejiwoo2002](https://github.com/leejiwoo2002)! - Export ServerStyleSheet Function for SSR Support

- [#1026](https://github.com/channel-io/bezier-react/pull/1026) [`80f33585`](https://github.com/channel-io/bezier-react/commit/80f33585aadf9d616a1ebfe64e3bd2975cf768aa) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Change `BaseModal` animation to scale-based animation

- [#934](https://github.com/channel-io/bezier-react/pull/934) [`650d31bd`](https://github.com/channel-io/bezier-react/commit/650d31bdf0b9ff64bebac872378ec18799c3b468) Thanks [@aooen](https://github.com/aooen)! - Reduce bundle size (apply minify for styled-components)

- [#1015](https://github.com/channel-io/bezier-react/pull/1015) [`7d3c76c9`](https://github.com/channel-io/bezier-react/commit/7d3c76c98347279504d589941dff1af73eff988b) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Apply `font-family: 'Inter'` as StoryBook global style

## 1.0.0-next-v1.173

### Patch Changes

- [#1001](https://github.com/channel-io/bezier-react/pull/1001) [`ca1c6145`](https://github.com/channel-io/bezier-react/commit/ca1c6145d9596a14264bd67b3acfdcdadb215e84) Thanks [@aooen](https://github.com/aooen)! - make xs tagbadge more smaller

## 1.0.0-next-v1.172

### Minor Changes

- [#871](https://github.com/channel-io/bezier-react/pull/871) [`29c4a62b`](https://github.com/channel-io/bezier-react/commit/29c4a62bcb92b5bc888b44bcbc00437fbccadca8) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Add Slider component

## 1.0.0-next-v1.171

### Patch Changes

- [#937](https://github.com/channel-io/bezier-react/pull/937) [`bb8a978d`](https://github.com/channel-io/bezier-react/commit/bb8a978d9b9cdce72bd776c96db9fa78e074ea2e) Thanks [@sungik-choi](https://github.com/sungik-choi)! - - For avoiding text overflow, Change FormControl grid label cell size from flex to fixed.
  - For avoiding text overflow, Add 'work-break: break-word' style to FormLabel.
  - For avoiding text overflow, Add flex-shrink style to StackItem which is wrapping FormLabel when there is 'help'.

## 1.0.0-next-v1.170

### Patch Changes

- [#935](https://github.com/channel-io/bezier-react/pull/935) [`174805b1`](https://github.com/channel-io/bezier-react/commit/174805b18029459755423c847566a177f750cf09) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

## 1.0.0-next-v1.169

### Minor Changes

- [#932](https://github.com/channel-io/bezier-react/pull/932) [`c84d1dad`](https://github.com/channel-io/bezier-react/commit/c84d1dad859ede979b9eef716bac42de8e028c8d) Thanks [@dinohan](https://github.com/dinohan)! - feat(form-label): make prop help can recieve Help component
  feat(help): implements Help component

## 1.0.0-next-v1.168

### Minor Changes

- [#930](https://github.com/channel-io/bezier-react/pull/930) [`ee01d66d`](https://github.com/channel-io/bezier-react/commit/ee01d66dca77f95b09c72a45b26e96d54a993ad2) Thanks [@dinohan](https://github.com/dinohan)! - Add new semantic color 'bg-lounge'

### Patch Changes

- [#928](https://github.com/channel-io/bezier-react/pull/928) [`82c8d17b`](https://github.com/channel-io/bezier-react/commit/82c8d17b589bc1ed308da847f8c1a5f59e62ab1d) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Bump @radix-ui/react-separator to 1.0.0, Add ResizeObserver jest mock

## 1.0.0-next-v1.167

### Minor Changes

- [#873](https://github.com/channel-io/bezier-react/pull/873) [`3b484673`](https://github.com/channel-io/bezier-react/commit/3b484673f37d1d46b1e6425379e34284b2386aee) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Add withoutIndent prop and apply Radix to Divider component

  BREAKING_CHANGE: Divider is no longer HR, but DIV

### Patch Changes

- [#924](https://github.com/channel-io/bezier-react/pull/924) [`2050b668`](https://github.com/channel-io/bezier-react/commit/2050b6680aee060378c94f1409be3efd597fd45e) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Change word-break property of Modal content

- [#927](https://github.com/channel-io/bezier-react/pull/927) [`ae5f5b6d`](https://github.com/channel-io/bezier-react/commit/ae5f5b6da051b76722aca0ae0697b3963eece463) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

## 1.0.0-next-v1.166

### Patch Changes

- [#920](https://github.com/channel-io/bezier-react/pull/920) [`b559bd1d`](https://github.com/channel-io/bezier-react/commit/b559bd1d8a8fe4bac5a8931da7acd72cc59dcb9c) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

## 1.0.0-next-v1.165

### Minor Changes

- [#913](https://github.com/channel-io/bezier-react/pull/913) [`38aec7d6`](https://github.com/channel-io/bezier-react/commit/38aec7d6612b493439b41b358a54c947011a299e) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Add size17 option to Typography

### Patch Changes

- [#915](https://github.com/channel-io/bezier-react/pull/915) [`d581fb04`](https://github.com/channel-io/bezier-react/commit/d581fb04843aea1810aade3f8a174b3a1fac9532) Thanks [@Tanney-102](https://github.com/Tanney-102)! - Update icon size L from 34 to 36

## 1.0.0-next-v1.164

### Patch Changes

- [#909](https://github.com/channel-io/bezier-react/pull/909) [`77859565`](https://github.com/channel-io/bezier-react/commit/77859565b9d5f11feedae1b90d3232f4c3001875) Thanks [@Seolhun](https://github.com/Seolhun)! - add toast update feature

## 1.0.0-next-v1.163

### Patch Changes

- [#907](https://github.com/channel-io/bezier-react/pull/907) [`af5cb6f8`](https://github.com/channel-io/bezier-react/commit/af5cb6f8c3947fb26e258016e540a20c576b6c61) Thanks [@guswnsxodlf](https://github.com/guswnsxodlf)! - Add floating-alt style variant in Button element

## 1.0.0-next-v1.162

### Patch Changes

- [#892](https://github.com/channel-io/bezier-react/pull/892) [`3040ea5d`](https://github.com/channel-io/bezier-react/commit/3040ea5d5538ece8350ca5f2860e0c4e97c0e69e) Thanks [@aooen](https://github.com/aooen)! - Manage visibility of sidePanel and sideView at main layout prop

  BREAKING CHANGE

  - No longer use useSidePanelHandler and useSideViewHandler. Use set Main prop SidePanelComponent, SideViewComponent to undefined instead.

## 1.0.0-next-v1.161

### Patch Changes

- [#901](https://github.com/channel-io/bezier-react/pull/901) [`9be5d909`](https://github.com/channel-io/bezier-react/commit/9be5d9095b6fc753c42ba87fc88f530117f3ed8d) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Apply CSS default value to the align, justify properties of FormGroup component.

- [#896](https://github.com/channel-io/bezier-react/pull/896) [`6d07015f`](https://github.com/channel-io/bezier-react/commit/6d07015fd59590c17ef9a7e9a2961ed31ae518f5) Thanks [@Seolhun](https://github.com/Seolhun)! - refactor(key-value-list-item): change key and value component styles removed fixed height and given default color

- [#894](https://github.com/channel-io/bezier-react/pull/894) [`ba49e2e8`](https://github.com/channel-io/bezier-react/commit/ba49e2e8123d85d4fbfae7bd462d28ca058fa1a0) Thanks [@Seolhun](https://github.com/Seolhun)! - refactor(toast): change toast content props "string" to "react-node"

## 1.0.0-next-v1.160

### Minor Changes

- [#866](https://github.com/channel-io/bezier-react/pull/866) [`eceaa9e7`](https://github.com/channel-io/bezier-react/commit/eceaa9e7a26765e03a78a6fd97f50c8e1e112303) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change FormGroup implementation to use Stack internally

  BREAKING CHANGE

  - Change 'gap' prop to 'spacing' prop
  - Change the allowable value of 'direction' prop to be the same as Stack

## 1.0.0-next-v1.159

### Minor Changes

- [#878](https://github.com/channel-io/bezier-react/pull/878) [`fa1e0d76`](https://github.com/channel-io/bezier-react/commit/fa1e0d7692204b8207911284e6c61c3c92860842) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add ButtonGroup component

### Patch Changes

- [#874](https://github.com/channel-io/bezier-react/pull/874) [`fa944351`](https://github.com/channel-io/bezier-react/commit/fa9443517bf105e9dc3082537ed42e9975902d0c) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Add keypad icon

## 1.0.0-next-v1.158

### Patch Changes

- [#867](https://github.com/channel-io/bezier-react/pull/867) [`5ada881b`](https://github.com/channel-io/bezier-react/commit/5ada881b4bb7c788a5d8259f8e47df615e0ca3e4) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Fix style bug: background color of switch handle is overridden by elevation css

## 1.0.0-next-v1.157

### Patch Changes

- [#861](https://github.com/channel-io/bezier-react/pull/861) [`f530f952`](https://github.com/channel-io/bezier-react/commit/f530f952718ebda5eb1b20ba2f99ed2c1d7258cc) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Change project license to Apache-2.0

- [#848](https://github.com/channel-io/bezier-react/pull/848) [`1053fd1b`](https://github.com/channel-io/bezier-react/commit/1053fd1b5c9f1933e8c6e6cf96cab1a7644458a3) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Fix Switch component implementation to follow Bezier Figma spec

- [#865](https://github.com/channel-io/bezier-react/pull/865) [`7ef5ffcc`](https://github.com/channel-io/bezier-react/commit/7ef5ffcc3f3f91198682f561fd41fb2209eb2f42) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the distribute icon

- [#862](https://github.com/channel-io/bezier-react/pull/862) [`3af0187c`](https://github.com/channel-io/bezier-react/commit/3af0187c6506a9207b5d2e4887fc5d522afbee2f) Thanks [@kimminkyung94](https://github.com/kimminkyung94)! - Update the icons

- [#811](https://github.com/channel-io/bezier-react/pull/811) [`535b20d9`](https://github.com/channel-io/bezier-react/commit/535b20d9c4f58a05897ae2decc6d98120b54d0ab) Thanks [@inhibitor1217](https://github.com/inhibitor1217)! - add storybook documentation for Button component

## 1.0.0-next-v1.156

### Patch Changes

- [#857](https://github.com/channel-io/bezier-react/pull/857) [`f4bcf942`](https://github.com/channel-io/bezier-react/commit/f4bcf942c2521bb990b209dbcc4aa29c5689daae) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Apply changesets
