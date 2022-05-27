/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'
import { StyledProgressBarWrapper } from './ProgressBar.styled'

const PROGRESS_BAR_TEST_ID = 'bezier-react-progress-bar'

function ProgressBar({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = ProgressBarSize.M,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = ProgressBarVariant.Green,
  testId = PROGRESS_BAR_TEST_ID,
}: ProgressBarProps) {
  return (
    <StyledProgressBarWrapper
      data-testid={testId}
    />
  )
}

export default memo(ProgressBar)
