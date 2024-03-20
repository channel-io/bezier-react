// Merge a `source` object to a `target` recursively
export const merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], merge(target[key], source[key]))
    }
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

const roundToTwoDecimalPlaces = (n: number) => Math.round(n * 100) / 100

export const hexToRGB = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (hex.length > 7) {
    const alpha = roundToTwoDecimalPlaces(parseInt(hex.slice(7, 9), 16) / 255)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return `rgba(${r}, ${g}, ${b}, 1)`
}
