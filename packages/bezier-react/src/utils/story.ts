import { isNaN } from './type'

interface Enum {
  [id: string]: string | number
}

export const getObjectFromEnum = <T extends Enum>(enumeration: T) => Object.entries(enumeration)
  .reduce((acc, [key, value]) => (
    isNaN(Number(key))
      ? { ...acc, [key]: value }
      : acc
  ), {} as { [K in keyof T]: T[K] })
