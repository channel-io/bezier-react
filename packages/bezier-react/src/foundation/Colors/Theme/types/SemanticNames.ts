import {
  type BaseColorfulPaletteKey,
  type BaseMonoPaletteKey,
} from '~/src/foundation/Colors/Palette/BasePaletteKey'
import type BasePaletteKey from '~/src/foundation/Colors/Palette/BasePaletteKey'

type MonoBackgroundColor =
  | `bg-${Exclude<BaseMonoPaletteKey, BasePaletteKey.White>}-darkest`
  | `bg-${Exclude<BaseMonoPaletteKey, BasePaletteKey.White | BasePaletteKey.Grey>}-darker`
  | `bg-${Exclude<BaseMonoPaletteKey, BasePaletteKey.White>}-dark`
  | `bg-${Exclude<BaseMonoPaletteKey, BasePaletteKey.White>}-light`
  | `bg-${Exclude<BaseMonoPaletteKey, BasePaletteKey.White>}-lighter`
  | `bg-${Exclude<BaseMonoPaletteKey, BasePaletteKey.White>}-lightest`
  | `bg-${BasePaletteKey.Grey}-dim-lightest`
  | `bg-${BasePaletteKey.White}-dim-dark`
  | `bg-${BasePaletteKey.White}-dim-light`

type LayoutBackgroundColor =
  | 'bg-gnb'
  | 'bg-navi'
  | 'bg-header'
  | 'bg-header-float'
  | 'bg-lounge'

type ElevationBackgroundColor =
  | 'bg-white-high'
  | 'bg-white-normal'
  | 'bg-white-low'

type TextColor =
  | `txt-${BasePaletteKey.Black}-pure`
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
  | `bgtxt-absolute-${Exclude<BaseMonoPaletteKey, BasePaletteKey.Grey>}-dark`
  | `bgtxt-absolute-${Exclude<BaseMonoPaletteKey, BasePaletteKey.Grey>}-normal`
  | `bgtxt-absolute-${Exclude<BaseMonoPaletteKey, BasePaletteKey.Grey>}-light`
  | `bgtxt-absolute-${Exclude<BaseMonoPaletteKey, BasePaletteKey.Grey>}-lighter`
  | `bgtxt-absolute-${Exclude<BaseMonoPaletteKey, BasePaletteKey.Grey>}-lightest`

type BorderColor =
  | 'bdr-black-dark'
  | 'bdr-black-light'
  | 'bdr-black-lightest'
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
