import { type SemanticColor } from '~/src/types/tokens'

/**
 * @deprecated
 */
export enum TagBadgeSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

/**
 * @deprecated
 */
export enum TagBadgeVariant {
  Default = 'Default',
  MonochromeLight = 'MonochromeLight',
  MonochromeDark = 'MonochromeDark',
  Blue = 'Blue',
  Cobalt = 'Cobalt',
  Teal = 'Teal',
  Green = 'Green',
  Olive = 'Olive',
  Pink = 'Pink',
  Navy = 'Navy',
  Yellow = 'Yellow',
  Orange = 'Orange',
  Red = 'Red',
  Purple = 'Purple',
}

/**
 * @deprecated
 */
export const TagBadgeBgColorPreset = {
  [TagBadgeVariant.Default]: 'bg-black-lighter',
  [TagBadgeVariant.MonochromeLight]: 'bg-black-lighter',
  [TagBadgeVariant.MonochromeDark]: 'bg-black-darker',
  [TagBadgeVariant.Blue]: 'bgtxt-blue-lighter',
  [TagBadgeVariant.Cobalt]: 'bgtxt-cobalt-lighter',
  [TagBadgeVariant.Teal]: 'bgtxt-teal-lighter',
  [TagBadgeVariant.Green]: 'bgtxt-green-lighter',
  [TagBadgeVariant.Olive]: 'bgtxt-olive-lighter',
  [TagBadgeVariant.Pink]: 'bgtxt-pink-lighter',
  [TagBadgeVariant.Navy]: 'bgtxt-navy-lighter',
  [TagBadgeVariant.Yellow]: 'bgtxt-yellow-lighter',
  [TagBadgeVariant.Orange]: 'bgtxt-orange-lighter',
  [TagBadgeVariant.Red]: 'bgtxt-red-lighter',
  [TagBadgeVariant.Purple]: 'bgtxt-purple-lighter',
} as const

export function getProperTagBadgeTypo(size: TagBadgeSize) {
  return {
    [TagBadgeSize.XS]: '11' as const,
    [TagBadgeSize.S]: '13' as const,
    [TagBadgeSize.M]: '14' as const,
    [TagBadgeSize.L]: '15' as const,
  }[size]
}

export function getProperTagBadgeBgColor(color: TagBadgeVariant): SemanticColor {
  return TagBadgeBgColorPreset[color]
}
