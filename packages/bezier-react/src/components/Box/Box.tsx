import React, { forwardRef } from 'react'

import classNames from 'classnames'

import sharedStyles from '~/src/components/shared.module.scss'

import { type BoxProps } from './Box.types'

import styles from './Box.module.scss'

function getPrefixedClassName<Prop extends string, Prefix extends string>(prop: Prop, prefix: Prefix) {
  return `${prefix}-${prop}` as const
}

export const Box = forwardRef<HTMLElement, BoxProps>(function Box({
  children,
  style,
  className,
  as = 'div',
  display = 'block',
  ...rest
}, forwardedRef) {
  return React.createElement(as, {
    ref: forwardedRef,
    className: classNames(
      sharedStyles.margin,
      sharedStyles.layout,
      styles.Box,
      styles[getPrefixedClassName(display, 'display')],
      className,
    ),
    ...rest,
  }, children)
})
