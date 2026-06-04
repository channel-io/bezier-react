'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import type { BetaSemanticColor } from '~/src/types/beta-tokens'
import { colorTokenCssVar } from '~/src/utils/style'

import type { SpinnerProps } from './Spinner.types'

import styles from './Spinner.module.scss'

const DEFAULT_SPINNER_COLOR = 'icon-neutral' satisfies BetaSemanticColor

/**
 * `Spinner` is a component for indicating loading state.
 * @example
 *
 * ```tsx
 * <Spinner
 *   size="m"
 *   color="icon-neutral"
 * />
 * ```
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  function Spinner(
    {
      style,
      className,
      size = 'm',
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
            '--b-v3-spinner-color': colorTokenCssVar(color),
            ...style,
          } as React.CSSProperties
        }
        className={classNames(
          styles.Spinner,
          styles[`size-${size}`],
          className
        )}
      />
    )
  }
)
