type Alpha =
  | 90
  | 85
  | 80
  | 70
  | 60
  | 40
  | 30
  | 22
  | 20
  | 15
  | 12
  | 10
  | 8
  | 5
  | 3

function alphaToHex(alpha: Alpha) {
  const intValue = Math.round(alpha / 100 * 255)
  const hexValue = intValue.toString(16)
  return hexValue.padStart(2, '0').toUpperCase()
}

export function getAlphaHex(HEX: string, alpha: Alpha) {
  return `${HEX}${alphaToHex(alpha)}`
}
