export const getTitle = (baseDir: string) => {
  const filePath = baseDir.split('/')
  // NOTE: 공백과 src를 제외하고 component/.../lastFolderName 을 return
  return filePath.slice(2, filePath.length - 1).join('/')
}

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
