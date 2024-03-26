import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { clamp } from '~/src/utils/number'
import { cssDimension } from '~/src/utils/style'

import { useThemeName } from '~/src/components/ThemeProvider'

import type { ProgressBarProps } from './ProgressBar.types'

import styles from './ProgressBar.module.scss'

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  function ProgressBar(
    {
      style,
      className,
      size = 'm',
      variant = 'green',
      width = 36,
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
            '--b-progress-bar-width': cssDimension(width),
            '--b-progress-bar-value': clampedValue,
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
        data-testid="bezier-progress-bar"
        {...rest}
      >
        <div
          className={classNames(
            styles.ProgressBarActive,
            useThemeName() === 'dark' && styles['dark-theme']
          )}
        />
      </div>
    )
  }
)
