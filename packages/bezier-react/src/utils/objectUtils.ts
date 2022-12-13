/* Internal dependencies */
import {
  isObject,
} from './typeUtils'

export function has(object: unknown, key: string): boolean {
  return object != null && Object.prototype.hasOwnProperty.call(object, key)
}

export function pick<T, K extends keyof T>(object: T, paths: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  if (!isObject(object)) { return result }

  Object.entries(object).forEach(([key, value]) => {
    if (paths.includes(key as K)) {
      result[key] = value
    }
  })
  return result
}

export function omit<T, K extends keyof T>(object: T, paths: K[]): Omit<T, K> {
  const result = {} as Omit<T, K>
  if (!isObject(object)) { return result }

  Object.entries(object).forEach(([key, value]) => {
    if (!paths.includes(key as K)) {
      result[key] = value
    }
  })
  return result
}
