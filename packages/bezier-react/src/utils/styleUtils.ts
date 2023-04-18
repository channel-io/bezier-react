import { css } from '~/src/foundation'

import {
  AbsoluteUnit,
  BoxSizingUnit,
  type CSSUnits,
  ExplicitDefaulting,
  RelativeUnit,
} from '~/src/types/CSS'
import { type InjectedInterpolation } from '~/src/types/Foundation'
import { has } from '~/src/utils/objectUtils'
import {
  isEmpty,
  isNaN,
  isNil,
  isNumber,
  isObject,
  isString,
} from '~/src/utils/typeUtils'

import { isNumberString } from './stringUtils'

export const UnitValues: string[] = [
  ...Object.values(AbsoluteUnit),
  ...Object.values(RelativeUnit),
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
  return value && Object.values(BoxSizingUnit).includes(value)
}

export function isExplicitDefaulting(value?: any): value is ExplicitDefaulting {
  return value && Object.values(ExplicitDefaulting).includes(value)
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
  const defaultUnit = options?.defaultUnit ?? AbsoluteUnit.px

  if (isString(value)) {
    if (isEmpty(value)) { return defaultValue || `0${defaultUnit}` }
    if (isNumberString(value)) { return `${value}${defaultUnit}` }
    if (isBoxSizingUnit(value)) { return value }
    if (isExplicitDefaulting(value)) { return value }
    if (!isEmpty(options?.allowUnits)) {
      if (options!.allowUnits?.some((unit) => value.endsWith(unit))) {
        return value
      }
    } else if (UnitValues.some((unit) => value.endsWith(unit))) {
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

export function gap(spacing: number): InjectedInterpolation {
  return css`
    gap: ${spacing}px;

    @supports not(gap: ${spacing}px) {
      margin-top: ${-spacing}px;
      margin-left: ${-spacing}px;

      > * {
        margin-top: ${spacing}px;
        margin-left: ${spacing}px;
      }
    }
  `
}

export function touchableHover(interpolation: InjectedInterpolation): InjectedInterpolation {
  return css`
    @media (hover: hover) {
      &:hover {
        ${interpolation}
      }
    }

    @media (hover: none) {
      &:active {
        ${interpolation}
      }
    }
  `
}
