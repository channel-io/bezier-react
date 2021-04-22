/* Internal dependneices */
import { SemanticNames } from '../../../foundation/Colors/Theme'

// FIXME: 임시 Variant입니다. 협의하여 결정 필요함
enum TagBadgeVariant {
  Default = 'Default',
  Important = 'Important',
  Information = 'Information',
  Teal = 'Teal',
  Trial = 'Trial',
  Olive = 'Olive',
  Pink = 'Pink',
}

export const TagBadgeBgColorPreset: { [T in TagBadgeVariant]: SemanticNames } = {
  [TagBadgeVariant.Default]: 'bg-black-lighter',
  [TagBadgeVariant.Important]: 'bgtxt-blue-lighter',
  [TagBadgeVariant.Information]: 'bgtxt-cobalt-lighter',
  [TagBadgeVariant.Teal]: 'bgtxt-teal-lighter',
  [TagBadgeVariant.Trial]: 'bgtxt-green-lighter',
  [TagBadgeVariant.Olive]: 'bgtxt-olive-lighter',
  [TagBadgeVariant.Pink]: 'bgtxt-pink-lighter',
}

export const BadgeColorPreset: { [T in TagBadgeVariant]: SemanticNames } = {
  [TagBadgeVariant.Default]: 'bg-black-darkest',
  [TagBadgeVariant.Important]: 'bgtxt-blue-normal',
  [TagBadgeVariant.Information]: 'bgtxt-cobalt-normal',
  [TagBadgeVariant.Teal]: 'bgtxt-teal-normal',
  [TagBadgeVariant.Trial]: 'bgtxt-green-normal',
  [TagBadgeVariant.Olive]: 'bgtxt-olive-normal',
  [TagBadgeVariant.Pink]: 'bgtxt-pink-normal',
}

export default TagBadgeVariant
