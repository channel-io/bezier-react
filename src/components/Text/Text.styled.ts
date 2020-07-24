/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import TextProps from './Text.types'

const Text = styled.span<TextProps>`
  ${props => props.typo};
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  font-style: ${props => (props.italic ? 'italic' : 'inherit')};

  color: ${props => (props.inheritColor ? 'inherit' : props.theme?.colors?.textBase)};
`

export default Text
