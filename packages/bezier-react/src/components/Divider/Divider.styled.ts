/* Internal dependencies */
import { css, styled } from 'Foundation'
import type DividerProps from './Divider.types'

const DIVIDER_THICKNESS = 1
const DIVIDER_INDENT_SIZE = 6

const HorizontalDividerCSS = css`
  width: 100%;
  height: ${DIVIDER_THICKNESS}px;
`

const VerticalDividerCSS = css`
  width: ${DIVIDER_THICKNESS}px;
  height: 100%;
`

interface StyledDividerProps extends DividerProps {}

export const Divider = styled.div<StyledDividerProps>`
  ${({ foundation }) => foundation?.rounding?.round1}
  background-color: ${({ foundation }) => foundation?.theme?.['bdr-black-light']};

  width: 100%;
  height: 100%;

  ${({ interpolation }) => interpolation}
`

interface StyledWrapperProps extends DividerProps {
  orientation: NonNullable<DividerProps['orientation']>
  withoutSideIndent: NonNullable<DividerProps['withoutSideIndent']>
  withoutParallelIndent: NonNullable<DividerProps['withoutParallelIndent']>
}

export const Wrapper = styled.div<StyledWrapperProps>`
  ${({ orientation }) => (orientation === 'horizontal' ? HorizontalDividerCSS : VerticalDividerCSS)}

  padding: ${DIVIDER_INDENT_SIZE}px;
  ${({ withoutSideIndent }) => withoutSideIndent && css`
    padding-left: 0;
    padding-right: 0;
  `}
  ${({ withoutParallelIndent }) => withoutParallelIndent && css`
    padding-top: 0;
    padding-bottom: 0;
  `}

  ${({ interpolation }) => interpolation}
`
