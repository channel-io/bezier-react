/* Internal dependencies */
import { styled } from '~/src/foundation'
import { ColorProps } from '~/src/types/ComponentProps'
import TextProps from './Text.types'

interface TextStyledProps extends ColorProps {
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
  ${props => props.typo};
  ${props => props.interpolation};
  margin: ${getMargin};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${({ foundation, color }) => (color && foundation?.theme?.[color]) || 'inherit'};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')}
`

export default Text
