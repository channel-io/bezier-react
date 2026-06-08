'use client'

import { createElement, forwardRef } from 'react'

import classNames from 'classnames'

import {
  getV3LayoutStyles,
  getV3MarginStyles,
  splitByV3LayoutProps,
  splitByV3MarginProps,
} from '~/src/types/props-helpers'
import { cssDimension } from '~/src/utils/style'

import type { BaseStackProps } from './BaseStack.types'

import styles from './BaseStack.module.scss'

/**
 * `BaseStack` is a layout component used internally to group elements together and apply a space between them.
 */
export const BaseStack = forwardRef<HTMLElement, BaseStackProps>(
  function BaseStack(props, forwardedRef) {
    const [marginProps, marginRest] = splitByV3MarginProps(props)
    const [layoutProps, layoutRest] = splitByV3LayoutProps(marginRest)
    const marginStyles = getV3MarginStyles(marginProps)
    const layoutStyles = getV3LayoutStyles(layoutProps)

    const {
      children,
      style,
      className,
      as = 'div',
      display = 'flex',
      direction,
      justify,
      align,
      spacing,
      reverse,
      wrap,
      ...rest
    } = layoutRest

    return createElement(
      as,
      {
        ref: forwardedRef,
        style: {
          '--b-stack-spacing': cssDimension(spacing),
          ...marginStyles.style,
          ...layoutStyles.style,
          ...style,
        },
        className: classNames(
          styles.BaseStack,
          display && styles[`display-${display}`],
          direction && styles[`direction-${direction}`],
          justify && styles[`justify-${justify}`],
          align && styles[`align-${align}`],
          reverse && styles.reverse,
          wrap && styles.wrap,
          marginStyles.className,
          layoutStyles.className,
          className
        ),
        'data-testid': 'bezier-stack',
        ...rest,
      },
      children
    )
  }
)
