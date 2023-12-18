import { css } from '~/src/foundation'

import { type InjectedInterpolation } from '~/src/types/Foundation'
import { type FlattenAllToken } from '~/src/types/Token'
import {
  isEmpty,
  isNil,
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

export const px = <Value extends number | undefined>(value: Value) => (!isNil(value) ? `${value}px` as const : undefined)

export const cssVarName = <ComponentName extends string>(componentName?: ComponentName) =>
  <PropertyName extends string>(propertyName: PropertyName) => (
    isEmpty(componentName)
      ? `--b-${propertyName}` as const
      : `--b-${componentName}-${propertyName}` as const
  )

export function cssVarValue<
  PropertyName extends string | undefined,
>(propertyName: PropertyName) {
  /* eslint-disable no-nested-ternary */
  return !isNil(propertyName)
    ? `var(--${propertyName})` as const
    : undefined
  /* eslint-enable no-nested-ternary */
}

export function tokenCssVarValue<
  PropertyName extends FlattenAllToken | undefined,
>(propertyName: PropertyName) {
  return cssVarValue(propertyName)
}

export function cssUrl(url: string | undefined) {
  return url ? `url(${url})` : undefined
}
