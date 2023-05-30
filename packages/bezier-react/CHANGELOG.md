# @channel.io/bezier-react

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
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setContainer}>
      <Tooltip content="Lorem ipsum" container={container}>
        <div />
      </Tooltip>
    </div>
  );
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
  } from "@channel.io/bezier-react";

  root.render(
    <FeatureProvider features={[SmoothCornersFeature]}>
      <BezierProvider>
        <App />
      </BezierProvider>
    </FeatureProvider>
  );
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

- [#1086](https://github.com/channel-io/bezier-react/pull/1086) [`9a50da65`](https://github.com/channel-io/bezier-react/commit/9a50da650f1d529941fa295ae304c4cca9b1b726) Thanks [@sungik-choi](https://github.com/sungik-choi)! - revert https://github.com/channel-io/bezier-react/pull/1068

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
  } from "@channel.io/bezier-react";

  root.render(
    <FeatureProvider features={[SmoothCornersFeature]}>
      <BezierProvider>
        <App />
      </BezierProvider>
    </FeatureProvider>
  );
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
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setContainer}>
      <Tooltip content="Lorem ipsum" container={container}>
        <div />
      </Tooltip>
    </div>
  );
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

* [#1079](https://github.com/channel-io/bezier-react/pull/1079) [`85d04e70`](https://github.com/channel-io/bezier-react/commit/85d04e709fb8114330650fc939a7915aab96a2c5) Thanks [@annie1229](https://github.com/annie1229)! - Remove and re-implement lodash-es

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

* [#1135](https://github.com/channel-io/bezier-react/pull/1135) [`ee776e66`](https://github.com/channel-io/bezier-react/commit/ee776e66f25e93e6a8c6a6fe181eb84159e8d985) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Delete Legacy `Modal` and `Tabs` components. Rename `LEGACY__RADIO` to `LegacyRadio`.

## 1.0.0-next-v1.185

### Patch Changes

- [#1132](https://github.com/channel-io/bezier-react/pull/1132) [`115f0d27`](https://github.com/channel-io/bezier-react/commit/115f0d2747132a1a65e4d8e5e842abb5c126c270) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Delete `RadioGroup`'s default generic parameter to fix type inferencing.

## 1.0.0-next-v1.184

### Patch Changes

- [#1131](https://github.com/channel-io/bezier-react/pull/1131) [`b4d80ecb`](https://github.com/channel-io/bezier-react/commit/b4d80ecb19e3ee00a91e87cee215662e4f31f76f) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Enhance the interface of `Radio` and `RadioGroup` components. Change `Radio` to render children when their value is evaluated as true.

* [#1129](https://github.com/channel-io/bezier-react/pull/1129) [`8d243d21`](https://github.com/channel-io/bezier-react/commit/8d243d215e4baa1832cb6bccdfe25e5d58f654ee) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Fix babel runtime error

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

* [#1120](https://github.com/channel-io/bezier-react/pull/1120) [`70efd997`](https://github.com/channel-io/bezier-react/commit/70efd9970e6790d1dc5c4fafe7268a386249a69f) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Fix bug that first StackItem has marginBefore when the preceding node is not valid element such as null or false

- [#1119](https://github.com/channel-io/bezier-react/pull/1119) [`1c52fcdc`](https://github.com/channel-io/bezier-react/commit/1c52fcdcf2934377213f7224290983cc9f7d3f62) Thanks [@yangwooseong](https://github.com/yangwooseong)! - Decrease horizontal padding of XS size button to 2px

## 1.0.0-next-v1.182

### Patch Changes

- [#1118](https://github.com/channel-io/bezier-react/pull/1118) [`40d11807`](https://github.com/channel-io/bezier-react/commit/40d11807ad72f1f21ffe40aef9850c5be4f0c0bd) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

## 1.0.0-next-v1.181

### Patch Changes

- [#1107](https://github.com/channel-io/bezier-react/pull/1107) [`f6789fa2`](https://github.com/channel-io/bezier-react/commit/f6789fa2b0d8a2889c42163ba734e910ae01fe89) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

* [#1113](https://github.com/channel-io/bezier-react/pull/1113) [`3bd99b8d`](https://github.com/channel-io/bezier-react/commit/3bd99b8d573d0d7d9d0e58173adea57af2f64409) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

- [#1110](https://github.com/channel-io/bezier-react/pull/1110) [`b406a268`](https://github.com/channel-io/bezier-react/commit/b406a26827b774bb99ed54d227584f972afc24e5) Thanks [@sungik-choi](https://github.com/sungik-choi)! - Change modal floating style from `inset` to `top`...`left` position to support legacy browser

* [#1095](https://github.com/channel-io/bezier-react/pull/1095) [`3544182d`](https://github.com/channel-io/bezier-react/commit/3544182d75957616afd3d940d0c237784d45f974) Thanks [@Jamie-channel](https://github.com/Jamie-channel)! - Update icons

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

* [#1086](https://github.com/channel-io/bezier-react/pull/1086) [`9a50da65`](https://github.com/channel-io/bezier-react/commit/9a50da650f1d529941fa295ae304c4cca9b1b726) Thanks [@sungik-choi](https://github.com/sungik-choi)! - revert https://github.com/channel-io/bezier-react/pull/1068

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
