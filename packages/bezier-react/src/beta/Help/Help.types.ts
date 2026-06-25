import { type TooltipProps } from '~/src/beta/Tooltip'
import { type ChildrenProps } from '~/src/types/props'

export interface HelpProps
  extends Omit<TooltipProps, 'content' | 'children'>,
    ChildrenProps {}
