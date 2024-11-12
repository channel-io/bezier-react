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

export const deepMerge = (target: any, source: any) => {
  if (!source || !isObject(source)) return target

  Object.keys(source).forEach((key) => {
    const targetValue = target[key]
    const sourceValue = source[key]

    if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue)
    } else if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = Array.from(new Set([...targetValue, ...sourceValue]))
    } else {
      target[key] = sourceValue
    }
  })

  return target
}

const isObject = (obj: Object) => {
  return obj && typeof obj === 'object' && !Array.isArray(obj)
}
