/* External dependencies */
import React from 'react'

/* Interanal dependencies */
import { render } from 'Utils/testUtils'
import ProgressBar, {
  PROGRESS_BAR_TEST_ID,
  PROGRESS_BAR_ACTIVE_TEST_ID,
} from './ProgressBar'
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'

describe('ProgressBar', () => {
  const defaultProps: ProgressBarProps = {
    size: ProgressBarSize.M,
    variant: ProgressBarVariant.Green,
    width: 36,
    percentage: 50,
  }

  const renderComponent = (props?: Partial<ProgressBarProps>) => render(
    <ProgressBar {...defaultProps} {...props} />,
  )

  it('should render default ProgressBar', () => {
    const { getByTestId } = renderComponent()
    const progressBar = getByTestId(PROGRESS_BAR_TEST_ID)
    const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

    // TODO
    expect(progressBar).toBe(progressBar)
    expect(progressBarActive).toBe(progressBarActive)
  })
})
