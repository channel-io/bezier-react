/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { TooltipProps } from 'Components/Tooltip'

export default interface HelpProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<TooltipProps, 'content'> {}
