import {
  type Color,
  type FunctionalAndSemanticColor,
} from '~/src/types/alpha-tokens'
import {
  type FlattenAllToken,
  type GlobalColor,
  type SemanticColor,
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
  return !isNil(propertyName) ? (`var(--${propertyName})` as const) : undefined
}

/**
 * Wrapper function for `cssVar` to handle tokens specifically.
 * It generates a CSS variable string for a given design token.
 */
export const tokenCssVar = cssVar as <
  Token extends FlattenAllToken | undefined,
>(
  token: Token
) => ReturnType<typeof cssVar<Token>>

/**
 * NOTE: (@ed) Converts a legacy color token to alpha color token.
 * **Should be removed after the migration is complete.**
 */
function alphaColorTokenCssVar<ColorToken extends Color | undefined>(
  colorToken: ColorToken
) {
  return !isNil(colorToken)
    ? (`var(--alpha-${colorToken})` as const)
    : undefined
}

/**
 * NOTE: (@ed) Converts a legacy color token to alpha color token.
 * **Should be removed after the migration is complete.**
 */
export function colorTokenCssVar<
  ColorToken extends GlobalColor | SemanticColor | undefined,
>(colorToken: ColorToken) {
  return alphaColorTokenCssVar(
    legacyToAlphaColorTokenMap[
      colorToken as keyof typeof legacyToAlphaColorTokenMap
    ] ?? colorToken
  )
}

const legacyToAlphaColorTokenMap = Object.freeze({
  'txt-black-darkest': 'fg-black-darkest',
  'txt-black-darker': 'fg-black-darker',
  'txt-black-dark': 'fg-black-dark',
  'txt-black-pure': 'fg-black-pure',
  'txt-white-normal': 'fg-white-normal',
  'bg-header': 'bg-white-higher',
  'bg-header-float': 'bg-white-alpha-lightest',
  'bg-navi': 'bg-grey-alpha-dark',
  'bg-gnb': 'bg-grey-alpha-darkest',
  'bg-lounge': 'bg-grey-alpha-darker',
  'bg-grey-dim-lightest': 'bg-grey-alpha-light',
  'bg-white-high': 'bg-white-highest',
  'bg-white-low': 'bg-white-higher',
  'bg-white-dim-light': 'bg-white-alpha-light',
  'bg-white-dim-dark': 'bg-white-alpha-lighter',
  'bgtxt-blue-normal': 'bg-blue-normal',
  'bgtxt-blue-light': 'bg-blue-light',
  'bgtxt-blue-lighter': 'bg-blue-lighter',
  'bgtxt-blue-lightest': 'bg-blue-lightest',
  'bgtxt-blue-dark': 'bg-blue-dark',
  'bgtxt-cobalt-normal': 'bg-cobalt-normal',
  'bgtxt-cobalt-light': 'bg-cobalt-light',
  'bgtxt-cobalt-lighter': 'bg-cobalt-lighter',
  'bgtxt-cobalt-lightest': 'bg-cobalt-lightest',
  'bgtxt-cobalt-dark': 'bg-cobalt-dark',
  'bgtxt-red-normal': 'bg-red-normal',
  'bgtxt-red-light': 'bg-red-light',
  'bgtxt-red-lighter': 'bg-red-lighter',
  'bgtxt-red-lightest': 'bg-red-lightest',
  'bgtxt-red-dark': 'bg-red-dark',
  'bgtxt-orange-normal': 'bg-orange-normal',
  'bgtxt-orange-light': 'bg-orange-light',
  'bgtxt-orange-lighter': 'bg-orange-lighter',
  'bgtxt-orange-lightest': 'bg-orange-lightest',
  'bgtxt-orange-dark': 'bg-orange-dark',
  'bgtxt-green-normal': 'bg-green-normal',
  'bgtxt-green-light': 'bg-green-light',
  'bgtxt-green-lighter': 'bg-green-lighter',
  'bgtxt-green-lightest': 'bg-green-lightest',
  'bgtxt-green-dark': 'bg-green-dark',
  'bgtxt-teal-normal': 'bg-teal-normal',
  'bgtxt-teal-light': 'bg-teal-light',
  'bgtxt-teal-lighter': 'bg-teal-lighter',
  'bgtxt-teal-lightest': 'bg-teal-lightest',
  'bgtxt-teal-dark': 'bg-teal-dark',
  'bgtxt-olive-normal': 'bg-olive-normal',
  'bgtxt-olive-light': 'bg-olive-light',
  'bgtxt-olive-lighter': 'bg-olive-lighter',
  'bgtxt-olive-lightest': 'bg-olive-lightest',
  'bgtxt-olive-dark': 'bg-olive-dark',
  'bgtxt-yellow-normal': 'bg-yellow-normal',
  'bgtxt-yellow-light': 'bg-yellow-light',
  'bgtxt-yellow-lighter': 'bg-yellow-lighter',
  'bgtxt-yellow-lightest': 'bg-yellow-lightest',
  'bgtxt-yellow-dark': 'bg-yellow-dark',
  'bgtxt-pink-normal': 'bg-pink-normal',
  'bgtxt-pink-light': 'bg-pink-light',
  'bgtxt-pink-lighter': 'bg-pink-lighter',
  'bgtxt-pink-lightest': 'bg-pink-lightest',
  'bgtxt-pink-dark': 'bg-pink-dark',
  'bgtxt-purple-normal': 'bg-purple-normal',
  'bgtxt-purple-light': 'bg-purple-light',
  'bgtxt-purple-lighter': 'bg-purple-lighter',
  'bgtxt-purple-lightest': 'bg-purple-lightest',
  'bgtxt-purple-dark': 'bg-purple-dark',
  'bgtxt-navy-normal': 'bg-navy-normal',
  'bgtxt-navy-light': 'bg-navy-light',
  'bgtxt-navy-lighter': 'bg-navy-lighter',
  'bgtxt-navy-lightest': 'bg-navy-lightest',
  'bgtxt-navy-dark': 'bg-navy-dark',
  'bgtxt-absolute-black-dark': 'bg-absolute-black-dark',
  'bgtxt-absolute-black-normal': 'bg-absolute-black-normal',
  'bgtxt-absolute-black-light': 'bg-absolute-black-light',
  'bgtxt-absolute-black-lighter': 'bg-absolute-black-lighter',
  'bgtxt-absolute-black-lightest': 'bg-absolute-black-lightest',
  'bgtxt-absolute-white-dark': 'bg-absolute-white-dark',
  'bgtxt-absolute-white-normal': 'bg-absolute-white-normal',
  'bgtxt-absolute-white-light': 'bg-absolute-white-light',
  'bgtxt-absolute-white-lighter': 'bg-absolute-white-lighter',
  'bgtxt-absolute-white-lightest': 'bg-absolute-white-lightest',
  'bdr-black-lightest': 'bg-black-lightest',
  'bdr-black-light': 'bg-black-light',
  'bdr-grey-light': 'bg-grey-light',
  'bdr-white': 'bg-white-highest',
  'bdr-black-dark': 'bg-black-dark',
  'shdw-inner-base': 'shadow-base-inner',
  'shdw-base': 'shadow-base',
  'shdw-small': 'shadow-small',
  'shdw-medium': 'shadow-medium',
  'shdw-large': 'shadow-large',
  'shdw-xlarge': 'shadow-xlarge',
}) satisfies Partial<Record<SemanticColor, FunctionalAndSemanticColor>>

/**
 * Formats a given URL string into a CSS `url()` function format.
 */
export function cssUrl(url?: string) {
  return isNil(url) ? undefined : `url(${url})`
}
