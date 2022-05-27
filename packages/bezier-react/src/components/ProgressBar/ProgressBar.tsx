/* External dependencies */
import React, { memo } from 'react'
import { clamp } from 'lodash-es'

/* Internal dependencies */
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'
import { StyledProgressBarWrapper, StyledProgressBarActive } from './ProgressBar.styled'

export const PROGRESS_BAR_TEST_ID = 'bezier-react-progress-bar'
export const PROGRESS_BAR_ACTIVE_TEST_ID = 'bezier-react-progress-bar-active'

function ProgressBar({
  size = ProgressBarSize.M,
  variant = ProgressBarVariant.Green,
  width = 36,
  percentage = 0,
  testId = PROGRESS_BAR_TEST_ID,
  activeTestId = PROGRESS_BAR_ACTIVE_TEST_ID,
}: ProgressBarProps) {
  const clampedPercentage = clamp(percentage, 0, 100)

  return (
    <StyledProgressBarWrapper
      size={size}
      width={width}
      data-testid={testId}
    >
      <StyledProgressBarActive
        variant={variant}
        percentage={clampedPercentage}
        data-testid={activeTestId}
      />
    </StyledProgressBarWrapper>
  )
}

export default memo(ProgressBar)
