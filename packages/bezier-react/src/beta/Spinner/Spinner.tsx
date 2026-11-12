'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import type { SemanticColor } from '~/src/types/tokens'
import { colorTokenCssVar } from '~/src/utils/style'

import type { SpinnerProps } from './Spinner.types'

import styles from './Spinner.module.scss'




const DEFAULT_SPINNER_COLOR = 'fill-neutral-heavy' satisfies SemanticColor

/**
 * `Spinner` is a component for indicating loading state.
 * @example
 *
 * ```tsx
 * <Spinner
 *   size="20"
 *   color="fill-neutral-heavy"
 * />
 * ```
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  function Spinner(
    {
      style,
      className,
      size = '20',
      color = DEFAULT_SPINNER_COLOR,
      role = 'status',
      'aria-label': ariaLabel,
      ...rest
    },
    forwardedRef
  ) {
    return (
      <div
        {...rest}
        ref={forwardedRef}
        role={role}
        aria-label={ariaLabel ?? (role === 'status' ? 'Loading' : undefined)}
        style={
          {
            '--b-beta-spinner-color': colorTokenCssVar(color),
            ...style,
          } as React.CSSProperties
        }
        className={classNames(
          styles.Spinner,
          styles[`size-${size}`],
          className
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden
        >
          {/* NOTE: pathLength normalizes the circumference to 100, so the arc length is set in percent. */}
          <circle
            cx="12"
            cy="12"
            pathLength="100"
            className={styles.Arc}
          />
        </svg>
      </div>
    )
  }
)
