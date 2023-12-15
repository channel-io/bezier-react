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
      className,
    ),
    'data-testid': testId,
    ...rest,
  }, children)
})
