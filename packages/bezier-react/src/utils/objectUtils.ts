/* Internal dependencies */
import {
  isObject,
} from './typeUtils'

export function has(object: unknown, key: string): boolean {
  return object != null && Object.prototype.hasOwnProperty.call(object, key)
}

export function pick<T, K>(object: T, paths: (K | string)[]) {
  if (!isObject(object)) { return {} }
  return Object.fromEntries(
    Object.entries(object)
      .filter(([key]) => paths.includes(key)),
  )
}
