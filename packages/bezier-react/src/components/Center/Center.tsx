import React, { forwardRef } from 'react'

import classNames from 'classnames'

import {
  getLayoutStyle,
  getMarginStyle,
  splitByLayoutProps,
  splitByMarginProps,
} from '~/src/utils/props'

import { type CenterProps } from './Center.types'

import styles from './Center.module.scss'

/**
 * `Center` is a layout component that centers its child within itself.
 *
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
  const marginStyle = getMarginStyle(marginProps)
  const layoutStyle = getLayoutStyle(layoutProps)

  const {
    children,
    style,
    className,
    display = 'flex',
    testId = 'bezier-react-center',
    ...rest
  } = layoutRest

  return (
    <div
      ref={forwardedRef}
      style={{
        ...marginStyle.style,
        ...layoutStyle.style,
        ...style,
      }}
      className={classNames(
        styles.Center,
        display && styles[`display-${display}`],
        marginStyle.className,
        layoutStyle.className,
        className,
      )}
      data-testid={testId}
      {...rest}
    >
      { children }
    </div>
  )
})
