import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import {
  LineHeightAbsoluteNumber,
  TransitionDuration,
  Typography,
  css,
  ellipsis,
  keyframes,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'

import { Text } from '~/src/components/Text'

import { type TooltipContentProps } from './Tooltip.types'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const SLIDE_OFFSET = 2

const slideUp = keyframes`
  from {
    transform: translateY(${SLIDE_OFFSET}px);
  }

  to {
    transform: translateY(0);
  }
`

const slideRight = keyframes`
  from {
    transform: translateX(-${SLIDE_OFFSET}px);
  }

  to {
    transform: translateX(0);
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(-${SLIDE_OFFSET}px);
  }

  to {
    transform: translateY(0);
  }
`

const slideLeft = keyframes`
  from {
    transform: translateX(${SLIDE_OFFSET}px);
  }

  to {
    transform: translateX(0);
  }
`

const getSlideAnimation = (frames: ReturnType<typeof keyframes>) => css`
  animation-name: ${() => frames}, ${() => fadeIn};
  animation-duration: ${TransitionDuration.M}ms;
  animation-timing-function: cubic-bezier(0.3, 0, 0, 1);
`

export const TooltipContent = styled(TooltipPrimitive.Content)<TooltipContentProps>`
  z-index: ${ZIndex.Tooltip};

  box-sizing: border-box;
  width: max-content;
  max-width: 260px;
  height: max-content;
  padding: 5px 8px;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
  word-break: normal;
  word-wrap: break-word;

  ${({ foundation }) => foundation?.elevation?.ev3(true)};
  ${({ foundation }) => foundation?.rounding?.round8};

  &[data-side="top"] {
    ${getSlideAnimation(slideUp)}
  }

  &[data-side="right"] {
    ${getSlideAnimation(slideRight)}
  }

  &[data-side="bottom"] {
    ${getSlideAnimation(slideDown)}
  }

  &[data-side="left"] {
    ${getSlideAnimation(slideLeft)}
  }

  ${({ interpolation }) => interpolation}
`

export const TooltipText = styled(Text).attrs({ typo: Typography.Size13 })`
  /* NOTE: Line height of Typography.Size13  */
  ${ellipsis(20, LineHeightAbsoluteNumber.Lh18)}
  white-space: pre-wrap;
`
