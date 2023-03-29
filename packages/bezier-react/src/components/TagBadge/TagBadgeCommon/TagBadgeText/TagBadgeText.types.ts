/* Internal dependencies */
import { type InjectedInterpolation } from '~/src/types/Foundation'
import {
  type BezierComponentProps,
  type ChildrenProps,
} from '~/src/types/ComponentProps'

interface TagBadgeTextOptions {
  typo: InjectedInterpolation
  horizontalPadding: number
}
interface TagBadgeTextProps extends
  Omit<BezierComponentProps, 'style' | 'className' | 'interpolation'>,
  ChildrenProps,
  TagBadgeTextOptions {}

export default TagBadgeTextProps
