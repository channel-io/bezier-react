/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type SpinnerProps from './Spinner.types'
import { SpinnerSize } from './Spinner.types'
import { SpinIcon } from './Spinner.styled'

export const SPINNER_TEST_ID = 'bezier-react-spinner'

function Spinner({
  testId = SPINNER_TEST_ID,
  style,
  className,
  interpolation,
  size = SpinnerSize.M,
  color,
}: SpinnerProps) {
  return (
    <SpinIcon
      style={style}
      className={className}
      interpolation={interpolation}
      key="spinner"
      size={size}
      color={color}
      data-testid={testId}
    />
  )
}

export default Spinner
