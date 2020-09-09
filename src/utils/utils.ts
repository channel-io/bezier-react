export const getTitle = (baseDir: string) => {
  const filePath = baseDir.split('/')
  // NOTE: 공백과 src를 제외하고 component/.../lastFolderName 을 return
  return filePath.slice(2, filePath.length - 1).join('/')
}

