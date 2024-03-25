export type TagBadgeSize = 'xs' | 's' | 'm' | 'l'

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

export function getProperTagBadgeTypo(size: TagBadgeSize) {
  return {
    xs: '11' as const,
    s: '13' as const,
    m: '14' as const,
    l: '15' as const,
  }[size]
}
