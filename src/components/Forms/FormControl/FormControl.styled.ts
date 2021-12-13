/* Internal dependencies */
import { styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

export const Box = styled.div<InterpolationProps>`
  position: relative;
  ${({ interpolation }) => interpolation}
`

export const TopLabelWrapper = styled.div`
  padding: 0 2px;
  margin-bottom: 4px;
`

export const TopHelperTextWrapper = styled.div`
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

export const LeftLabelWrapper = styled.div`
  grid-row: 1;
`

export const LeftHelperTextWrapper = styled(TopHelperTextWrapper)`
  grid-column: 2;
`
