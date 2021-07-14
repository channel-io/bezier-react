/* Internal dependencies */
import { styled, css } from '../../../foundation'
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { WithFoundation } from '../../../types/InjectedFoundation'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import { TAGBADGE_VERTICAL_PADDING } from './constants/TagBadgeStyle'

interface CommonTagBadgeStyleProps extends WithInterpolation {
  rounding: ReturnType<typeof css>
  horizontalPadding: number
  color?: SemanticNames
  bgColor: SemanticNames
}

const Wrapper = styled.div.attrs(({
  foundation,
  bgColor,
  color = 'txt-black-darkest',
  horizontalPadding,
}: CommonTagBadgeStyleProps & WithFoundation) => ({
  style: {
    padding: `${TAGBADGE_VERTICAL_PADDING}px ${horizontalPadding}px`,
    color: foundation?.theme?.[color],
    backgroundColor: foundation?.theme?.[bgColor],
  },
}))<CommonTagBadgeStyleProps>`
  display: flex;
  align-items: center;

  ${({ rounding }) => rounding};

  ${({ interpolation }) => interpolation};
`

export default {
  Wrapper,
}
