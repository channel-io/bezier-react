/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import TextProps from './Text.types'

const Text = styled.span<TextProps>`
  ${props => props.typo};
  color: ${props => props.theme?.colors?.textBase ?? 'black'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`

export default Text
