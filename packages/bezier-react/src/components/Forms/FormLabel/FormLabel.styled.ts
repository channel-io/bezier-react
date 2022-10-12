/* Internal dependencies */
import { styled } from 'Foundation'
import { Text } from 'Components/Text'
import { gap } from 'Utils/styleUtils'

export const Label = styled(Text)`
  display: block;
  text-align: left;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  ${gap(6)}
`
