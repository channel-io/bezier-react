/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { TooltipProps } from 'Components/Tooltip'

interface FormLabelOptions {
  htmlFor?: string
}

export default interface FormLabelProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<TooltipProps, 'content'>,
  FormLabelOptions {}
