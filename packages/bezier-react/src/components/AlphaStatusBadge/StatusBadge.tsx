import React, { type CSSProperties, forwardRef, memo } from 'react'

import { MoonFilledIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { cssVar } from '~/src/utils/style'

import { Icon } from '~/src/components/Icon'

import { type StatusBadgeProps } from './StatusBadge.types'

import styles from './StatusBadge.module.scss'

/**
 * `StatusBadge` is a component to indicate user status.
 * @example
 *
 * ```tsx
 * <StatusBadge
 *   size="m"
 *   online
 *   doNotDisturb
 * />
 * ```
 */
export const StatusBadge = memo(
  forwardRef<HTMLDivElement, StatusBadgeProps>(function StatusBadge(
    {
      size = 'm',
      online = false,
      doNotDisturb = false,
      style,
      className,
      ...rest
    },
    forwardedRef
  ) {
    const withIcon = doNotDisturb
    const iconColor = online
      ? 'bgtxt-green-normal'
      : doNotDisturb
        ? 'bgtxt-yellow-normal'
        : 'bg-black-dark'
    const backgroundColor = withIcon ? 'bg-white-high' : iconColor

    return (
      <div
        ref={forwardedRef}
        style={
          {
            '--b-status-bg-color': cssVar(backgroundColor),
            ...style,
          } as CSSProperties
        }
        className={classNames(styles.Status, styles[`size-${size}`], className)}
        {...rest}
      >
        {withIcon && (
          <Icon
            source={MoonFilledIcon}
            size={size === 'm' ? 'xxxs' : 'xs'}
            color={iconColor}
            className={styles.Icon}
          />
        )}
      </div>
    )
  })
)
