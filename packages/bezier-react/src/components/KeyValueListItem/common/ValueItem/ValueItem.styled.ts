/* Internal dependencies */
import { ellipsis, styled, Typography } from '~/src/foundation'
import { InterpolationProps } from '~/src/types/Foundation'

interface ValueWrapperProps extends InterpolationProps {
  multiline?: boolean
}

export const ValueWrapper = styled.div<ValueWrapperProps>`
  color: ${({ foundation }) => foundation?.theme['txt-black-darkest']};
  ${Typography.Size14};
  ${({ multiline }) => !multiline && ellipsis()};
  ${({ interpolation }) => interpolation}
`
