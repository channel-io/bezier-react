'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import { clamp } from '~/src/utils/number'
import { cssDimension } from '~/src/utils/style'

import { type ProgressBarProps } from './ProgressBar.types'

import styles from './ProgressBar.module.scss'

export const PROGRESS_BAR_TEST_ID = 'bezier-v3-progress-bar'

/**
 * `ProgressBar` displays the completion status of a task.
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  function ProgressBar(
    {
      style,
      className,
      size = 'm',
      variant = 'default',
      width = 144,
      value = 0,
      ...rest
    },
    forwardedRef
  ) {
    const clampedValue = clamp(value, 0, 1)

    return (
      <div
        style={
          {
            '--b-v3-progress-bar-width': cssDimension(width),
            '--b-v3-progress-bar-value': clampedValue,
            ...style,
          } as React.CSSProperties
        }
        className={classNames(
          styles.ProgressBar,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          className
        )}
        ref={forwardedRef}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={clampedValue}
        data-testid={PROGRESS_BAR_TEST_ID}
        {...rest}
      >
        <div className={styles.ProgressBarActive} />
      </div>
    )
  }
)
