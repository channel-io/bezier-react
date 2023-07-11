import React, { forwardRef } from 'react'

import classNames from 'classnames'

import type SpinnerProps from './Spinner.types'
import { SpinnerSize } from './Spinner.types'

import styles from './Spinner.module.scss'

export const SPINNER_TEST_ID = 'bezier-react-spinner'

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(function Spinner({
  testId = SPINNER_TEST_ID,
  as,
  style,
  className,
  size = SpinnerSize.M,
  color,
  ...rest
}, forwardedRef) {
  const Component = as || 'div'

  return (
    <Component
      {...rest}
      ref={forwardedRef}
      style={{
        '--bezier-spinner-color': color ? `var(--${color})` as const : undefined,
        ...style,
      }}
      className={classNames(
        styles.Spinner,
        styles[size],
        className,
      )}
      key="spinner"
      data-testid={testId}
    />
  )
})

export default Spinner
