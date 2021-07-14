/* Internal dependencies */
import { styled, css } from '../../../foundation'
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import { TAGBADGE_VERTICAL_PADDING } from './constants/TagBadgeStyle'

interface CommonTagBadgeStyleProps extends WithInterpolation {
  rounding: ReturnType<typeof css>
  horizontalPadding: number
  color?: SemanticNames
}

const Wrapper = styled.div<CommonTagBadgeStyleProps>`
  display: flex;
  align-items: center;
  padding: ${TAGBADGE_VERTICAL_PADDING}px ${({ horizontalPadding }) => horizontalPadding}px;
  color: ${({ foundation, color = 'txt-black-darkest' }) => foundation?.theme?.[color]};
  background-color: var(--bgColor);

  ${({ rounding }) => rounding};

  ${({ interpolation }) => interpolation};
`

export default {
  Wrapper,
}
