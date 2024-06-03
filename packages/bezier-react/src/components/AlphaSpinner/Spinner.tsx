import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { type SpinnerProps } from './Spinner.types'

import styles from './Spinner.module.scss'

export const SPINNER_TEST_ID = 'bezier-spinner'

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  function Spinner(
    { className, size, variant = 'secondary', ...rest },
    forwardedRef
  ) {
    return (
      <span
        className={classNames(
          styles.Spinner,
          size && styles[`size-${size}`],
          styles[`variant-${variant}`],
          className
        )}
        ref={forwardedRef}
        data-testid={SPINNER_TEST_ID}
        {...rest}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <circle
            cx="8"
            cy="8"
            r="6.5"
            className={styles.track}
          />

          <circle
            cx="8"
            cy="8"
            r="6.5"
            className={styles.indicator}
          />
        </svg>
      </span>
    )
  }
)
