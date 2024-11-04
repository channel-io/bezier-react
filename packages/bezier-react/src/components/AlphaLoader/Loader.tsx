'use client'

import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { type LoaderProps } from './Loader.types'

import styles from './Loader.module.scss'

export const LOADER_TEST_ID = 'bezier-loader'

export const Loader = forwardRef<HTMLSpanElement, LoaderProps>(function Loader(
  { className, size, variant = 'secondary', ...rest },
  forwardedRef
) {
  return (
    <span
      className={classNames(
        styles.Loader,
        size && styles[`size-${size}`],
        styles[`variant-${variant}`],
        className
      )}
      ref={forwardedRef}
      data-testid={LOADER_TEST_ID}
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
})
