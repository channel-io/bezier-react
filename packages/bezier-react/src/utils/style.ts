import type {
  BetaFlattenAllToken,
  BetaSemanticColor,
} from '~/src/types/beta-tokens'

import { isNil, isString } from './type'

/**
 * Convert a number to a string with `px` suffix.
 * If the value is `0`, it will return `0` instead of `0px`.
 */
export function px<Value extends number>(value?: Value) {
  if (isNil(value)) {
    return undefined
  }
  if (value !== 0) {
    return `${value}px` as const
  }
  return value as 0
}

/**
 * Convert a number or string to a string with `px` suffix.
 * If the value is `0`, it will return `0` instead of `0px`.
 */
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

/**
 * Generates a CSS variable string with the given property name.
 */
export function cssVar<PropertyName extends string | undefined>(
  propertyName: PropertyName
) {
  /* eslint-disable no-nested-ternary */
  return !isNil(propertyName) ? (`var(--${propertyName})` as const) : undefined
  /* eslint-enable no-nested-ternary */
}

/**
 * Wrapper function for `cssVar` to handle tokens specifically.
 * It generates a CSS variable string for a given design token.
 */
export function tokenCssVar<
  PropertyName extends
    | Exclude<BetaFlattenAllToken, BetaSemanticColor>
    | undefined,
>(propertyName: PropertyName) {
  return cssVar(propertyName)
}

/**
 * Wrapper function for `cssVar` to handle beta semantic color tokens specifically.
 * It generates a CSS variable string for a given beta semantic color token.
 * (e.g. `text-neutral` -> `var(--color-text-neutral)`).
 */
export function colorTokenCssVar<
  PropertyName extends BetaSemanticColor | undefined,
>(propertyName: PropertyName) {
  if (!propertyName) {
    return undefined
  }

  return cssVar(`color-${propertyName}`)
}

/**
 * Formats a given URL string into a CSS `url()` function format.
 */
export function cssUrl(url?: string) {
  return isNil(url) ? undefined : `url(${url})`
}
