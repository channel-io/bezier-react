/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

interface SideCommonOptions {
  onChangeSideWidth?: (width: number) => void
}

export default interface SideCommonProps extends
  BezierComponentProps,
  ChildrenProps,
  SideCommonOptions {}
