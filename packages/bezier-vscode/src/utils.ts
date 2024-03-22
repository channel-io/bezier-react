const roundToTwoDecimalPlaces = (n: number) => Math.round(n * 100) / 100

export const hexToRGBA = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (hex.length > 7) {
    const alpha = roundToTwoDecimalPlaces(parseInt(hex.slice(7, 9), 16) / 255)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return `rgba(${r}, ${g}, ${b}, 1)`
}
