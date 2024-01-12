import { css } from '~/src/foundation'

import { type InjectedInterpolation } from '~/src/types/Foundation'
import { type FlattenAllToken } from '~/src/types/Token'
import {
  isNil,
  isString,
} from '~/src/utils/type'

/**
 * @deprecated
 */
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

/**
 * @deprecated
 */
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

export function px<Value extends number>(value?: Value) {
  if (isNil(value)) {
    return undefined
  }
  if (value !== 0) {
    return `${value}px` as const
  }
  return value as 0
}

export function cssDimension<Value extends number | string>(value?: Value) {
  if (isNil(value)) {
    return undefined
  }
  if (isString(value)) {
    return value
  }
  if (value !== 0) {
    return `${value}px` as const
  }
  return value as 0
}

export function cssVar<
  PropertyName extends string | undefined,
>(propertyName: PropertyName) {
  /* eslint-disable no-nested-ternary */
  return !isNil(propertyName)
    ? `var(--${propertyName})` as const
    : undefined
  /* eslint-enable no-nested-ternary */
}

export function tokenCssVar<
  PropertyName extends FlattenAllToken | undefined,
>(propertyName: PropertyName) {
  return cssVar(propertyName)
}

export function cssUrl(url?: string) {
  return isNil(url) ? undefined : `url(${url})`
}
