/* External dependencies */
import { css } from './FoundationStyledComponent'

export enum TypoAbsoluteNumber {
  Typo11 = 1.1,
  Typo12 = 1.2,
  Typo13 = 1.3,
  Typo14 = 1.4,
  Typo15 = 1.5,
  Typo16 = 1.6,
  Typo17 = 1.7,
  Typo18 = 1.8,
  Typo22 = 2.2,
  Typo24 = 2.4,
}

export enum LineHeightAbsoluteNumber {
  Lh16 = 1.6,
  Lh18 = 1.8,
  Lh20 = 2.0,
  Lh22 = 2.2,
  Lh24 = 2.4,
  Lh28 = 2.8,
  Lh32 = 3.2,
}

interface TypographyStyle {
  fontSize: `${string}rem`
  lineHeight: `${string}rem`
  letterSpacing: 'normal' | `${string}px`
}

/**
 * @deprecated
 * Will be removed
 * @note
 * Should change the `Typography` to use as a key basis, not as an interpolation.
 * It is also difficult to use type checking and CSS Variable when used as interpolation.
 */
const typographyStyles: Record<number, TypographyStyle> = {
  11: {
    fontSize: `${TypoAbsoluteNumber.Typo11}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh16}rem`,
    letterSpacing: 'normal',
  },
  12: {
    fontSize: `${TypoAbsoluteNumber.Typo12}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh16}rem`,
    letterSpacing: 'normal',
  },
  13: {
    fontSize: `${TypoAbsoluteNumber.Typo13}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh18}rem`,
    letterSpacing: 'normal',
  },
  14: {
    fontSize: `${TypoAbsoluteNumber.Typo14}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh18}rem`,
    letterSpacing: 'normal',
  },
  15: {
    fontSize: `${TypoAbsoluteNumber.Typo15}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh20}rem`,
    letterSpacing: '-0.1px',
  },
  16: {
    fontSize: `${TypoAbsoluteNumber.Typo16}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh22}rem`,
    letterSpacing: '-0.1px',
  },
  17: {
    fontSize: `${TypoAbsoluteNumber.Typo17}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh22}rem`,
    letterSpacing: '-0.1px',
  },
  18: {
    fontSize: `${TypoAbsoluteNumber.Typo18}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh24}rem`,
    letterSpacing: 'normal',
  },
  22: {
    fontSize: `${TypoAbsoluteNumber.Typo22}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh32}rem`,
    letterSpacing: '-0.4px',
  },
  24: {
    fontSize: `${TypoAbsoluteNumber.Typo24}rem`,
    lineHeight: `${LineHeightAbsoluteNumber.Lh32}rem`,
    letterSpacing: '-0.4px',
  },
}

const BEZIER_TEXT_SYMBOL = Symbol('$$bezier.textSize')

function getTypographyCSSInterpolation(size: keyof typeof typographyStyles) {
  const result = css`
    font-size: ${typographyStyles[size].fontSize};
    line-height: ${typographyStyles[size].lineHeight};
    letter-spacing: ${typographyStyles[size].letterSpacing};
  `
  result[BEZIER_TEXT_SYMBOL] = size
  return result
}

export type TypographyType = ReturnType<typeof css>

export const Typography = {
  Size11: getTypographyCSSInterpolation(11),
  Size12: getTypographyCSSInterpolation(12),
  Size13: getTypographyCSSInterpolation(13),
  Size14: getTypographyCSSInterpolation(14),
  Size15: getTypographyCSSInterpolation(15),
  Size16: getTypographyCSSInterpolation(16),
  Size17: getTypographyCSSInterpolation(17),
  Size18: getTypographyCSSInterpolation(18),
  Size22: getTypographyCSSInterpolation(22),
  Size24: getTypographyCSSInterpolation(24),
}

/**
 * @deprecated
 * Will be removed
 * @note
 * Should change the `Typography` to use as a key basis, not as an interpolation.
 * It is also difficult to use type checking and CSS Variable when used as interpolation.
 */
export function getTypographyStyleFromInterpolation(typography: TypographyType): TypographyStyle {
  return typographyStyles[typography[BEZIER_TEXT_SYMBOL]]
}
