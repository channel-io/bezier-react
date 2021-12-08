/* Internal dependencies */
import { css, SemanticNames } from 'Foundation'
import type { InjectedInterpolation } from 'Types/Foundation'
import { BannerColorVariant } from './Banner.types'

export const BACKGROUND_COLORS: Record<BannerColorVariant, SemanticNames> = {
  [BannerColorVariant.Default]: 'bg-black-lighter',
  [BannerColorVariant.Blue]: 'bgtxt-blue-lightest',
  [BannerColorVariant.Cobalt]: 'bgtxt-cobalt-lightest',
  [BannerColorVariant.Green]: 'bgtxt-green-lightest',
  [BannerColorVariant.Orange]: 'bgtxt-orange-lightest',
  [BannerColorVariant.Red]: 'bgtxt-red-lightest',
  [BannerColorVariant.Alt]: 'bg-grey-lighter',
}

export const DEFAULT_ICON_COLORS: Record<BannerColorVariant, SemanticNames> = {
  [BannerColorVariant.Default]: 'txt-black-darker',
  [BannerColorVariant.Blue]: 'bgtxt-blue-normal',
  [BannerColorVariant.Cobalt]: 'bgtxt-cobalt-normal',
  [BannerColorVariant.Green]: 'bgtxt-green-normal',
  [BannerColorVariant.Orange]: 'bgtxt-orange-normal',
  [BannerColorVariant.Red]: 'bgtxt-red-normal',
  [BannerColorVariant.Alt]: 'txt-black-darker',
}

export const TEXT_COLORS: Record<BannerColorVariant, SemanticNames> = {
  [BannerColorVariant.Default]: 'txt-black-darker',
  [BannerColorVariant.Blue]: 'bgtxt-blue-normal',
  [BannerColorVariant.Cobalt]: 'bgtxt-cobalt-normal',
  [BannerColorVariant.Green]: 'bgtxt-green-normal',
  [BannerColorVariant.Orange]: 'bgtxt-orange-normal',
  [BannerColorVariant.Red]: 'bgtxt-red-normal',
  [BannerColorVariant.Alt]: 'txt-black-darker',
}

export const ELEVATIONS: { [key in BannerColorVariant]?: InjectedInterpolation } = {
  [BannerColorVariant.Alt]: css`
    ${({ foundation }) => foundation?.elevation?.ev2()}
  `,
}
