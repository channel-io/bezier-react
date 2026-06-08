'use client'

import { forwardRef, memo } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import { type BetaSemanticColor } from '~/src/types/beta-tokens'
import { getMarginStyles, splitByMarginProps } from '~/src/types/props-helpers'
import { colorTokenCssVar } from '~/src/utils/style'

import { type IconProps } from './Icon.types'

import styles from './Icon.module.scss'

const DEFAULT_ICON_COLOR = 'icon-neutral' satisfies BetaSemanticColor

/**
 * `Icon` renders a Bezier icon as an SVG element.
 * Inject an icon component from the `@channel.io/bezier-icons` package into the `source` prop.
 * @example
 *
 * ```tsx
 * import { HeartFilledIcon } from '@channel.io/bezier-icons'
 *
 * <Icon
 *   source={HeartFilledIcon}
 *   size="24"
 *   color="icon-neutral"
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
      color = DEFAULT_ICON_COLOR,
      source: SourceElement,
      style,
      ...rest
    } = marginRest

    return (
      <SourceElement
        ref={forwardedRef}
        style={
          {
            '--b-v3-icon-color': colorTokenCssVar(color),
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
        {...rest}
      />
    )
  })
)
