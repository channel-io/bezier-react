/* Internal dependencies */
import {
  type BezierComponentProps,
  type ChildrenProps,
} from '~/src/types/ComponentProps'

import { type TooltipProps } from '~/src/components/Tooltip'

export default interface HelpProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<TooltipProps, 'content'> {}
