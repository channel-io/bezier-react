/* Internal dependencies */
import { ellipsis, styled, Typography } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

interface ValueWrapperProps extends InterpolationProps {
  multiline?: boolean
}

export const ValueWrapper = styled.div<ValueWrapperProps>`
  ${Typography.Size14};
  ${({ multiline }) => !multiline && ellipsis()};
  ${({ interpolation }) => interpolation}
`
