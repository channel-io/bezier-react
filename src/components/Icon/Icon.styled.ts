/* Internal dependencies */
import { styled, SemanticNames } from '../../foundation'

export interface IconStyledProps {
  color?: SemanticNames
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
}: IconStyledProps): string {
  return `${margintop}px ${marginright}px ${marginbottom}px ${marginleft}px`
}

const Icon = styled.svg<IconStyledProps>`
  flex: 0 0 auto;
  margin: ${getMargin};
  color: ${({ foundation, color }) => (color && foundation?.theme?.[color]) || 'inherit'};
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')}
`

export default Icon
