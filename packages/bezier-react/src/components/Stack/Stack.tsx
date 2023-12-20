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

import type {
  HStackProps,
  StackProps,
  VStackProps,
} from './Stack.types'

import styles from './Stack.module.scss'

/**
 * `Stack` is a layout component used to group elements together and apply a space between them.
 *
 * @example
 *
 * ```tsx
 * <Stack
 *   direction="horizontal"
 *   spacing={6}
 * >
 *   <div>{ ... }</div>
 *   <div>{ ... }</div>
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLElement, StackProps>(function Stack(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const [layoutProps, layoutRest] = splitByLayoutProps(marginRest)
  const marginStyle = getMarginStyle(marginProps)
  const layoutStyle = getLayoutStyle(layoutProps)

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
    testId = 'bezier-react-stack',
    ...rest
  } = layoutRest

  return createElement(as, {
    ref: forwardedRef,
    style: {
      '--b-stack-spacing': cssDimension(spacing),
      ...marginStyle.style,
      ...layoutStyle.style,
      ...style,
    },
    className: classNames(
      styles.Stack,
      display && styles[`display-${display}`],
      direction && styles[`direction-${direction}`],
      justify && styles[`justify-${justify}`],
      align && styles[`align-${align}`],
      reverse && styles.reverse,
      wrap && styles.wrap,
      marginStyle.className,
      layoutStyle.className,
      className,
    ),
    'data-testid': testId,
    ...rest,
  }, children)
})

/**
 * `HStack` is a shorthand component equivalent to `Stack` with a horizontal direction property.
 * @see Stack
 */
export const HStack = forwardRef<HTMLElement, HStackProps>(function HStack(props, forwardedRef) {
  return createElement(Stack, {
    ...props,
    direction: 'horizontal',
    ref: forwardedRef,
  })
})

/**
 * `VStack` is a shorthand component equivalent to `Stack` with a vertical direction property.
 * @see Stack
 */
export const VStack = forwardRef<HTMLElement, VStackProps>(function VStack(props, forwardedRef) {
  return createElement(Stack, {
    ...props,
    direction: 'vertical',
    ref: forwardedRef,
  })
})
