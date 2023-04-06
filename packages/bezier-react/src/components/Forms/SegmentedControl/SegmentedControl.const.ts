/* Internal dependencies */
import {
  type css,
  Typography,
} from '~/src/foundation'

import { SegmentedControlSize } from './SegmentedControl.types'

export const SIZE_TO_HEIGHT: Record<SegmentedControlSize, number> = {
  [SegmentedControlSize.XS]: 24,
  [SegmentedControlSize.S]: 28,
  [SegmentedControlSize.M]: 36,
  [SegmentedControlSize.L]: 44,
}

export const SIZE_TO_PADDING: Record<SegmentedControlSize, number> = {
  [SegmentedControlSize.XS]: 1,
  [SegmentedControlSize.S]: 2,
  [SegmentedControlSize.M]: 2,
  [SegmentedControlSize.L]: 4,
}

export const DIVIDER_WIDTH = 1
export const DIVIDER_SIDE_MARGIN = 6

export const SIZE_TO_DIVIDER_VERTICAL_MARGIN: Record<SegmentedControlSize, number> = {
  [SegmentedControlSize.XS]: 1,
  [SegmentedControlSize.S]: 2,
  [SegmentedControlSize.M]: 2,
  [SegmentedControlSize.L]: 4,
}

export const SIZE_TO_OPTION_TYPOGRAPHY: Record<SegmentedControlSize, ReturnType<typeof css>> = {
  [SegmentedControlSize.XS]: Typography.Size13,
  [SegmentedControlSize.S]: Typography.Size14,
  [SegmentedControlSize.M]: Typography.Size14,
  [SegmentedControlSize.L]: Typography.Size14,
}
