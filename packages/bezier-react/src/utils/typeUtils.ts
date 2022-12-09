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

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' || (isObject(value) && getTag(value) === '[object Number]')
}

export function isString(value: unknown): value is string {
  return typeof value === 'string' || (isObject(value) && getTag(value) === '[object String]')
}
