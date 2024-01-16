import { styled } from '~/src/foundation'

import { type InterpolationProps } from '~/src/types/Foundation'

const LEFT_LABEL_MIN_WIDTH = 150

const Box = styled.div<InterpolationProps>`
  position: relative;
  ${({ interpolation }) => interpolation}
`

export const Grid = styled(Box)`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: ${LEFT_LABEL_MIN_WIDTH}px 1fr;
  grid-column-gap: 12px;
  align-items: center;
`
