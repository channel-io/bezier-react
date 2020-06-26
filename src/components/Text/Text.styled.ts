/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import TextProps from './Text.types'

const Text = styled.span<TextProps>`
  ${props => props.typo};
  color: ${props => props.theme?.colors?.textBase ?? 'black'};
`

export default Text
