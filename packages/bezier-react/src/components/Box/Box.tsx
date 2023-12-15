import {
  createElement,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import {
  getLayoutStyle,
  getMarginStyle,
  splitByLayoutProps,
  splitByMarginProps,
} from '~/src/utils/props'

import sharedStyles from '~/src/components/shared.module.scss'

import { type BoxProps } from './Box.types'

import styles from './Box.module.scss'

export const Box = forwardRef<HTMLElement, BoxProps>(function Box(props, forwardedRef) {
  const [marginProps, withoutMarginProps] = splitByMarginProps(props)
  const [layoutProps, ownProps] = splitByLayoutProps(withoutMarginProps)
  const {
    children,
    style,
    className,
    as = 'div',
    display = 'block',
    ...rest
  } = ownProps

  return createElement(as, {
    ref: forwardedRef,
    style: {
      ...getMarginStyle(marginProps),
      ...getLayoutStyle(layoutProps),
      ...style,
    },
    className: classNames(
      sharedStyles.margin,
      sharedStyles.layout,
      styles.Box,
      styles[`display-${display}`],
      className,
    ),
    ...rest,
  }, children)
})
