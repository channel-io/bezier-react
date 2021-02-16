/* Internal dependencies */
import BasePaletteKey, {
  BaseMonoPaletteKey,
  BaseColorfulPaletteKey,
} from './Palette/BasePaletteKey'

type MonoBackgroundColor =
  | `bg-${BaseMonoPaletteKey}-darkest`
  | `bg-${BaseMonoPaletteKey}-dark`
  | `bg-${BaseMonoPaletteKey}-light`
  | `bg-${BaseMonoPaletteKey}-lighter`
  | `bg-${BaseMonoPaletteKey}-lightest`
  | 'bg-white-absolute'

type LayoutBackgroundColor =
  | 'bg-gnb'
  | 'bg-navi'
  | 'bg-header'
  | 'bg-white-floating'

type ElevationBackgroundColor =
  | 'bg-white-high'
  | 'bg-white-normal'
  | 'bg-white-low'

type TextColor =
  | `txt-${BasePaletteKey.black}-darkest`
  | `txt-${BasePaletteKey.black}-darker`
  | `txt-${BasePaletteKey.black}-dark`
  | `txt-${BasePaletteKey.black}-light`
  | `txt-${BasePaletteKey.white}`

type ColorfulTextAndBackgroundColor =
  | `bgtxt-${BaseColorfulPaletteKey}-dark`
  | `bgtxt-${BaseColorfulPaletteKey}-normal`
  | `bgtxt-${BaseColorfulPaletteKey}-light`
  | `bgtxt-${BaseColorfulPaletteKey}-lighter`
  | `bgtxt-${BaseColorfulPaletteKey}-lightest`

type BorderColor =
  | 'bd-black-light'
  | 'bd-grey-light'

type ShadowColor =
  | 'shdw-xlarge'
  | 'shdw-large'
  | 'shdw-medium'
  | 'shdw-small'
  | 'shdw-base'
  | 'shdw-inner-base'

type DimBackgroundColor =
  | 'dim-medium'
  | 'dim-small'

export type ThemeKey =
  | MonoBackgroundColor
  | LayoutBackgroundColor
  | ElevationBackgroundColor
  | TextColor
  | ColorfulTextAndBackgroundColor
  | BorderColor
  | ShadowColor
  | DimBackgroundColor

type ThemeType = Partial<Record<ThemeKey, string>>

export default ThemeType
