import { type SemanticColor } from '~/src/types/tokens'

import TagBadgeSize from './constants/TagBadgeSize'
import type TagBadgeVariant from './constants/TagBadgeVariant'
import { TagBadgeBgColorPreset } from './constants/TagBadgeVariant'

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
