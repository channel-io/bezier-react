/* Internal dependencies */
import { SemanticNames } from '../../../../foundation/Colors/Theme'
import { Typography } from '../../../../foundation/Typography'
import TagBadgeVariant, { BadgeColorPreset, TagBadgeBgColorPreset } from '../constants/TagBadgeVariant'
import TagBadgeSize from '../constants/TagBadgeSize'
import { Rounding } from '../../../../foundation'

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
    [TagBadgeSize.XS]: Typography.Size12,
    [TagBadgeSize.S]: Typography.Size13,
    [TagBadgeSize.M]: Typography.Size14,
    [TagBadgeSize.L]: Typography.Size15,
  }[size]
}

export function getProperTagBadgeBgColor(color: TagBadgeVariant): SemanticNames {
  return TagBadgeBgColorPreset[color]
}

export function getProperBadgeTextColor(color: TagBadgeVariant): SemanticNames {
  return BadgeColorPreset[color]
}
