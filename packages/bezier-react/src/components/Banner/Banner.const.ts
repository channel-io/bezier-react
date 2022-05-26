/* Internal dependencies */
import { css, SemanticNames } from 'Foundation'
import type { InjectedInterpolation } from 'Types/Foundation'
import { BannerVariant } from './Banner.types'

export const BACKGROUND_COLORS: Record<BannerVariant, SemanticNames> = {
  [BannerVariant.Default]: 'bg-black-lighter',
  [BannerVariant.Blue]: 'bgtxt-blue-lightest',
  [BannerVariant.Cobalt]: 'bgtxt-cobalt-lightest',
  [BannerVariant.Green]: 'bgtxt-green-lightest',
  [BannerVariant.Orange]: 'bgtxt-orange-lightest',
  [BannerVariant.Red]: 'bgtxt-red-lightest',
  [BannerVariant.Alt]: 'bg-grey-lighter',
}

export const DEFAULT_ICON_COLORS: Record<BannerVariant, SemanticNames> = {
  [BannerVariant.Default]: 'txt-black-darker',
  [BannerVariant.Blue]: 'bgtxt-blue-normal',
  [BannerVariant.Cobalt]: 'bgtxt-cobalt-normal',
  [BannerVariant.Green]: 'bgtxt-green-normal',
  [BannerVariant.Orange]: 'bgtxt-orange-normal',
  [BannerVariant.Red]: 'bgtxt-red-normal',
  [BannerVariant.Alt]: 'txt-black-darker',
}

export const TEXT_COLORS: Record<BannerVariant, SemanticNames> = {
  [BannerVariant.Default]: 'txt-black-darker',
  [BannerVariant.Blue]: 'bgtxt-blue-normal',
  [BannerVariant.Cobalt]: 'bgtxt-cobalt-normal',
  [BannerVariant.Green]: 'bgtxt-green-normal',
  [BannerVariant.Orange]: 'bgtxt-orange-normal',
  [BannerVariant.Red]: 'bgtxt-red-normal',
  [BannerVariant.Alt]: 'txt-black-darker',
}

export const ELEVATIONS: { [key in BannerVariant]?: InjectedInterpolation } = {
  [BannerVariant.Alt]: css`
    ${({ foundation }) => foundation?.elevation?.ev2()}
  `,
}
