import { type ChildrenProps } from '~/src/types/props'

import { type TooltipProps } from '~/src/components/Tooltip'

export interface HelpProps
  extends Omit<TooltipProps, 'content' | 'children'>,
    ChildrenProps {}
