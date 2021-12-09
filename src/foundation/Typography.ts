/* External dependencies */
import { css } from './FoundationStyledComponent'

export enum TypoAbsoluteNumber {
  Typo11 = 11,
  Typo12 = 12,
  Typo13 = 13,
  Typo14 = 14,
  Typo15 = 15,
  Typo16 = 16,
  Typo18 = 18,
  Typo22 = 22,
  Typo24 = 24,
}

export enum LineHeightAbsoluteNumber {
  Lh16 = 16,
  Lh18 = 18,
  Lh20 = 20,
  Lh22 = 22,
  Lh24 = 24,
  Lh28 = 28,
  Lh32 = 32,
}

const Size11 = css`
  font-size: ${TypoAbsoluteNumber.Typo11}px;
  line-height: ${LineHeightAbsoluteNumber.Lh16}px;
`

const Size12 = css`
  font-size: ${TypoAbsoluteNumber.Typo12}px;
  line-height: ${LineHeightAbsoluteNumber.Lh16}px;
`

const Size13 = css`
  font-size: ${TypoAbsoluteNumber.Typo13}px;
  line-height: ${LineHeightAbsoluteNumber.Lh18}px;
`

const Size14 = css`
  font-size: ${TypoAbsoluteNumber.Typo14}px;
  line-height: ${LineHeightAbsoluteNumber.Lh18}px;
`

const Size15 = css`
  font-size: ${TypoAbsoluteNumber.Typo15}px;
  line-height: ${LineHeightAbsoluteNumber.Lh20}px;
  letter-spacing: -0.1px;
`

const Size16 = css`
  font-size: ${TypoAbsoluteNumber.Typo16}px;
  line-height: ${LineHeightAbsoluteNumber.Lh22}px;
  letter-spacing: -0.1px;
`

const Size18 = css`
  font-size: ${TypoAbsoluteNumber.Typo18}px;
  line-height: ${LineHeightAbsoluteNumber.Lh24}px;
`

const Size22 = css`
  font-size: ${TypoAbsoluteNumber.Typo22}px;
  line-height: ${LineHeightAbsoluteNumber.Lh28}px;
  letter-spacing: -0.4px;
`

const Size24 = css`
  font-size: ${TypoAbsoluteNumber.Typo24}px;
  line-height: ${LineHeightAbsoluteNumber.Lh32}px;
  letter-spacing: -0.4px;
`

export type TypographyType = ReturnType<typeof css>

export const Typography = {
  Size11,
  Size12,
  Size13,
  Size14,
  Size15,
  Size16,
  Size18,
  Size22,
  Size24,
}
