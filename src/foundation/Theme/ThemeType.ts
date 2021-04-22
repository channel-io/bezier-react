/**
 * version: 1
 */

/* Internal dependencies */
import BasePaletteKey, {
  BaseMonoPaletteKey,
  BaseColorfulPaletteKey,
} from './Palette/BasePaletteKey'

type MonoBackgroundColor =
  | `bg-${BaseMonoPaletteKey}-darkest`
  | `bg-${BaseMonoPaletteKey}-darker`
  | `bg-${BaseMonoPaletteKey}-dark`
  | `bg-${BaseMonoPaletteKey}-light`
  | `bg-${BaseMonoPaletteKey}-lighter`
  | `bg-${BaseMonoPaletteKey}-lightest`

type LayoutBackgroundColor =
  | 'bg-gnb'
  | 'bg-navi'
  | 'bg-header'
  | 'bg-header-float'

type ElevationBackgroundColor =
  | 'bg-white-high'
  | 'bg-white-normal'
  | 'bg-white-low'

type TextColor =
  | `txt-${BasePaletteKey.black}-darkest`
  | `txt-${BasePaletteKey.black}-darker`
  | `txt-${BasePaletteKey.black}-dark`
  | `txt-${BasePaletteKey.white}-normal`

type ColorfulTextAndBackgroundColor =
  | `bgtxt-${BaseColorfulPaletteKey}-dark`
  | `bgtxt-${BaseColorfulPaletteKey}-normal`
  | `bgtxt-${BaseColorfulPaletteKey}-light`
  | `bgtxt-${BaseColorfulPaletteKey}-lighter`
  | `bgtxt-${BaseColorfulPaletteKey}-lightest`

type MonoAbsoluteTextAndBackgroundColor =
  | `bgtxt-absolute-${BaseMonoPaletteKey}-dark`
  | `bgtxt-absolute-${BaseMonoPaletteKey}-normal`
  | `bgtxt-absolute-${BaseMonoPaletteKey}-light`
  | `bgtxt-absolute-${BaseMonoPaletteKey}-lighter`
  | `bgtxt-absolute-${BaseMonoPaletteKey}-lightest`

type BorderColor =
  | 'bdr-black-light'
  | 'bdr-grey-light'
  | 'bdr-white'

type ShadowColor =
  | 'shdw-xlarge'
  | 'shdw-large'
  | 'shdw-medium'
  | 'shdw-small'
  | 'shdw-base'
  | 'shdw-inner-base'

export type ThemeKey =
  | MonoBackgroundColor
  | LayoutBackgroundColor
  | ElevationBackgroundColor
  | TextColor
  | ColorfulTextAndBackgroundColor
  | MonoAbsoluteTextAndBackgroundColor
  | BorderColor
  | ShadowColor

type ThemeType = Partial<Record<ThemeKey, string>>

export default ThemeType
