import { isNaN } from './type'

interface Enum {
  [id: string]: string | number
}

export const getObjectFromEnum = (input: Enum) => Object.entries(input)
  .reduce((acc, [key, value]) => (
    isNaN(Number(key))
      ? { ...acc, [key]: value }
      : acc
  ), {})
