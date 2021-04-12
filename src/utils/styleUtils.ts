/* External dependencies */
import {
  isObject,
  isNil,
  isString,
  isNumber,
  isNaN,
  isEmpty,
  get,
  has,
  some,
  endsWith,
  values,
} from 'lodash-es'

/* Internal dependencies */
import { AbsoluteUnit, RelativeUnit, Units } from '../types/CSS'
import { isNumberString } from './stringUtils'

export const UnitValues: string[] = [
  ...values(AbsoluteUnit),
  ...values(RelativeUnit),
]

export interface CSSNumberTypeOption {
  defaultUnit?: Units
  allowUnits?: Array<Units>
}

function isCSSNumberTypeOption(opts?: any): opts is CSSNumberTypeOption {
  return !isNil(opts)
    && isObject(opts)
    && (
      has(opts, 'defaultUnit') ||
      has(opts, 'allowUnits')
    )
}

/* eslint-disable max-len */
export function toCSSNumberType(value: any, defaultValue?: string): string | undefined
export function toCSSNumberType(value: any, opts?: CSSNumberTypeOption): string | undefined
export function toCSSNumberType(value: any, defaultValue?: string, opts?: CSSNumberTypeOption): string | undefined
export function toCSSNumberType(value: any, defaultValueOrOption?: string | CSSNumberTypeOption, opts?: CSSNumberTypeOption): string | undefined {
  const defaultValue = isCSSNumberTypeOption(defaultValueOrOption) ? undefined : defaultValueOrOption
  const options = (() => {
    if (isCSSNumberTypeOption(defaultValueOrOption)) { return defaultValueOrOption }
    if (isCSSNumberTypeOption(opts)) { return opts }
    return undefined
  })()
  const defaultUnit = get(options, 'defaultUnit', AbsoluteUnit.px)

  if (isString(value)) {
    if (isEmpty(value)) { return `0${defaultUnit}` }
    if (isNumberString(value)) { return `${value}${defaultUnit}` }
    if (!isEmpty(options?.allowUnits)) {
      if (some(options!.allowUnits, (unit) => endsWith(value, unit))) {
        return value
      }
    } else if (some(UnitValues, (unit) => endsWith(value, unit))) {
      return value
    }
  }

  if (isNumber(value)) {
    if (isNaN(value) || value === Infinity) { return `0${defaultUnit}` }
    if (options?.defaultUnit) {
      return `${value}${defaultUnit}`
    }
    return `${value}${defaultUnit}`
  }

  return defaultValue
}
/* eslint-enable max-len */
