# @channel.io/bezier-react

## 1.0.0-next-v1.178

### Patch Changes

- [#1077](https://github.com/channel-io/bezier-react/pull/1077) [`84e9eef7`](https://github.com/channel-io/bezier-react/commit/84e9eef79d8424fb3696bf1c5d419fed43bc500b) Thanks [@sungik-choi](https://github.com/sungik-choi)! - - Make the `Modal` overlay scrollable and enhance styling to work well when the `ModalBody` is used stand-alone.
  - Delete hide animation of the `Modal`.

* [#1068](https://github.com/channel-io/bezier-react/pull/1068) [`65cdafa7`](https://github.com/channel-io/bezier-react/commit/65cdafa78b5551e39f657440ac54cc833c678163) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the `Text` component to use CSS Variable internally

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

* [#1002](https://github.com/channel-io/bezier-react/pull/1002) [`cb677dde`](https://github.com/channel-io/bezier-react/commit/cb677dde40d92582f8fade504b54ee8532d3ae0f) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Apply `@radix-ui/react-switch` primitives to `Switch` component

  BREAKING CHANGE:

  - `onClick` handler is now `React.MouseEventHandler<HTMLButtonElement>`.
  - `Switch` component is now `HTMLButtonElement`.

- [#1050](https://github.com/channel-io/bezier-react/pull/1050) [`052fdb91`](https://github.com/channel-io/bezier-react/commit/052fdb9118667b1f57ae4356329f85b4172124e3) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Re-implement `ConfirmModal` component

  BREAKING CHANGES:

  - `onConfirm` prop of `ConfirmModal` has been removed.

### Patch Changes

- [#1062](https://github.com/channel-io/bezier-react/pull/1062) [`d38bcb42`](https://github.com/channel-io/bezier-react/commit/d38bcb42e823f14778e70e3e46d479c6e17200b8) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the `AvatarGroup` component to use CSS Variable internally

* [#1067](https://github.com/channel-io/bezier-react/pull/1067) [`314e698e`](https://github.com/channel-io/bezier-react/commit/314e698ecce5f3ed5a5624e1448f6ac915aa7c0b) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#1063](https://github.com/channel-io/bezier-react/pull/1063) [`d924b727`](https://github.com/channel-io/bezier-react/commit/d924b727492e1a7fbb75b67b6f933b4e08a63adf) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the `Status` component to use CSS Variable internally

## 1.0.0-next-v1.176

### Minor Changes

- [#1048](https://github.com/channel-io/bezier-react/pull/1048) [`fe9640b0`](https://github.com/channel-io/bezier-react/commit/fe9640b071fa98d903c9a2ddf1fc48c16741be0c) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change return value of `getRootElement()` from element with specific id to `document.body` element

### Patch Changes

- [#1018](https://github.com/channel-io/bezier-react/pull/1018) [`8635cd56`](https://github.com/channel-io/bezier-react/commit/8635cd560cb22a47f03615cda0e54899ce2d5575) Thanks [@junbong](https://github.com/junbong)! - fix(Text): add handling code for unhandled interpolation prop

* [#1052](https://github.com/channel-io/bezier-react/pull/1052) [`278338ef`](https://github.com/channel-io/bezier-react/commit/278338ef8cb2ff79ddb23ae630e7f5c42ebdae67) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Revert the removed `size` property of the `TextField`'s internal `input` element.

## 1.0.0-next-v1.175

### Minor Changes

- [#1030](https://github.com/channel-io/bezier-react/pull/1030) [`f407fca8`](https://github.com/channel-io/bezier-react/commit/f407fca865efeff8fe7f0fc0bba296c2731c41be) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change the default value of the `Stack`'s `align` prop from `start` to `stretch`

### Patch Changes

- [#1029](https://github.com/channel-io/bezier-react/pull/1029) [`e5e5625a`](https://github.com/channel-io/bezier-react/commit/e5e5625aa68f4633e6b6a993e196a822bbe6391d) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Add justify prop to ButtonGroup component

* [#1031](https://github.com/channel-io/bezier-react/pull/1031) [`1afab062`](https://github.com/channel-io/bezier-react/commit/1afab062d9919bc0d3b55fa0dcf12c0ed0090842) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the icons

- [#1028](https://github.com/channel-io/bezier-react/pull/1028) [`d6b28529`](https://github.com/channel-io/bezier-react/commit/d6b285296fc444dee7d0fd720d915a21b956f360) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Update the font-size of the TextField component per size

* [#1020](https://github.com/channel-io/bezier-react/pull/1020) [`33baadb1`](https://github.com/channel-io/bezier-react/commit/33baadb17701fe9265179137eb69df4ab1bf836e) Thanks [@junbong](https://github.com/junbong)! - fix(ModalContent): invalid modal title size

## 1.0.0-next-v1.174

### Minor Changes

- [#945](https://github.com/channel-io/bezier-react/pull/945) [`51e45692`](https://github.com/channel-io/bezier-react/commit/51e45692d3fb20f2937cf857ed4357a323345127) Thanks [@dinohan](https://github.com/dinohan)! - change the font-weight of bold text from 600 to 'bold'

* [#1006](https://github.com/channel-io/bezier-react/pull/1006) [`d90c27a1`](https://github.com/channel-io/bezier-react/commit/d90c27a1d7ed27512ce204073bf4d6655240584f) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Add `bg-black-darker` semantic color, update `bg-black-darkest` palette

  BREAKING_CHANGE: `bg-black-darkest` is now `Palette.black_60` on `LightTheme`, `Palette.white_60` on `DarkTheme`.

### Patch Changes

- [#1014](https://github.com/channel-io/bezier-react/pull/1014) [`a6b42ed3`](https://github.com/channel-io/bezier-react/commit/a6b42ed3bbac68e375e90ab18dcd4b376285958f) Thanks [@leejiwoo2002](https://github.com/leejiwoo2002)! - Export ServerStyleSheet Function for SSR Support

* [#1026](https://github.com/channel-io/bezier-react/pull/1026) [`80f33585`](https://github.com/channel-io/bezier-react/commit/80f33585aadf9d616a1ebfe64e3bd2975cf768aa) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Change `BaseModal` animation to scale-based animation

- [#934](https://github.com/channel-io/bezier-react/pull/934) [`650d31bd`](https://github.com/channel-io/bezier-react/commit/650d31bdf0b9ff64bebac872378ec18799c3b468) Thanks [@aooen](https://github.com/aooen)! - Reduce bundle size (apply minify for styled-components)

* [#1015](https://github.com/channel-io/bezier-react/pull/1015) [`7d3c76c9`](https://github.com/channel-io/bezier-react/commit/7d3c76c98347279504d589941dff1af73eff988b) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Apply `font-family: 'Inter'` as StoryBook global style

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

* [#927](https://github.com/channel-io/bezier-react/pull/927) [`ae5f5b6d`](https://github.com/channel-io/bezier-react/commit/ae5f5b6da051b76722aca0ae0697b3963eece463) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

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

* [#896](https://github.com/channel-io/bezier-react/pull/896) [`6d07015f`](https://github.com/channel-io/bezier-react/commit/6d07015fd59590c17ef9a7e9a2961ed31ae518f5) Thanks [@Seolhun](https://github.com/Seolhun)! - refactor(key-value-list-item): change key and value component styles removed fixed height and given default color

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

* [#848](https://github.com/channel-io/bezier-react/pull/848) [`1053fd1b`](https://github.com/channel-io/bezier-react/commit/1053fd1b5c9f1933e8c6e6cf96cab1a7644458a3) Thanks [@Dogdriip](https://github.com/Dogdriip)! - Fix Switch component implementation to follow Bezier Figma spec

- [#865](https://github.com/channel-io/bezier-react/pull/865) [`7ef5ffcc`](https://github.com/channel-io/bezier-react/commit/7ef5ffcc3f3f91198682f561fd41fb2209eb2f42) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update the distribute icon

* [#862](https://github.com/channel-io/bezier-react/pull/862) [`3af0187c`](https://github.com/channel-io/bezier-react/commit/3af0187c6506a9207b5d2e4887fc5d522afbee2f) Thanks [@kimminkyung94](https://github.com/kimminkyung94)! - Update the icons

- [#811](https://github.com/channel-io/bezier-react/pull/811) [`535b20d9`](https://github.com/channel-io/bezier-react/commit/535b20d9c4f58a05897ae2decc6d98120b54d0ab) Thanks [@inhibitor1217](https://github.com/inhibitor1217)! - add storybook documentation for Button component

## 1.0.0-next-v1.156

### Patch Changes

- [#857](https://github.com/channel-io/bezier-react/pull/857) [`f4bcf942`](https://github.com/channel-io/bezier-react/commit/f4bcf942c2521bb990b209dbcc4aa29c5689daae) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Apply changesets
