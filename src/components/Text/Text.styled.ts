/* Internal dependencies */
import { styled } from '../../foundation'
import TextProps from './Text.types'

export interface TextStyledProps {
  margintop: number
  marginright: number
  marginbottom: number
  marginleft: number
}

function getMargin({
  margintop,
  marginright,
  marginbottom,
  marginleft,
}: TextStyledProps): string {
  return `${margintop}px ${marginright}px ${marginbottom}px ${marginleft}px`
}

const Text = styled.span<TextProps & TextStyledProps>`
  display: flex;
  ${props => props.typo};
  margin: ${getMargin};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: inherit;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')}
`

export default Text
