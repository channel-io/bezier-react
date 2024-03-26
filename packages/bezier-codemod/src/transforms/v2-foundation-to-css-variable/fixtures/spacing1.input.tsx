/* External dependencies */
import { VStack, styled } from '@channel.io/bezier-react'

export const TooltipWrapper = styled(VStack)`
  min-width: 150px;
  padding: ${({ foundation }) => foundation?.spacing.s5};

  ${({ foundation }) => foundation?.elevation.ev1()}
  ${({ foundation }) => foundation?.rounding.round4}
`
