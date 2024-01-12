/* External dependencies */
import { VStack, styled } from '@channel.io/bezier-react'

export const TooltipWrapper = styled(VStack)`
  min-width: 150px;
  padding: 12px;

  ${({ foundation }) => foundation?.elevation.ev1()}
  ${({ foundation }) => foundation?.rounding.round4}
`
