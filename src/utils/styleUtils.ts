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
  includes,
} from 'lodash-es'

/* Internal dependencies */
import { ExplicitDefaulting, AbsoluteUnit, RelativeUnit, BoxSizingUnit, CSSUnits } from 'Types/CSS'
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

export function isBoxSizingUnit(value?: any): value is BoxSizingUnit {
  return value && includes(BoxSizingUnit, value)
}

export function isExplicitDefaulting(value?: any): value is ExplicitDefaulting {
  return value && includes(ExplicitDefaulting, value)
}

/* eslint-disable max-len */
export function toLength(value: any, defaultValue?: string): string | undefined
export function toLength(value: any, opts?: CSSUnitOption): string | undefined
export function toLength(value: any, defaultValue?: string, opts?: CSSUnitOption): string | undefined
export function toLength(value: any, defaultValueOrOption?: string | CSSUnitOption, opts?: CSSUnitOption): string | undefined {
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
    if (isBoxSizingUnit(value)) { return value }
    if (isExplicitDefaulting(value)) { return value }
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
