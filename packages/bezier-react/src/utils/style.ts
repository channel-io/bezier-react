import { css } from '~/src/foundation'

import { type InjectedInterpolation } from '~/src/types/Foundation'
import { type FlattenAllToken } from '~/src/types/Token'
import {
  isEmpty,
  isNil,
  isString,
} from '~/src/utils/type'

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

export const cssVarName = <ComponentName extends string>(componentName?: ComponentName) =>
  <PropertyName extends string>(propertyName: PropertyName) => (
    isEmpty(componentName)
      ? `--b-${propertyName}` as const
      : `--b-${componentName}-${propertyName}` as const
  )

export function cssVarValue<PropertyName extends string>(propertyName?: PropertyName) {
  return isNil(propertyName)
    ? undefined
    : `var(--${propertyName})` as const
}

export function tokenCssVarValue<PropertyName extends FlattenAllToken>(propertyName?: PropertyName) {
  return cssVarValue(propertyName)
}

export function cssUrl(url?: string) {
  return isNil(url) ? undefined : `url(${url})`
}
