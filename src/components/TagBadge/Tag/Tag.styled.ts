/* Internal dependencies */
import { styled } from '../../../foundation'
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import type InjectedInterpolation from '../../../types/InjectedInterpolation'
import { Icon } from '../../Icon'
import { TAGBADGE_VERTICAL_PADDING } from '../constants/TagBadgeStyle'

interface WrapperProps {
  horizontalPadding: number
  bgColor: ThemeKey
  interpolation?: InjectedInterpolation
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  padding: ${TAGBADGE_VERTICAL_PADDING}px ${({ horizontalPadding }) => horizontalPadding}px;
  ${({ foundation }) => foundation?.rounding?.round6};
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
  background-color: ${({ foundation, bgColor }) => foundation?.theme?.[bgColor]};

  ${({ interpolation }) => interpolation}
`

const CloseIcon = styled(Icon)`
  cursor: pointer;
`

export default {
  Wrapper,
  CloseIcon,
}
