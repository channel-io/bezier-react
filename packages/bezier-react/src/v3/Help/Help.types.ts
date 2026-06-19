import { type ChildrenProps } from '~/src/types/props'
import { type TooltipProps } from '~/src/v3/Tooltip'

export interface HelpProps
  extends Omit<TooltipProps, 'content' | 'children'>,
    ChildrenProps {}
