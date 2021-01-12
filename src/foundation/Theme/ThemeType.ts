/* Internal dependencies */
import BasePaletteKey, {
  BaseMonoPaletteKey,
  BaseColorfulPaletteKey,
} from './Palette/BasePaletteKey'

type MonoBackgroundColor =
  | `bg-${BaseMonoPaletteKey}-darkest`
  | `bg-${BaseMonoPaletteKey}-dark`
  | `bg-${BaseMonoPaletteKey}-default`
  | `bg-${BaseMonoPaletteKey}-light`
  | `bg-${BaseMonoPaletteKey}-lighter`
  | `bg-${BaseMonoPaletteKey}-lightest`

type LayoutBackgroundColor =
  | 'bg-gnb'
  | 'bg-navi'
  | 'bg-header'

type ElevationBackgroundColor =
  | 'bg-ev-high'
  | 'bg-default'
  | 'bg-ev-low'

type TextColor =
  | `txt-${BasePaletteKey.black}-darkest`
  | `txt-${BasePaletteKey.black}-darker`
  | `txt-${BasePaletteKey.black}-dark`
  | `txt-${BasePaletteKey.black}-light`
  | `txt-${BasePaletteKey.white}`

type ColorfulTextAndBackgroundColor =
  | `bgtxt-${BaseColorfulPaletteKey}-dark`
  | `bgtxt-${BaseColorfulPaletteKey}-default`
  | `bgtxt-${BaseColorfulPaletteKey}-light`
  | `bgtxt-${BaseColorfulPaletteKey}-lighter`
  | `bgtxt-${BaseColorfulPaletteKey}-lightest`

type BorderColor =
  | 'bd-primary'
  | 'bd-table'

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

type ThemeKey =
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
