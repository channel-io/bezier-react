/* External dependencies */
import styled from 'styled-components'

const Text = styled.span`
  font-size: ${props => props.theme.typography?.normal ?? 13}px;
  color: ${props => props.theme.palette?.black70};
`

export default Text
