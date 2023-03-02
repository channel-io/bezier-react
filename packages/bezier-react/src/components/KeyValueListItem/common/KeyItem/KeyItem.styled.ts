/* Internal dependencies */
import { ellipsis, styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'
import { Text } from 'Components/Text'

export const KeyContent = styled.div<InterpolationProps>`
  display: flex;
  align-items: center;
  ${ellipsis()};
  ${({ interpolation }) => interpolation}
`

export const KeyText = styled(Text).attrs({
  forwardedAs: 'div',
  color: 'txt-black-dark',
})`
  margin-left: 8px;
`
