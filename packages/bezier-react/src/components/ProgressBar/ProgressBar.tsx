/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import type ProgressBarProps from './ProgressBar.types'
import { StyledProgressBarWrapper } from './ProgressBar.styled'

const PROGRESS_BAR_TEST_ID = 'bezier-react-progress-bar'

function ProgressBar({
  testId = PROGRESS_BAR_TEST_ID,
}: ProgressBarProps) {
  return (
    <StyledProgressBarWrapper
      data-testid={testId}
    />
  )
}

export default memo(ProgressBar)
