import {
  createElement,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import {
  getMarginStyle,
  splitByMarginProps,
} from '~/src/utils/props'
import { tokenCssVar } from '~/src/utils/style'

import sharedStyles from '~/src/components/shared.module.scss'

import { type TextProps } from './Text.types'

import styles from './Text.module.scss'

/**
 * `Text` is a component for representing the typography of a design system.
 *
 * @example
 *
 * ```tsx
 * <Text
 *   typo="15"
 *   color="txt-black-darkest"
 * >
 *   Hello, Channel!
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>(function Text(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const {
    children,
    style,
    className,
    as = 'span',
    testId = 'bezier-react-text',
    typo = '15',
    color,
    bold,
    italic,
    truncated,
    align,
    ...rest
  } = marginRest
  return createElement(as, {
    ref: forwardedRef,
    style: {
      '--b-text-color': tokenCssVar(color),
      ...getMarginStyle(marginProps),
      ...style,
    },
    className: classNames(
      sharedStyles.margin,
      styles.Text,
      styles[`typo-${typo}`],
      bold && styles.bold,
      italic && styles.italic,
      truncated && styles.truncated,
      align && styles[`align-${align}`],
      className,
    ),
    'data-testid': testId,
    ...rest,
  }, children)
})
