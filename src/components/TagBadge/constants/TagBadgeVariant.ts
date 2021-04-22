/* Internal dependneices */
import { ThemeKey } from '../../../foundation/Theme/ThemeType'

// FIXME: 임시 Variant입니다. 협의하여 결정 필요함
enum TagBadgeVariant {
  Default = 'default',
  Important = 'important',
  Information = 'information',
  Teal = 'teal',
  Trial = 'trial',
  Olive = 'olive',
  Pink = 'pink',
}

export const TagBadgeBgColorPreset: { [T in TagBadgeVariant]: ThemeKey } = {
  [TagBadgeVariant.Default]: 'bg-black-lighter',
  [TagBadgeVariant.Important]: 'bgtxt-blue-lighter',
  [TagBadgeVariant.Information]: 'bgtxt-cobalt-lighter',
  [TagBadgeVariant.Teal]: 'bgtxt-teal-lighter',
  [TagBadgeVariant.Trial]: 'bgtxt-green-lighter',
  [TagBadgeVariant.Olive]: 'bgtxt-olive-lighter',
  [TagBadgeVariant.Pink]: 'bgtxt-pink-lighter',
}

export const BadgeColorPreset: { [T in TagBadgeVariant]: ThemeKey } = {
  [TagBadgeVariant.Default]: 'bg-black-darkest',
  [TagBadgeVariant.Important]: 'bgtxt-blue-normal',
  [TagBadgeVariant.Information]: 'bgtxt-cobalt-normal',
  [TagBadgeVariant.Teal]: 'bgtxt-teal-normal',
  [TagBadgeVariant.Trial]: 'bgtxt-green-normal',
  [TagBadgeVariant.Olive]: 'bgtxt-olive-normal',
  [TagBadgeVariant.Pink]: 'bgtxt-pink-normal',
}

export default TagBadgeVariant
