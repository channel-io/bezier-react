/* Internal dependencies */
import BasePaletteKey, {
  BaseMonoPaletteKey,
  BaseColorfulPaletteKey,
} from '../../Palette/BasePaletteKey'

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
  | `txt-${BasePaletteKey.Black}-darkest`
  | `txt-${BasePaletteKey.Black}-darker`
  | `txt-${BasePaletteKey.Black}-dark`
  | `txt-${BasePaletteKey.White}-normal`

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

type SemanticNames =
  | MonoBackgroundColor
  | LayoutBackgroundColor
  | ElevationBackgroundColor
  | TextColor
  | ColorfulTextAndBackgroundColor
  | MonoAbsoluteTextAndBackgroundColor
  | BorderColor
  | ShadowColor

export default SemanticNames
