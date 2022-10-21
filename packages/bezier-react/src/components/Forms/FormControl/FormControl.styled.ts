/* Internal dependencies */
import { styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

const LEFT_LABEL_MIN_WIDTH = 150

// FIXME(@ed): Top Position일 때, Stack 컴포넌트를 통해 Label, HelperText 간격을 주도록 변경
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
  grid-template-columns: ${LEFT_LABEL_MIN_WIDTH}px 1fr;
  grid-column-gap: 12px;
  align-items: center;
`

interface LeftLabelWrapperProps {
  height: number
}

export const LeftLabelWrapper = styled(Box)<LeftLabelWrapperProps>`
  display: flex;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  align-items: center;
  align-self: start;
  height: ${({ height }) => height}px;
`

export const LeftHelperTextWrapper = styled(TopHelperTextWrapper)`
  grid-row: 2 / 2;
  grid-column: 2;
`
