'use client'

import { createElement, forwardRef } from 'react'
import type { CSSProperties } from 'react'

import classNames from 'classnames'


import {
  getBetaLayoutStyles,
  getBetaMarginStyles,
  splitByBetaLayoutProps,
  splitByBetaMarginProps,
} from '~/src/types/props-helpers'

import type { BoxProps } from './Box.types'

import styles from './Box.module.scss'


/**
 * `Box` is a primitive layout component. It provides an easy way to access design tokens.
 * @example
 *
 * ```tsx
 * <Box
 *   width="100px"
 *   height="100px"
 *   padding="6px"
 *   margin="6px"
 *   backgroundColor="fill-neutral"
 * >
 *   <div>{ ... }</div>
 * </Box>
 * ```
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
  function Box(props, forwardedRef) {
    const [marginProps, marginRest] = splitByBetaMarginProps(props)
    const [layoutProps, layoutRest] = splitByBetaLayoutProps(marginRest)
    const marginStyles = getBetaMarginStyles(marginProps)
    const layoutStyles = getBetaLayoutStyles(layoutProps)

    const {
      children,
      style,
      className,
      as = 'div',
      display,
      ...rest
    } = layoutRest

    /**
     * NOTE: Keep the existing loose polymorphic Box pattern for API parity.
     * TODO: Replace this with a typed polymorphic helper when ref inference is standardized.
     */
    return createElement(
      as,
      {
        ref: forwardedRef,
        style: {
          ...marginStyles.style,
          ...layoutStyles.style,
          ...style,
        } as CSSProperties,
        className: classNames(
          styles.Box,
          display && styles[`display-${display}`],
          marginStyles.className,
          layoutStyles.className,
          className
        ),
        'data-testid': 'bezier-box',
        ...rest,
      },
      children
    )
  }
)
