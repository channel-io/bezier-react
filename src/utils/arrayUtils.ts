export function insertItem<T>(array: T[], data: T, index: number = -1) {
  return [
    ...array.slice(0, index),
    data,
    ...array.slice(index),
  ]
}

export function removeItem(array: any[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}
