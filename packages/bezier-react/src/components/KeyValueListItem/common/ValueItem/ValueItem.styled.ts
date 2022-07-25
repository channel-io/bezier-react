/* Internal dependencies */
import { ellipsis, styled, Typography } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

interface ValueWrapperProps extends InterpolationProps {
  multiline?: boolean
}

export const ValueWrapper = styled.div<ValueWrapperProps>`
  color: ${({ foundation }) => foundation?.theme['txt-black-darkest']};
  ${Typography.Size14};
  ${({ multiline }) => !multiline && ellipsis()};
  ${({ interpolation }) => interpolation}
`
