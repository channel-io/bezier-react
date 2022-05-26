/* Internal dependencies */
import { ellipsis, styled } from 'Foundation'
import { Text } from 'Components/Text'
import { Stack } from 'Components/Stack'

export const KeyContentStack = styled(Stack).attrs({
  direction: 'horizontal',
  align: 'center',
})`
  min-width: 100px;
  ${ellipsis()};
`

export const KeyText = styled(Text).attrs({
  forwardedAs: 'div',
  color: 'txt-black-dark',
})`
  margin-left: 8px;
  ${ellipsis()};
`
