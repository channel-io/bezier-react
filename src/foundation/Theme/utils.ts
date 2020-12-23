type Opacity =
  | 60
  | 40
  | 30
  | 20
  | 15
  | 10
  | 8
  | 5
  | 3

export function getOpacityTheme(HEX: string, opacity: Opacity) {
  const opacityHEX = (() => {
    switch (opacity) {
      case 30:
        return '4D'
      case 20:
        return '33'
      case 10:
      default:
        return '1A'
    }
  })()

  return `${HEX}${opacityHEX}`
}
