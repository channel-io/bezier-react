/* Internal dependencies */
import { styled, css } from '../../foundation'
import { StyledDividerProps } from './Divider.types'

const DIVIDER_THICKNESS = 1
const DIVIDER_INDENT_SIZE = 6
const DIVIDER_LENGTH_WITH_SIDE_INDENT = `calc(100% - ${DIVIDER_INDENT_SIZE * 2}px)`

const BaseDivider = styled.hr<StyledDividerProps>`
  box-sizing: content-box;
  margin: ${DIVIDER_INDENT_SIZE}px;
  border: 0;
  border-color: ${({ foundation }) => foundation?.theme?.['bdr-black-light']};
  border-style: solid;
`

export const HorizontalDivider = styled(BaseDivider)`
  width: ${DIVIDER_LENGTH_WITH_SIDE_INDENT};
  border-bottom-width: ${DIVIDER_THICKNESS}px;

  ${({ withoutSideIndent }) => withoutSideIndent && css`
      width: 100%;
      margin-right: 0px;
      margin-left: 0px;
  `}
`

export const VerticalDivider = styled(BaseDivider)`
  height: ${DIVIDER_LENGTH_WITH_SIDE_INDENT};
  border-left-width: ${DIVIDER_THICKNESS}px;

  ${({ withoutSideIndent }) => withoutSideIndent && css`
      height: 100%;
      margin-top: 0px;
      margin-bottom: 0px;
  `}
`
