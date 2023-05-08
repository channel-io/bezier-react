import {
  Typography,
  type css,
} from '~/src/foundation'

import { LegacySegmentedControlSize } from './LegacySegmentedControl.types'

export const SIZE_TO_HEIGHT: Record<LegacySegmentedControlSize, number> = {
  [LegacySegmentedControlSize.XS]: 24,
  [LegacySegmentedControlSize.S]: 28,
  [LegacySegmentedControlSize.M]: 36,
  [LegacySegmentedControlSize.L]: 44,
}

export const SIZE_TO_PADDING: Record<LegacySegmentedControlSize, number> = {
  [LegacySegmentedControlSize.XS]: 1,
  [LegacySegmentedControlSize.S]: 2,
  [LegacySegmentedControlSize.M]: 2,
  [LegacySegmentedControlSize.L]: 4,
}

export const DIVIDER_WIDTH = 1
export const DIVIDER_SIDE_MARGIN = 6

export const SIZE_TO_DIVIDER_VERTICAL_MARGIN: Record<LegacySegmentedControlSize, number> = {
  [LegacySegmentedControlSize.XS]: 1,
  [LegacySegmentedControlSize.S]: 2,
  [LegacySegmentedControlSize.M]: 2,
  [LegacySegmentedControlSize.L]: 4,
}

export const SIZE_TO_OPTION_TYPOGRAPHY: Record<LegacySegmentedControlSize, ReturnType<typeof css>> = {
  [LegacySegmentedControlSize.XS]: Typography.Size13,
  [LegacySegmentedControlSize.S]: Typography.Size14,
  [LegacySegmentedControlSize.M]: Typography.Size14,
  [LegacySegmentedControlSize.L]: Typography.Size14,
}
