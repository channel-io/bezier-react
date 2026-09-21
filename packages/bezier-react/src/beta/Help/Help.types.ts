import { type IconSize } from '~/src/beta/Icon'
import { type TooltipProps } from '~/src/beta/Tooltip'
import { type ChildrenProps, type SizeProps } from '~/src/types/props'

export interface HelpProps
  extends Omit<TooltipProps, 'content' | 'children'>,
    SizeProps<IconSize>,
    ChildrenProps {}
