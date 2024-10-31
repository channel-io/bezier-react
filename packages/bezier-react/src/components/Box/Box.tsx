'use client'

import { createElement, forwardRef } from 'react'

import classNames from 'classnames'

import {
  getLayoutStyles,
  getMarginStyles,
  splitByLayoutProps,
  splitByMarginProps,
} from '~/src/types/props-helpers'

import { type BoxProps } from './Box.types'

import styles from './Box.module.scss'

/**
 * `Box` is a primitive layout component. It provides an easy way to access design tokens.
 * @example
 *
 * ```tsx
 * <Box
 *   width="100px"
 *   height="100px"
 *   p="6px"
 *   m="6px"
 *   bgColor="bg-black-light"
 * >
 *   <div>{ ... }</div>
 * </Box>
 * ```
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
  function Box(props, forwardedRef) {
    const [marginProps, marginRest] = splitByMarginProps(props)
    const [layoutProps, layoutRest] = splitByLayoutProps(marginRest)
    const marginStyles = getMarginStyles(marginProps)
    const layoutStyles = getLayoutStyles(layoutProps)

    const {
      children,
      style,
      className,
      as = 'div',
      display,
      ...rest
    } = layoutRest

    /**
     * NOTE: Using the createElement function directly because of a ref type related error.
     * TODO: Fix type error.
     */
    return createElement(
      as,
      {
        ref: forwardedRef,
        style: {
          ...marginStyles.style,
          ...layoutStyles.style,
          ...style,
        },
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
