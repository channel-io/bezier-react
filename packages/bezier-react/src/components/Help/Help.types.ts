/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from '~/src/types/ComponentProps'
import { TooltipProps } from '~/src/components/Tooltip'

export default interface HelpProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<TooltipProps, 'content'> {}
