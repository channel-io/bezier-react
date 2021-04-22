/* Internal dependencies */
import { styled, css } from '../../foundation'
import { ThemeKey } from '../../foundation/Theme/ThemeType'
import { WithInterpolation } from '../../types/InjectedInterpolation'
import { TAGBADGE_VERTICAL_PADDING } from './constants/TagBadgeStyle'

interface CommonTagBadgeStyleProps extends WithInterpolation {
  rounding: ReturnType<typeof css>
  horizontalPadding: number
  color?: ThemeKey
  bgColor: ThemeKey
}

const Wrapper = styled.div<CommonTagBadgeStyleProps>`
  display: flex;
  align-items: center;
  padding: ${TAGBADGE_VERTICAL_PADDING}px ${({ horizontalPadding }) => horizontalPadding}px;
  color: ${({ foundation, color = 'txt-black-darkest' }) => foundation?.theme?.[color]};
  background-color: ${({ foundation, bgColor }) => foundation?.theme?.[bgColor]};

  ${({ rounding }) => rounding};

  ${({ interpolation }) => interpolation};
`

export default {
  Wrapper,
}
