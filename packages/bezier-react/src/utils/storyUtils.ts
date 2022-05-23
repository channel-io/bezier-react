/* External dependencies */
import { icons, IconName } from '@bezier-react/icons'

export const getTitle = (baseDir: string) => {
  const filePath = baseDir.split('/')
  // NOTE: 공백과 src를 제외하고 component/.../lastFolderName 을 return
  return filePath.slice(2, filePath.length - 1).join('/')
}

export const iconList: IconName[] = Object.keys(icons) as IconName[]

interface Enum {
  [id: string]: string | number
}

export const getObjectFromEnum = (input: Enum) => Object.entries(input)
  .reduce((acc, [key, value]) => (
    Number.isNaN(Number(key))
      ? { ...acc, [key]: value }
      : acc
  ), {})
