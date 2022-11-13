enum TagBadgeVariant {
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

export const BadgeColorPreset = {
  [TagBadgeVariant.Default]: 'txt-black-darkest',
  [TagBadgeVariant.MonochromeLight]: 'txt-black-dark',
  [TagBadgeVariant.MonochromeDark]: 'bgtxt-absolute-white-dark',
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
} as const

export default TagBadgeVariant
