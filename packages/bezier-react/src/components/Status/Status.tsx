'use client'

import { type CSSProperties, forwardRef, memo } from 'react'

import { LockIcon, MoonFilledIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { type SemanticColor } from '~/src/types/beta-tokens'
import { betaTokenCssVar } from '~/src/utils/style'

import { Icon } from '~/src/components/Icon'

import { type StatusProps, type StatusType } from './Status.types'

import styles from './Status.module.scss'

const statusTypesWithIcon: Readonly<StatusType[]> = [
  'online-crescent',
  'offline-crescent',
  'lock',
]

const statusColor: Readonly<Record<StatusType, SemanticColor>> = {
  online: 'text-accent-green',
  offline: 'fill-neutral-heavy',
  'online-crescent': 'text-accent-green',
  'offline-crescent': 'text-accent-yellow',
  lock: 'text-neutral-light',
}

/**
 * `Status` is a component to indicate user status.
 */
export const Status = memo(
  forwardRef<HTMLDivElement, StatusProps>(function Status(
    { type, size = 'm', style, className, ...rest },
    forwardedRef
  ) {
    const withIcon = statusTypesWithIcon.includes(type)
    const backgroundColor = withIcon ? 'surface-high' : statusColor[type]

    return (
      <div
        ref={forwardedRef}
        style={
          {
            '--b-status-bg-color': betaTokenCssVar(backgroundColor),
            ...style,
          } as CSSProperties
        }
        className={classNames(styles.Status, styles[`size-${size}`], className)}
        {...rest}
      >
        {withIcon && (
          <Icon
            source={type === 'lock' ? LockIcon : MoonFilledIcon}
            size={size === 'm' ? 'xxxs' : 'xs'}
            color={statusColor[type]}
            className={styles.Icon}
          />
        )}
      </div>
    )
  })
)
