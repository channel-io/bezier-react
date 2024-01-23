import React, { forwardRef } from 'react'

import classNames from 'classnames'

import {
  cssDimension,
  px,
} from '~/src/utils/style'

import type LegacyStackItemProps from './LegacyStackItem.types'

import styles from './LegacyStackItem.module.scss'

/**
 * `StackItem` is used along `Stack`.
 * It inherits the default settings from `Stack`,
 * but allows to override some props to customize the behavior
 * of particular item.
 *
 * If you are not using `StackItem` as the direct child of `Stack`,
 * be reminded to forward props in `StackItemProps` to `StackItem` component,
 * or manually implement the behavior compatible with `StackItem`.
 */
export const LegacyStackItem = forwardRef<HTMLElement, LegacyStackItemProps>(function StackItem({
  as = 'div',
  children,
  style,
  className,
  direction,
  justify,
  align,
  size,
  weight = 0,
  grow = false,
  shrink = false,
  marginBefore = 0,
  marginAfter = 0,
  testId = 'bezier-legacy-stack-item',
}, forwardedRef) {
  const Comp = as

  return (
    <Comp
      ref={forwardedRef}
      style={{
        ...style,
        '--b-main-axis-size': px(size),
        '--b-grow-weight': grow && cssDimension(weight),
        '--b-shrink-weight': shrink && cssDimension(weight),
        '--b-margin-before': `${marginBefore}px`,
        '--b-margin-after': `${marginAfter}px`,
      }}
      className={classNames(
        styles.LegacyStackItem,
        styles[`direction-${direction}`],
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        className,
      )}
      data-testid={testId}
    >
      { children }
    </Comp>
  )
})
