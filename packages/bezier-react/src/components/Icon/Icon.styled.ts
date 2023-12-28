import { styled } from '~/src/foundation'

import { type ColorProps } from '~/src/types/ComponentProps'

interface IconStyledProps extends ColorProps {
}

const Icon = styled.svg<IconStyledProps>`
  flex: 0 0 auto;
  color: ${({ foundation, color }) => (color && foundation?.theme?.[color]) || 'inherit'};
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')}
`

export default Icon
