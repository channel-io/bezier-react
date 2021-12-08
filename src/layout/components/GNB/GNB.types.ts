/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

export default interface GNBProps extends
  Omit<BezierComponentProps, 'as'>,
  ChildrenProps {}

