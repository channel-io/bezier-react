import type {
  BetaFlattenAllToken,
  BetaSemanticColor,
} from '~/src/types/beta-tokens'
import type {
  FlattenAllToken,
  FlattenAllToken as V1FlattenAllToken,
  SemanticColor as V1SemanticColor,
} from '~/src/types/tokens'
import { isNil, isString } from '~/src/utils/type'

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
export function tokenCssVar<PropertyName extends FlattenAllToken | undefined>(
  propertyName: PropertyName
) {
  return cssVar(propertyName)
}

/**
 * Wrapper function for `cssVar` to handle tokens specifically.
 * It generates a CSS variable string for a given design token.
 * For beta color tokens (v3), it adds the 'color-' prefix to match CSS variable names.
 * For v1 tokens, it uses the token name directly.
 */
export function betaTokenCssVar<
  PropertyName extends
    | BetaFlattenAllToken
    | BetaSemanticColor
    | V1FlattenAllToken
    | V1SemanticColor
    | undefined,
>(propertyName: PropertyName) {
  if (!propertyName) {
    return undefined
  }
  // Beta color tokens (v3) need 'color-' prefix for CSS variables
  // Check if the token starts with known beta color token prefixes
  const betaColorTokenPrefixes = [
    'text-',
    'icon-',
    'fill-',
    'border-',
    'surface-',
    'dim-',
    'state-',
    'elevation-',
  ]
  const betaBaseTokens = ['surface']
  const isBetaColorToken =
    betaColorTokenPrefixes.some((prefix) => propertyName.startsWith(prefix)) ||
    betaBaseTokens.includes(propertyName)
  if (isBetaColorToken) {
    return cssVar(`color-${propertyName}`)
  }
  return cssVar(propertyName)
}

/**
 * Formats a given URL string into a CSS `url()` function format.
 */
export function cssUrl(url?: string) {
  return isNil(url) ? undefined : `url(${url})`
}
