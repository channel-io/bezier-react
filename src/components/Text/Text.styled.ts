/* Internal dependencies */
import { styled } from '../../foundation'
import TextProps from './Text.types'

const Text = styled.span<TextProps>`
  display: flex;
  ${props => props.typo};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: inherit;
`

export default Text
