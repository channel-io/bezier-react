/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from '~/src/types/ComponentProps'

export default interface GNBProps extends
  Omit<BezierComponentProps, 'as'>,
  ChildrenProps {}

