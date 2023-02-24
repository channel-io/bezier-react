/* Internal dependencies */
import { isArray } from './typeUtils'

export function isLastIndex(array: any[], index: number) {
  return array.length - 1 === index
}

export function compact<T>(array: (T | null | undefined | false | '' | 0)[]): T[] {
  return array.filter(item => !!item) as T[]
}

export function flattenDeep<T>(array: unknown): T[] {
  return isArray(array)
    ? array.reduce((a, b) => a.concat(flattenDeep(b)), [])
    : [array]
}
