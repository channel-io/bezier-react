/* Internal dependencies */
import { css, styled } from 'Foundation'
import type DividerProps from './Divider.types'

const DIVIDER_THICKNESS = 1
const DIVIDER_INDENT_SIZE = 6

interface StyledDividerProps extends DividerProps {
  orientation: NonNullable<DividerProps['orientation']>
  withoutSideIndent: NonNullable<DividerProps['withoutSideIndent']>
  withoutParallelIndent: NonNullable<DividerProps['withoutParallelIndent']>
}

export const Divider = styled.div<StyledDividerProps>`
  ${({ foundation }) => foundation?.rounding?.round1}
  background-color: ${({ foundation }) => foundation?.theme?.['bdr-black-light']};

  ${({ orientation, withoutSideIndent, withoutParallelIndent }) => {
    switch (orientation) {
      case 'horizontal':
      default: {
        return css`
          width: ${withoutSideIndent ? '100%' : `calc(100% - ${DIVIDER_INDENT_SIZE * 2}px)`};
          height: ${DIVIDER_THICKNESS}px;

          margin: ${DIVIDER_INDENT_SIZE}px;
          ${withoutSideIndent && css`
            margin-left: 0;
            margin-right: 0;
          `}
          ${withoutParallelIndent && css`
            margin-top: 0;
            margin-bottom: 0;
          `}
        `
      }
      case 'vertical': {
        return css`
          width: ${DIVIDER_THICKNESS}px;
          height: ${withoutSideIndent ? '100%' : `calc(100% - ${DIVIDER_INDENT_SIZE * 2}px)`};

          margin: ${DIVIDER_INDENT_SIZE}px;
          ${withoutSideIndent && css`
            margin-top: 0;
            margin-bottom: 0;
          `}
          ${withoutParallelIndent && css`
            margin-left: 0;
            margin-right: 0;
          `}
        `
      }
    }
  }}

  ${({ interpolation }) => interpolation}
`
