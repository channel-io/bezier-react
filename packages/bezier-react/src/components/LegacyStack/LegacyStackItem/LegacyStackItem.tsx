import React, { forwardRef } from 'react'

import classNames from 'classnames'

import {
  isInteger,
  isNil,
} from '~/src/utils/type'

import type LegacyStackItemProps from './LegacyStackItem.types'

import styles from './LegacyStackItem.module.scss'

const sanitizeWeight = (weight: number): number => {
  if (weight < 0) { return 0 }
  if (!isInteger(weight)) { return 0 }
  return weight
}

/**
 * @deprecated Use layout components(`Box`, `Stack`) that support flex item related properties (`shrink`, `grow`) instead.
 * @example
 *
 * ```
 * <Stack>
 *   <Stack grow={1} shrink={1} {...}>
 *     { ... }
 *   </Stack>
 *   <Box grow={0} shrink={0} {...} />
 * </Stack>
 * ```
 *
 *
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
        '--b-main-axis-size': isNil(size) ? 'initial' : `${size}px`,
        '--b-grow-weight': grow ? sanitizeWeight(weight) : '0',
        '--b-shrink-weight': shrink ? sanitizeWeight(weight) : '0',
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
