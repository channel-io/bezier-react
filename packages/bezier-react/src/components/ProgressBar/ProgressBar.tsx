/* External dependencies */
import React, {
  forwardRef,
  memo,
  type Ref,
} from 'react'

/* Internal dependencies */
import { clamp } from '~/src/utils/numberUtils'

import type ProgressBarProps from './ProgressBar.types'
import {
  ProgressBarSize,
  ProgressBarVariant,
} from './ProgressBar.types'

import {
  StyledProgressBarActive,
  StyledProgressBarWrapper,
} from './ProgressBar.styled'

export const PROGRESS_BAR_ACTIVE_TEST_ID = 'bezier-react-progress-bar-active'

export const ProgressBar = memo(forwardRef(function ProgressBar(
  {
    size = ProgressBarSize.M,
    variant = ProgressBarVariant.Green,
    width = 36,
    value = 0,
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
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="1"
      aria-valuenow={clampedValue}
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
}))
