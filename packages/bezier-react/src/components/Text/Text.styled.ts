/* Internal dependencies */
import { styled } from 'Foundation'
import { TextProps } from './Text.types'

export const Text = styled.span<TextProps>`
  margin-top: var(--bezier-text-margin-top);
  margin-right: var(--bezier-text-margin-right);
  margin-bottom: var(--bezier-text-margin-bottom);
  margin-left: var(--bezier-text-margin-left);
  font-size: var(--bezier-text-font-size);
  font-style: var(--bezier-text-font-style);
  font-weight: var(--bezier-text-font-weight);
  line-height: var(--bezier-text-line-height);
  color: var(--bezier-text-font-color);
  letter-spacing: var(--bezier-text-letter-spacing);

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')}

  ${({ interpolation }) => interpolation}
`
