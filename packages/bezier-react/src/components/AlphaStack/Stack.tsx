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
import { cssDimension } from '~/src/utils/style'

import sharedStyles from '~/src/components/shared.module.scss'

import type { StackProps } from './Stack.types'

import styles from './Stack.module.scss'

/**
 * `Stack` is a layout component used to group elements together and apply a space between them.
 *
 * @example
 *
 * ```tsx
 * <Stack
 *   direction="horizontal"
 *   gap={6}
 * >
 *   <div>{ ... }</div>
 *   <div>{ ... }</div>
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLElement, StackProps>(function Stack(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const [layoutProps, layoutRest] = splitByLayoutProps(marginRest)
  const {
    children,
    style,
    className,
    as = 'div',
    display = 'flex',
    direction,
    justify,
    align,
    gap,
    reverse,
    wrap,
    testId = 'bezier-react-stack',
    ...rest
  } = layoutRest

  return createElement(as, {
    ref: forwardedRef,
    style: {
      '--b-stack-gap': cssDimension(gap),
      ...getMarginStyle(marginProps),
      ...getLayoutStyle(layoutProps),
      ...style,
    },
    className: classNames(
      sharedStyles.margin,
      sharedStyles.layout,
      styles.Stack,
      display && styles[`display-${display}`],
      direction && styles[`direction-${direction}`],
      justify && styles[`justify-${justify}`],
      align && styles[`align-${align}`],
      reverse && styles.reverse,
      wrap && styles.wrap,
      className,
    ),
    'data-testid': testId,
    ...rest,
  }, children)
})
