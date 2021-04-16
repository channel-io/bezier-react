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
import { AbsoluteUnit, RelativeUnit, CSSUnits } from '../types/CSS'
import { isNumberString } from './stringUtils'

export const UnitValues: string[] = [
  ...values(AbsoluteUnit),
  ...values(RelativeUnit),
]

export interface CSSUnitOption {
  defaultUnit?: CSSUnits
  allowUnits?: Array<CSSUnits>
}

function isCSSUnitOption(opts?: any): opts is CSSUnitOption {
  return !isNil(opts)
    && isObject(opts)
    && (
      has(opts, 'defaultUnit') ||
      has(opts, 'allowUnits')
    )
}

/* eslint-disable max-len */
export function toCSSUnit(value: any, defaultValue?: string): string | undefined
export function toCSSUnit(value: any, opts?: CSSUnitOption): string | undefined
export function toCSSUnit(value: any, defaultValue?: string, opts?: CSSUnitOption): string | undefined
export function toCSSUnit(value: any, defaultValueOrOption?: string | CSSUnitOption, opts?: CSSUnitOption): string | undefined {
  const defaultValue = isCSSUnitOption(defaultValueOrOption) ? undefined : defaultValueOrOption
  const options = (() => {
    if (isCSSUnitOption(defaultValueOrOption)) { return defaultValueOrOption }
    if (isCSSUnitOption(opts)) { return opts }
    return undefined
  })()
  const defaultUnit = get(options, 'defaultUnit', AbsoluteUnit.px)

  if (isString(value)) {
    if (isEmpty(value)) { return defaultValue || `0${defaultUnit}` }
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
    if (isNaN(value) || value === Infinity) { return defaultValue || `0${defaultUnit}` }
    if (options?.defaultUnit) { return `${value}${defaultUnit}` }
    return `${value}${defaultUnit}`
  }

  return defaultValue
}
/* eslint-enable max-len */
