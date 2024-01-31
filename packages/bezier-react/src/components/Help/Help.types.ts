import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
} from '~/src/types/props'

import { type TooltipProps } from '~/src/components/Tooltip'

export default interface HelpProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Omit<TooltipProps, 'content' | 'children'> {}
