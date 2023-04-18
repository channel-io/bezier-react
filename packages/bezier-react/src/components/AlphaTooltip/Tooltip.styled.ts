import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import {
  LineHeightAbsoluteNumber,
  Typography,
  ellipsis,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'

import { Text } from '~/src/components/Text'

export const TooltipContent = styled(TooltipPrimitive.Content)`
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

  /* FIXME: type */
  ${({ interpolation }) => interpolation}
`

export const TooltipText = styled(Text).attrs({ typo: Typography.Size13 })``

export const EllipsisableContent = styled.div`
  /* NOTE: Line height of Typography.Size13  */
  ${ellipsis(20, LineHeightAbsoluteNumber.Lh18)}
`
