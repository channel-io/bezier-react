/* External dependencies */
import React from 'react'

/* Internal dependencies */
import SpinnerProps, { SpinnerSize } from './Spinner.types'
import { SpinIcon } from './Spinner.styled'

export const LOADER_TEST_ID = 'ch-design-system-loader'

function Spinner({
  testId = LOADER_TEST_ID,
  className,
  size = SpinnerSize.M,
  color,
}: SpinnerProps) {
  return (
    <SpinIcon
      className={className}
      key="spinner"
      size={size}
      color={color}
      data-testid={testId}
    />
  )
}

export default Spinner
