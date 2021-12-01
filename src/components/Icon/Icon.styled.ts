/* Internal dependencies */
import { styled, css, SemanticNames } from '../../foundation'

interface IconStyledProps {
  color?: SemanticNames
  hoverColor?: SemanticNames
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

  ${({ foundation, hoverColor }) => hoverColor && css`
    &:hover {
      color: ${foundation?.theme?.[hoverColor]};
    }
  `}
`

export default Icon
