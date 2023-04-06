/* Internal dependencies */
import {
  isArray,
  isMap,
  isObject,
  isRegExp,
  isSet,
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

export function isEqual(source: unknown, other: unknown): boolean {
  if (Object.is(source, other)) { return true }

  if (!isObject(source) || !isObject(other) || !source || !other) { return false }

  if (source.constructor !== other.constructor) { return false }

  if (isArray(source)) {
    if (!isArray(other)) { return false }
    if (source.length !== other.length) { return false }
    for (let i = 0; i < source.length; i += 1) {
      if (!isEqual(source[i], other[i])) { return false }
    }
    return true
  }

  if (isSet(source)) {
    if (!isSet(other)) { return false }
    if (source.size !== other.size) { return false }
    for (const value of source.values()) {
      if (!other.has(value)) { return false }
    }
    return true
  }

  if (isMap(source)) {
    if (!isMap(other)) { return false }
    if (source.size !== other.size) { return false }
    for (const key of source.keys()) {
      if (!other.has(key)) { return false }
    }
    for (const [key, value] of source.entries()) {
      if (!isEqual(value, other.get(key))) { return false }
    }
    return true
  }

  if (isRegExp(source)) {
    if (!isRegExp(other)) { return false }
    return source.source === other.source && source.flags === other.flags
  }

  if (source.valueOf !== Object.prototype.valueOf) { return source.valueOf() === other.valueOf() }
  if (source.toString !== Object.prototype.toString) { return source.toString() === other.toString() }

  const keys = Object.keys(source)
  if (keys.length !== Object.keys(other).length) { return false }
  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(other, key)) { return false }
  }
  for (const key of keys) {
    if (!isEqual(source[key], other[key])) { return false }
  }

  return true
}
