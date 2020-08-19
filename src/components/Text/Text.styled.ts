/* Internal dependencies */
import { styled } from '../../styling/Theme'
import TextProps from './Text.types'

const Text = styled.span<TextProps>`
  ${props => props.typo};
  color: ${props => props.theme?.colors?.textBase ?? 'black'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`

export default Text
