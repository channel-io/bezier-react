/* External dependencies */
import React, {
  memo,
  forwardRef,
  type Ref,
} from 'react'
import { clamp } from 'lodash-es'

/* Internal dependencies */
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'
import { StyledProgressBarWrapper, StyledProgressBarActive } from './ProgressBar.styled'

export const PROGRESS_BAR_TEST_ID = 'bezier-react-progress-bar'
export const PROGRESS_BAR_ACTIVE_TEST_ID = 'bezier-react-progress-bar-active'

function ProgressBar(
  {
    size = ProgressBarSize.M,
    variant = ProgressBarVariant.Green,
    width = 36,
    value = 0,
    testId = PROGRESS_BAR_TEST_ID,
    activeClassName,
    activeInterpolation,
    activeStyle,
    activeTestId = PROGRESS_BAR_ACTIVE_TEST_ID,
    ...rest
  }: ProgressBarProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const clampedValue = clamp(value, 0, 1)

  return (
    <StyledProgressBarWrapper
      ref={forwardedRef}
      size={size}
      width={width}
      data-testid={testId}
      {...rest}
    >
      <StyledProgressBarActive
        variant={variant}
        value={clampedValue}
        className={activeClassName}
        interpolation={activeInterpolation}
        style={activeStyle}
        data-testid={activeTestId}
      />
    </StyledProgressBarWrapper>
  )
}

export default memo(forwardRef(ProgressBar))
