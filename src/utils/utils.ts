export const getTitle = (baseDir: string) => {
  const filePath = baseDir.split('/')
  return filePath.slice(2, filePath.length - 1).join('/')
}

