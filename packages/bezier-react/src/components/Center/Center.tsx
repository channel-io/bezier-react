import React, { forwardRef } from 'react'

import classNames from 'classnames'

import {
  getLayoutStyles,
  getMarginStyles,
  splitByLayoutProps,
  splitByMarginProps,
} from '~/src/utils/props'

import { type CenterProps } from './Center.types'

import styles from './Center.module.scss'

/**
 * `Center` is a layout component that centers its child within itself.
 * @example
 *
 * ```tsx
 * <Center>
 *   Centered content
 * </Center>
 * ```
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(function Center(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const [layoutProps, layoutRest] = splitByLayoutProps(marginRest)
  const marginStyles = getMarginStyles(marginProps)
  const layoutStyles = getLayoutStyles(layoutProps)

  const {
    children,
    style,
    className,
    display = 'flex',
    ...rest
  } = layoutRest

  return (
    <div
      ref={forwardedRef}
      style={{
        ...marginStyles.style,
        ...layoutStyles.style,
        ...style,
      }}
      className={classNames(
        styles.Center,
        display && styles[`display-${display}`],
        marginStyles.className,
        layoutStyles.className,
        className,
      )}
      data-testid="bezier-center"
      {...rest}
    >
      { children }
    </div>
  )
})
