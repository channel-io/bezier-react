import { type SourceFile } from 'ts-morph'

import {
  type EnumTransformMap,
  transformEnumToStringLiteralInBezier,
} from '../../shared/enum.js'

const ENUM_TRANSFORM_MAP: EnumTransformMap = {
  ProgressBarSize: {
    M: 'm',
    S: 's',
  },
  AvatarSize: {
    Size20: '20',
    Size24: '24',
    Size30: '30',
    Size36: '36',
    Size42: '42',
    Size48: '48',
    Size72: '72',
    Size90: '90',
    Size120: '120',
  },
  BannerVariant: {
    Default: 'default',
    Blue: 'blue',
    Cobalt: 'cobalt',
    Green: 'green',
    Orange: 'orange',
    Red: 'red',
    Alt: 'alt',
  },
  ButtonStyleVariant: {
    Primary: 'primary',
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Floating: 'floating',
    FloatingAlt: 'floating-alt',
  },
  ButtonColorVariant: {
    Blue: 'blue',
    Red: 'red',
    Green: 'green',
    Cobalt: 'cobalt',
    Orange: 'orange',
    Pink: 'pink',
    Purple: 'purple',
    Monochrome: 'monochrome',
    MonochromeLight: 'monochrome-light',
    MonochromeDark: 'monochrome-dark',
  },
  ButtonSize: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  EmojiSize: {
    Size16: '16',
    Size20: '20',
    Size24: '24',
    Size30: '30',
    Size36: '36',
    Size42: '42',
    Size48: '48',
    Size60: '60',
    Size72: '72',
    Size90: '90',
    Size120: '120',
  },
  SegmentedControlSize: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
  },
  ListItemSize: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
  },
  ListItemVariant: {
    Blue: 'blue',
    Red: 'red',
    Green: 'green',
    Cobalt: 'cobalt',
    Monochrome: 'monochrome',
  },
  TabSize: {
    L: 'l',
    M: 'm',
    S: 's',
  },
  StatusType: {
    Online: 'online',
    Offline: 'offline',
    Lock: 'lock',
    OnlineCrescent: 'online-crescent',
    OfflineCrescent: 'offline-crescent',
  },
  StatusSize: {
    M: 'm',
    L: 'l',
  },
  ProgressBarVariant: {
    Green: 'green',
    GreenAlt: 'green-alt',
    Monochrome: 'monochrome',
  },
  ModalTitleSize: {
    L: 'l',
    M: 'm',
  },
  ToastPlacement: {
    BottomLeft: 'bottom-left',
    BottomRight: 'bottom-right',
  },
  ToastAppearance: {
    Success: 'success',
    Warning: 'warning',
    Error: 'error',
    Info: 'info',
  },
  ToastPreset: {
    Default: 'default',
    Success: 'success',
    Error: 'error',
    Offline: 'offline',
    Online: 'online',
  },
  SpinnerSize: {
    XL: 'xl',
    L: 'l',
    M: 'm',
    S: 's',
    XS: 'xs',
  },
  SwitchSize: {
    M: 'm',
    S: 's',
  },
  TooltipPosition: {
    TopCenter: 'top-center',
    TopLeft: 'top-left',
    TopRight: 'top-right',
    RightCenter: 'right-center',
    RightTop: 'right-top',
    RightBottom: 'right-bottom',
    BottomCenter: 'bottom-center',
    BottomLeft: 'bottom-left',
    BottomRight: 'bottom-right',
    LeftCenter: 'left-center',
    LeftTop: 'left-top',
    LeftBottom: 'left-bottom',
  },
  LegacyTooltipPosition: {
    TopCenter: 'top-center',
    TopLeft: 'top-left',
    TopRight: 'top-right',
    RightCenter: 'right-center',
    RightTop: 'right-top',
    RightBottom: 'right-bottom',
    BottomCenter: 'bottom-center',
    BottomLeft: 'bottom-left',
    BottomRight: 'bottom-right',
    LeftCenter: 'left-center',
    LeftTop: 'left-top',
    LeftBottom: 'left-bottom',
  },
  OverlayPosition: {
    TopCenter: 'top-center',
    TopLeft: 'top-left',
    TopRight: 'top-right',
    RightCenter: 'right-center',
    RightTop: 'right-top',
    RightBottom: 'right-bottom',
    BottomCenter: 'bottom-center',
    BottomLeft: 'bottom-left',
    BottomRight: 'bottom-right',
    LeftCenter: 'left-center',
    LeftTop: 'left-top',
    LeftBottom: 'left-bottom',
    InnerLeftTop: 'inner-left-top',
    InnerLeftBottom: 'inner-left-bottom',
    InnerRightTop: 'inner-right-top',
    InnerRightBottom: 'inner-right-bottom',
  },
  TextFieldType: {
    Search: 'search',
    Text: 'text',
    Email: 'email',
    Password: 'password',
    Tel: 'tel',
    Url: 'url',
    Hidden: 'hidden',
    Number: 'number',
  },
  TextFieldVariant: {
    Primary: 'primary',
    Secondary: 'secondary',
  },
  TagBadgeVariant: {
    Default: 'default',
    MonochromeLight: 'monochrome-light',
    MonochromeDark: 'monochrome-dark',
    Blue: 'blue',
    Cobalt: 'cobalt',
    Teal: 'teal',
    Green: 'green',
    Olive: 'olive',
    Pink: 'pink',
    Navy: 'navy',
    Yellow: 'yellow',
    Orange: 'orange',
    Red: 'red',
    Purple: 'purple',
  },
  TagBadgeSize: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
  },
  IconSize: {
    XL: 'xl',
    L: 'l',
    Normal: 'normal',
    S: 's',
    XS: 'xs',
    XXS: 'xxs',
    XXXS: 'xxxs',
  },
  TextAreaHeight: {
    Row3: 3,
    Row6: 6,
    Row10: 10,
    Row16: 16,
    Row24: 24,
    Row36: 36,
  },
  AvatarGroupEllipsisType: {
    Icon: 'icon',
    Count: 'count',
  },
}

function enumMemberToStringLiteral(sourceFile: SourceFile): true | void {
  return transformEnumToStringLiteralInBezier(sourceFile, ENUM_TRANSFORM_MAP)
}

export default enumMemberToStringLiteral