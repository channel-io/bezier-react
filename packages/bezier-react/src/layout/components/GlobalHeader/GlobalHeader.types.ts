/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from '~/src/types/ComponentProps'

interface GlobalHeaderOptions {
  isWindows?: boolean
}

export default interface GlobalHeaderProps extends
  Omit<BezierComponentProps, 'as'>,
  ChildrenProps,
  GlobalHeaderOptions {}
