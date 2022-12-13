export function isLastIndex(array: any[], index: number) {
  return array.length - 1 === index
}

export function compact<T>(array: (T | null | undefined | false | '' | 0)[]): T[] {
  return array.filter(item => !!item) as T[]
}

export function flattenDeep(array: unknown): unknown[] {
  return Array.isArray(array)
    ? array.reduce((a, b) => a.concat(flattenDeep(b)), [])
    : [array]
}
