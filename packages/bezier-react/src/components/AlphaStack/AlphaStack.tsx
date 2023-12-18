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

import type { StackProps } from './AlphaStack.types'

import styles from './Stack.module.scss'

/**
 * `AlphaStack` provides an abstraction of **flex layout** so that
 * rendering of child elements **linearly** can be done
 * with simplified options.
 *
 * `AlphaStack` always fills the parent element.
 *
 * Be reminded that the first depth children element of AlphaStack would be StackItem that is adjusted by flex layout
 *
 * @example
 *
 * ```tsx
 * <AlphaStack direction="horizontal" spacing={8}>
 *  <div>{ ... }</div>
 *  <div>{ ... }</div>
 * </AlphaStack>
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
