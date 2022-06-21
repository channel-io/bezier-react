export function insertItem<T>(array: T[], data: T, index: number = -1) {
  return [
    ...array.slice(0, index),
    data,
    ...array.slice(index),
  ]
}

export function removeItem(array: any[], index: number) {
  if (index < 0 || index >= array.length) { return array }
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

export function isLastIndex(array: any[], index: number) {
  return array.length - 1 === index
}
