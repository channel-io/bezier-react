/* Internal dependencies */
import { styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

export const Box = styled.div<InterpolationProps>`
  position: relative;
  ${({ interpolation }) => interpolation}
`

export const TopLabelWrapper = styled(Box)`
  padding: 0 2px;
  margin-bottom: 4px;
`

export const TopHelperTextWrapper = styled(Box)`
  padding: 0 2px;
  margin-top: 4px;
`

export const Grid = styled(Box)`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 12px;
  align-items: center;
`

// TODO: row, column을 자동으로 할당해주도록 구현
export const FieldWrapper = styled(Box)`
  grid-row: 1 / 1;
  grid-column: 2;
`

export const LeftLabelWrapper = styled(Box)`
  grid-row: 1 / 1;
  grid-column: 1 / 1;
`

export const LeftHelperTextWrapper = styled(TopHelperTextWrapper)`
  grid-row: 2 / 2;
  grid-column: 2;
`
