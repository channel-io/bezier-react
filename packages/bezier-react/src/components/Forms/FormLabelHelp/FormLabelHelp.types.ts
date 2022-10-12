/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { TooltipProps } from 'Components/Tooltip'

export default interface FormLabelHelpProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<TooltipProps, 'content'> {}
