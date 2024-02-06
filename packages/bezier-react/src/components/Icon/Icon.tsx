import React, {
  forwardRef,
  memo,
} from 'react'

import classNames from 'classnames'

import {
  getMarginStyles,
  splitByMarginProps,
} from '~/src/utils/props'
import { tokenCssVar } from '~/src/utils/style'

import {
  type IconProps,
  IconSize,
} from './Icon.types'

import styles from './Icon.module.scss'

export const ICON_TEST_ID = 'bezier-icon'

export const Icon = memo(forwardRef<SVGSVGElement, IconProps>(function Icon(
  props,
  forwardedRef,
) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyles = getMarginStyles(marginProps)

  const {
    className,
    size = IconSize.Normal,
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
      width={size}
      height={size}
      data-testid={ICON_TEST_ID}
      {...rest}
    />
  )
}))
