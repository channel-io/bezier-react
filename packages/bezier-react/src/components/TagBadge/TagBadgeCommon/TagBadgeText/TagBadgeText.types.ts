/* Internal dependencies */
import { InjectedInterpolation } from 'Types/Foundation'
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

interface TagBadgeTextOptions {
  typo: InjectedInterpolation
  horizontalPadding: number
}
interface TagBadgeTextProps extends
  Omit<BezierComponentProps, 'style' | 'className' | 'interpolation'>,
  ChildrenProps,
  TagBadgeTextOptions {}

export default TagBadgeTextProps
