import {
  Rounding,
  type SemanticNames,
} from '~/src/foundation'

import TagBadgeSize from './constants/TagBadgeSize'
import type TagBadgeVariant from './constants/TagBadgeVariant'
import {
  BadgeColorPreset,
  TagBadgeBgColorPreset,
} from './constants/TagBadgeVariant'

export function getProperTagBadgePadding(size: TagBadgeSize) {
  return {
    [TagBadgeSize.XS]: 2,
    [TagBadgeSize.S]: 4,
    [TagBadgeSize.M]: 4,
    [TagBadgeSize.L]: 4,
  }[size]
}

export function getProperTagBadgeRounding(size: TagBadgeSize) {
  return {
    [TagBadgeSize.XS]: Rounding.round4,
    [TagBadgeSize.S]: Rounding.round6,
    [TagBadgeSize.M]: Rounding.round6,
    [TagBadgeSize.L]: Rounding.round6,
  }[size]
}

export function getProperTagBadgeTypo(size: TagBadgeSize) {
  return {
    [TagBadgeSize.XS]: '11' as const,
    [TagBadgeSize.S]: '13' as const,
    [TagBadgeSize.M]: '14' as const,
    [TagBadgeSize.L]: '15' as const,
  }[size]
}

export function getProperTagBadgeBgColor(color: TagBadgeVariant): SemanticNames {
  return TagBadgeBgColorPreset[color]
}

export function getProperBadgeTextColor(color: TagBadgeVariant): SemanticNames {
  return BadgeColorPreset[color]
}
