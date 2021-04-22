/* External dependencies */
import { css } from 'styled-components'

/* Internal dependencies */
import { styled } from '../../../foundation'
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import type InjectedInterpolation from '../../../types/InjectedInterpolation'
import { Icon } from '../../Icon'
import {
  CommonTagBadgeStyle,
  TAGBADGE_VERTICAL_PADDING,
} from '../constants/TagBadgeStyle'

interface WrapperProps {
  rounding: ReturnType<typeof css>
  horizontalPadding: number
  bgColor: ThemeKey
  interpolation?: InjectedInterpolation
}

const Wrapper = styled.div<WrapperProps>`
  ${CommonTagBadgeStyle()};

  padding: ${TAGBADGE_VERTICAL_PADDING}px ${({ horizontalPadding }) => horizontalPadding}px;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
  background-color: ${({ foundation, bgColor }) => foundation?.theme?.[bgColor]};
  ${({ rounding }) => rounding};

  ${({ interpolation }) => interpolation}
`

const CloseIcon = styled(Icon)`
  cursor: pointer;
`

export default {
  Wrapper,
  CloseIcon,
}
