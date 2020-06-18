/* eslint-disable no-use-before-define */
/* External dependencies */
import _kebabCase from 'lodash/kebabCase'
import _get from 'lodash/get'
import _set from 'lodash/set'
import _isNil from 'lodash/isNil'
import _isNumber from 'lodash/isNumber'
import _isString from 'lodash/isString'
import _isEmpty from 'lodash/isEmpty'
import _isPlainObject from 'lodash/isPlainObject'
import _some from 'lodash/some'
import { flow, toPairs, map, reduce, join } from 'lodash/fp'

const OBJECT_ATTRIBUTES = ['top', 'right', 'bottom', 'left']

export function normalizeSize(size: number|string|undefined|null|object, defaultValue = null) {
  if (_isNil(size)) { return defaultValue }
  if (_isNumber(size)) {
    if (size === 0) { return '0' }
    return `${size}px`
  }
  if (_isString(size) && !_isEmpty(size)) { return size }
  if (_isPlainObject(size)) {
    if (hasAnyPositionAttributes(size as object)) {
      return OBJECT_ATTRIBUTES
        .map(attr => normalizeSize(_get(size, attr, '0')))
        .join(' ')
    }
  }
  return defaultValue
}

const hasAnyPositionAttributes = (obj: object) =>
  !_isEmpty(obj) &&
  _some(OBJECT_ATTRIBUTES, attr => normalizeSize(_get(obj, attr), null) !== null)

export function normalizeStyleObject(styleObject?: object): object {
  if (styleObject) {
    return flow(
      toPairs,
      map(([key, value]) => [
        _kebabCase(key),
        normalizeSize(value),
      ]),
      reduce((result, [key, value]) => {
        _set(result, key, value)
        return result
      }, {}),
    )(styleObject)
  }

  return {}
}

export function toString(styleObject?: object): string {
  const _normalized = normalizeStyleObject(styleObject)
  const _flatten = flow(
    toPairs,
    map(([key, value]) => `${key}: ${value}`),
    join('; '),
  )(_normalized)
  return (_flatten) ? `${_flatten};` : ''
}
