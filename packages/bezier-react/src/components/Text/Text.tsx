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
  const marginStyle = getMarginStyle(marginProps)

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
  const isMultiLineTruncated = typeof truncated === 'number' && truncated >= 1

  return createElement(as, {
    ref: forwardedRef,
    style: {
      '--b-text-color': tokenCssVar(color),
      '--b-text-line-clamp': isMultiLineTruncated ? truncated : undefined,
      ...marginStyle.style,
      ...style,
    },
    className: classNames(
      styles.Text,
      styles[`typo-${typo}`],
      bold && styles.bold,
      italic && styles.italic,
      truncated === true && styles.truncated,
      isMultiLineTruncated && styles['multi-line-truncated'],
      align && styles[`align-${align}`],
      marginStyle.className,
      className,
    ),
    'data-testid': testId,
    ...rest,
  }, children)
})
