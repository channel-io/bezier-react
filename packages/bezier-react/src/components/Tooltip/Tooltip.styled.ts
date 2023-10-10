import {
  LineHeightAbsoluteNumber,
  Typography,
  ellipsis,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'

import { AlphaStack } from '~/src/components/AlphaStack'
import {
  Icon as BaseIcon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import { type TooltipProps } from './Tooltip.types'

export const TooltipContent = styled(AlphaStack).attrs({
  direction: 'horizontal',
  spacing: 4,
})<TooltipProps>`
  z-index: ${ZIndex.Tooltip};

  box-sizing: border-box;
  width: max-content;
  max-width: 260px;
  height: max-content;
  padding: 5px 8px;
  word-break: normal;
  word-wrap: break-word;

  ${({ foundation }) => foundation?.elevation?.ev3(true)};
  ${({ foundation }) => foundation?.rounding?.round8};

  ${({ interpolation }) => interpolation}
`

export const TextContainer = styled.div`
  overflow: hidden;
`

export const Title = styled(Text).attrs({ typo: Typography.Size13, bold: true })`
  margin-bottom: 2px;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
`

export const Content = styled(Text).attrs({ typo: Typography.Size13 })`
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
  /* NOTE: Line height of Typography.Size13  */
  ${ellipsis(20, LineHeightAbsoluteNumber.Lh18)}
  white-space: pre-wrap;
`

export const Description = styled(Text).attrs({ typo: Typography.Size12 })`
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-dark']};
`

export const Icon = styled(BaseIcon).attrs({
  size: IconSize.XS,
})`
  padding: 1px;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
`
