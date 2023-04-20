import {
  type BezierComponentProps,
  type ChildrenProps,
} from '~/src/types/ComponentProps'

import { type LegacyTooltipProps } from '~/src/components/LegacyTooltip'

export default interface HelpProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<LegacyTooltipProps, 'content'> {}
