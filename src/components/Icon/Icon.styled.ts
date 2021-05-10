/* Internal dependencies */
import { styled } from '../../foundation'
import { IconStyledProps } from './Icon.types'

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
