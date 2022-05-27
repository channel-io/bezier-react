/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'
import { StyledProgressBarWrapper, StyledProgressBarActive } from './ProgressBar.styled'

const PROGRESS_BAR_TEST_ID = 'bezier-react-progress-bar'

function ProgressBar({
  size = ProgressBarSize.M,
  variant = ProgressBarVariant.Green,
  testId = PROGRESS_BAR_TEST_ID,
}: ProgressBarProps) {
  return (
    <StyledProgressBarWrapper
      size={size}
      data-testid={testId}
    >
      <StyledProgressBarActive variant={variant} />
    </StyledProgressBarWrapper>
  )
}

export default memo(ProgressBar)
