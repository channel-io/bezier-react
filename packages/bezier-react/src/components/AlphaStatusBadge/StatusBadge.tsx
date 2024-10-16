import React, { type CSSProperties, forwardRef } from 'react'

import { MoonFilledIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { type SemanticColor } from '~/src/types/tokens'
import { cssVar } from '~/src/utils/style'

import { Icon } from '~/src/components/Icon'

import { type StatusBadgeProps } from './StatusBadge.types'

import styles from './StatusBadge.module.scss'

// TODO: Change to use AlphaIcon and alpha color tokens

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
export const StatusBadge = forwardRef<HTMLDivElement, StatusBadgeProps>(
  function StatusBadge(
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
    const iconColor: SemanticColor = online
      ? 'bgtxt-green-normal'
      : doNotDisturb
        ? 'bgtxt-yellow-normal'
        : 'bg-black-dark'
    const backgroundColor: SemanticColor = doNotDisturb
      ? 'bg-white-high'
      : iconColor

    return (
      <div
        ref={forwardedRef}
        style={
          {
            '--b-status-bg-color': cssVar(backgroundColor),
            ...style,
          } as CSSProperties
        }
        className={classNames(
          styles.StatusBadge,
          styles[`size-${size}`],
          className
        )}
        {...rest}
      >
        {doNotDisturb && (
          <Icon
            source={MoonFilledIcon}
            size={size === 'm' ? 'xxxs' : 'xs'}
            color={iconColor}
            className={styles.Icon}
          />
        )}
      </div>
    )
  }
)
