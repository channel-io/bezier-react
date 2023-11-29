const getTag = (value: unknown): string => Object.prototype.toString.call(value)

export function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function'
}

export function isNil(value: unknown): value is null | undefined {
  return value == null
}

export function isObject(value: unknown): value is object {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean' || (isObject(value) && getTag(value) === '[object Boolean]')
}

export function isInteger(value: unknown): value is BigInteger {
  return Number.isInteger(value)
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' || (isObject(value) && getTag(value) === '[object Number]')
}

export function isNaN(value: unknown): boolean {
  return Number.isNaN(value)
}

export function isString(value: unknown): value is string {
  return typeof value === 'string' || (isObject(value) && getTag(value) === '[object String]')
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol' || (isObject(value) && getTag(value) === '[object Symbol]')
}

export function isRegExp(value: unknown): value is RegExp {
  return isObject(value) && value.constructor === RegExp
}

export const isSet = (value: unknown): value is Set<unknown> => getTag(value) === '[object Set]'
export const isMap = (value: unknown): value is Map<unknown, unknown> => getTag(value) === '[object Map]'

export function isEmpty(value: unknown): boolean {
  if (value == null) { return true }
  if (isArray(value) || isString(value)) { return !value.length }
  if (isMap(value) || isSet(value)) { return !value.size }
  if (isObject(value)) { return !Object.keys(value).length }
  if (isBoolean(value) || isNumber(value)) { return false }
  return !value
}
