/* Internal dependencies */
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import { Typography } from '../../../foundation/Typography'
import TagBadgeVariant, { BadgeColorPreset, TagBadgeBgColorPreset } from '../constants/TagBadgeVariant'
import TagBadgeSize from '../constants/TagBadgeSize'

export function getProperTagBadgePadding(size: TagBadgeSize) {
  return {
    [TagBadgeSize.XS]: 2,
    [TagBadgeSize.S]: 4,
    [TagBadgeSize.M]: 4,
    [TagBadgeSize.L]: 4,
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

export function getProperTagBadgeBgColor(color: TagBadgeVariant): ThemeKey {
  return TagBadgeBgColorPreset[color]
}

export function getProperBadgeColor(color: TagBadgeVariant): ThemeKey {
  return BadgeColorPreset[color]
}
