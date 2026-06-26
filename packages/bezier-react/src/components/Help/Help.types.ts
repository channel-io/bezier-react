import { type ChildrenProps } from '~/src/types/props'

import { type TooltipProps } from '~/src/components/Tooltip'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface HelpProps
  extends Omit<TooltipProps, 'content' | 'children'>,
    ChildrenProps {}
