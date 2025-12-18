'use client'
import { forwardRef, memo } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import { getMarginStyles, splitByMarginProps } from '~/src/types/props-helpers'
import { betaTokenCssVar } from '~/src/utils/style'

import { type IconProps } from './Icon.types'

import styles from './Icon.module.scss'

export const ICON_TEST_ID = 'bezier-icon'

export const Icon = memo(
  forwardRef<SVGSVGElement, IconProps>(function Icon(props, forwardedRef) {
    const [marginProps, marginRest] = splitByMarginProps(props)
    const marginStyles = getMarginStyles(marginProps)

    const {
      className,
      size = 'm',
      color,
      source: SourceElement,
      style,
      ...rest
    } = marginRest

    return (
      <SourceElement
        ref={forwardedRef}
        style={
          {
            '--b-icon-color': betaTokenCssVar(color),
            ...marginStyles.style,
            ...style,
          } as React.CSSProperties
        }
        className={classNames(
          styles.Icon,
          styles[`size-${size}`],
          marginStyles.className,
          className
        )}
        data-testid={ICON_TEST_ID}
        {...rest}
      />
    )
  })
)
