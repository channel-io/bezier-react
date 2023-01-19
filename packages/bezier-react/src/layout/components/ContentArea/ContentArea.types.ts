/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from '~/src/types/ComponentProps'

type FocusEventHandler = React.FocusEventHandler<HTMLDivElement>

interface ContentAreaOptions {
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
}

export default interface ContentAreaProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentAreaOptions {}
