import { type SemanticColor } from '~/src/types/tokens'

/**
 * @deprecated
 */
export type TagBadgeSize =
| 'xs'
| 's'
| 'm'
| 'l'

/**
 * @deprecated
 */
export type TagBadgeVariant =
| 'default'
| 'monochrome-light'
| 'monochrome-dark'
| 'blue'
| 'cobalt'
| 'teal'
| 'green'
| 'olive'
| 'pink'
| 'navy'
| 'yellow'
| 'orange'
| 'red'
| 'purple'

/**
 * @deprecated
 */
export const TagBadgeBgColorPreset = {
  default: 'bg-black-lighter',
  'monochrome-light': 'bg-black-lighter',
  'monochrome-dark': 'bg-black-darker',
  blue: 'bgtxt-blue-lighter',
  cobalt: 'bgtxt-cobalt-lighter',
  teal: 'bgtxt-teal-lighter',
  green: 'bgtxt-green-lighter',
  olive: 'bgtxt-olive-lighter',
  pink: 'bgtxt-pink-lighter',
  navy: 'bgtxt-navy-lighter',
  yellow: 'bgtxt-yellow-lighter',
  orange: 'bgtxt-orange-lighter',
  red: 'bgtxt-red-lighter',
  purple: 'bgtxt-purple-lighter',
} as const

export function getProperTagBadgeTypo(size: TagBadgeSize) {
  return {
    xs: '11' as const,
    s: '13' as const,
    m: '14' as const,
    l: '15' as const,
  }[size]
}

export function getProperTagBadgeBgColor(color: TagBadgeVariant): SemanticColor {
  return TagBadgeBgColorPreset[color]
}
