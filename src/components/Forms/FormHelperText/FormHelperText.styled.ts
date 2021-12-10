/* Internal dependencies */
import { styled } from 'Foundation'
import { Text } from 'Components/Text'

export const HelperText = styled(Text)`
  display: block;
  /* FIXME: padding 스타일링을 text prop을 통해서 할 수 있도록 개선 */
  padding: 0 2px;
  text-align: left;
`
