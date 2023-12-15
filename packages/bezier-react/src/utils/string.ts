import {
  isArray,
  isSymbol,
} from '~/src/utils/type'

export function toString(value: unknown): string {
  if (value == null) { return '' }
  if (typeof value === 'string') { return value }
  if (isArray(value)) {
    return `${value.map((other) => {
      if (other == null) { return other }
      return toString(other)
    })}`
  }
  if (isSymbol(value)) { return value.toString() }
  if (Object.is(-0, value)) { return '-0' }
  return `${value}`
}

export const kebabCase = (value: string): string => value
  .trim()
  .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
  .replace(/([0-9])([a-zA-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase()

export const camelCase = (value: string): string => kebabCase(value)
  .replace(/-([a-z])/g, (_, p1) => p1.toUpperCase())
  .replace(/-([0-9])/g, (_, p1) => p1.toUpperCase())
