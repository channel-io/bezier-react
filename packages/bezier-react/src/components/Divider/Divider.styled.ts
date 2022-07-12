/* Internal dependencies */
import { css, styled } from 'Foundation'
import type DividerProps from './Divider.types'

const DIVIDER_THICKNESS = 1

const HorizontalDividerCSS = css`
  width: 100%;
  height: ${DIVIDER_THICKNESS}px;
`

const VerticalDividerCSS = css`
  width: ${DIVIDER_THICKNESS}px;
  height: 100%;
`

export const Divider = styled.div<DividerProps>`
  ${({ foundation }) => foundation?.rounding?.round1}
  background-color: ${({ foundation }) => foundation?.theme?.['bdr-black-light']};

  ${({ orientation }) => (orientation === 'horizontal' ? HorizontalDividerCSS : VerticalDividerCSS)}

  ${({ interpolation }) => interpolation}
`
