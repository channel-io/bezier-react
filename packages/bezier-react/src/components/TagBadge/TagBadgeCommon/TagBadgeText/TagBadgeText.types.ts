import {
  type BezierComponentProps,
  type ChildrenProps,
} from '~/src/types/ComponentProps'

import { type TextProps } from '~/src/components/Text'

interface TagBadgeTextOptions {
  horizontalPadding: number
}
interface TagBadgeTextProps extends
  Omit<BezierComponentProps, 'style' | 'className' | 'interpolation'>,
  ChildrenProps,
  Pick<TextProps, 'typo'>,
  TagBadgeTextOptions {}

export default TagBadgeTextProps
