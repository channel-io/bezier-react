'use client'

import { forwardRef, memo } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import { getSourceSizeClassName } from '~/src/types/alpha-props-helpers'
import { getMarginStyles, splitByMarginProps } from '~/src/types/props-helpers'
import { alphaColorTokenCssVar } from '~/src/utils/style'

import { type IconProps } from './Icon.types'

import styles from './Icon.module.scss'

/**
 * `Icon` is a component that renders SVG icons from "@channel.io/bezier-icons"
 * @example
 * ```tsx
 * import { ChannelBtnFilledIcon } from '@channel.io/bezier-icons'
 *
 * <Icon
 *   source={ChannelBtnFilledIcon}
 *   size="24"
 *   color="fg-black-darker"
 * />
 * ```
 */
export const Icon = memo(
  forwardRef<SVGSVGElement, IconProps>(function Icon(props, forwardedRef) {
    const [marginProps, marginRest] = splitByMarginProps(props)
    const marginStyles = getMarginStyles(marginProps)

    const {
      className,
      size = '24',
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
            '--b-icon-color': alphaColorTokenCssVar(color),
            ...marginStyles.style,
            ...style,
          } as React.CSSProperties
        }
        className={classNames(
          styles.Icon,
          getSourceSizeClassName(size),
          marginStyles.className,
          className
        )}
        {...rest}
      />
    )
  })
)
