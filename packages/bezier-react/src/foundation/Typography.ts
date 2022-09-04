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

const Size11 = css`
  font-size: ${TypoAbsoluteNumber.Typo11}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh16}rem;
`

const Size12 = css`
  font-size: ${TypoAbsoluteNumber.Typo12}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh16}rem;
`

const Size13 = css`
  font-size: ${TypoAbsoluteNumber.Typo13}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh18}rem;
`

const Size14 = css`
  font-size: ${TypoAbsoluteNumber.Typo14}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh18}rem;
`

const Size15 = css`
  font-size: ${TypoAbsoluteNumber.Typo15}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh20}rem;
  letter-spacing: -0.1px;
`

const Size16 = css`
  font-size: ${TypoAbsoluteNumber.Typo16}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh22}rem;
  letter-spacing: -0.1px;
`

const Size17 = css`
  font-size: ${TypoAbsoluteNumber.Typo17}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh22}rem;
  letter-spacing: -0.1px;
`

const Size18 = css`
  font-size: ${TypoAbsoluteNumber.Typo18}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh24}rem;
`

const Size22 = css`
  font-size: ${TypoAbsoluteNumber.Typo22}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh28}rem;
  letter-spacing: -0.4px;
`

const Size24 = css`
  font-size: ${TypoAbsoluteNumber.Typo24}rem;
  line-height: ${LineHeightAbsoluteNumber.Lh32}rem;
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
  Size17,
  Size18,
  Size22,
  Size24,
}
