import React, {
  forwardRef,
  memo,
} from 'react'

import classNames from 'classnames'

import {
  getMarginStyles,
  splitByMarginProps,
} from '~/src/types/props-helpers'
import { tokenCssVar } from '~/src/utils/style'

import {
  type IconProps,
  type IconSize,
} from './Icon.types'

import styles from './Icon.module.scss'

export const ICON_TEST_ID = 'bezier-icon'

const getSizeValue = (size: IconSize) => ({
  xl: 44,
  l: 36,
  normal: 24,
  s: 20,
  xs: 16,
  xxs: 12,
  xxxs: 10,
} satisfies Record<IconSize, number>)[size]

export const Icon = memo(forwardRef<SVGSVGElement, IconProps>(function Icon(
  props,
  forwardedRef,
) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyles = getMarginStyles(marginProps)

  const {
    className,
    size = 'normal',
    color,
    source: SourceElement,
    style,
    ...rest
  } = marginRest

  return (
    <SourceElement
      ref={forwardedRef}
      style={{
        '--b-icon-color': tokenCssVar(color),
        ...marginStyles.style,
        ...style,
      } as React.CSSProperties}
      className={classNames(
        styles.Icon,
        marginStyles.className,
        className,
      )}
      width={getSizeValue(size)}
      height={getSizeValue(size)}
      data-testid={ICON_TEST_ID}
      {...rest}
    />
  )
}))
