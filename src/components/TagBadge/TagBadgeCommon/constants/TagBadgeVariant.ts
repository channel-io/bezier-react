/* Internal dependneices */
import { SemanticNames } from '../../../../foundation/Colors/Theme'

enum TagBadgeVariant {
  Default = 'Default',
  Deactivated = 'Deactivated',
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
  Grey = 'Grey',
}

export const TagBadgeBgColorPreset: { [T in TagBadgeVariant]: SemanticNames } = {
  [TagBadgeVariant.Default]: 'bg-black-lighter',
  [TagBadgeVariant.Deactivated]: 'bg-black-lighter',
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
  [TagBadgeVariant.Grey]: 'bg-black-darkest',
}

export const BadgeColorPreset: { [T in TagBadgeVariant]: SemanticNames } = {
  [TagBadgeVariant.Default]: 'txt-black-darkest',
  [TagBadgeVariant.Deactivated]: 'txt-black-dark',
  [TagBadgeVariant.Blue]: 'bgtxt-blue-normal',
  [TagBadgeVariant.Cobalt]: 'bgtxt-cobalt-normal',
  [TagBadgeVariant.Teal]: 'bgtxt-teal-normal',
  [TagBadgeVariant.Green]: 'bgtxt-green-normal',
  [TagBadgeVariant.Olive]: 'bgtxt-olive-normal',
  [TagBadgeVariant.Pink]: 'bgtxt-pink-normal',
  [TagBadgeVariant.Navy]: 'bgtxt-navy-normal',
  [TagBadgeVariant.Yellow]: 'bgtxt-yellow-normal',
  [TagBadgeVariant.Orange]: 'bgtxt-orange-normal',
  [TagBadgeVariant.Red]: 'bgtxt-red-normal',
  [TagBadgeVariant.Purple]: 'bgtxt-purple-normal',
  [TagBadgeVariant.Grey]: 'bgtxt-absolute-white-dark',
}

export default TagBadgeVariant
