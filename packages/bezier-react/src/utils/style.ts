import { css } from '~/src/foundation'

import { type InjectedInterpolation } from '~/src/types/Foundation'
import { isNil } from '~/src/utils/type'

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

export const cssVarName = <ComponentName extends string>(componentName: ComponentName) => <PropertyName extends string>(propertyName: PropertyName) => `--bezier-${componentName}-${propertyName}` as const

export function cssVarValue<
  PropertyName extends string | undefined,
  DeclarationValue extends string | number | undefined,
>(propertyName: PropertyName, declarationValue?: DeclarationValue) {
  /* eslint-disable no-nested-ternary */
  return !isNil(propertyName)
    ? !isNil(declarationValue)
      ? `var(--${propertyName}, ${declarationValue})` as const
      : `var(--${propertyName})` as const
    : undefined
  /* eslint-enable no-nested-ternary */
}

export function cssUrl(url: string | undefined) {
  return url ? `url(${url})` : undefined
}
