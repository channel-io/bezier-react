import {
  createElement,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import {
  getMarginStyles,
  splitByMarginProps,
} from '~/src/types/props-helpers'
import { tokenCssVar } from '~/src/utils/style'
import { isNumber } from '~/src/utils/type'

import { type TextProps } from './Text.types'

import styles from './Text.module.scss'

/**
 * `Text` is a component for representing the typography of a design system.
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
  const marginStyles = getMarginStyles(marginProps)

  const {
    children,
    style,
    className,
    as = 'span',
    typo = '15',
    color,
    bold,
    italic,
    truncated,
    align,
    ...rest
  } = marginRest
  const isMultiLineTruncated = isNumber(truncated) && truncated >= 1

  return createElement(as, {
    ref: forwardedRef,
    style: {
      '--b-text-color': tokenCssVar(color),
      '--b-text-line-clamp': isMultiLineTruncated ? truncated : undefined,
      ...marginStyles.style,
      ...style,
    },
    className: classNames(
      styles.Text,
      styles[`typo-${typo}`],
      bold && styles.bold,
      italic && styles.italic,
      truncated === true ? styles.truncated :
        isMultiLineTruncated && styles['multi-line-truncated'],
      align && styles[`align-${align}`],
      marginStyles.className,
      className,
    ),
    'data-testid': 'bezier-text',
    ...rest,
  }, children)
})
