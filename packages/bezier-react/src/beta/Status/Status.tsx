'use client'

import { type CSSProperties, forwardRef, memo } from 'react'

import { LockIcon, MoonFilledIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'



import { Icon } from '~/src/beta/Icon'
import { type BetaSemanticColor } from '~/src/types/beta-tokens'
import { colorTokenCssVar } from '~/src/utils/style'

import { type StatusProps, type StatusType } from './Status.types'

import styles from './Status.module.scss'



const statusTypesWithIcon: Readonly<StatusType[]> = [
  'online-dnd',
  'offline-dnd',
  'lock',
]

const statusColor: Readonly<Record<StatusType, BetaSemanticColor>> = {
  online: 'text-accent-green',
  offline: 'fill-neutral-heavy',
  'online-dnd': 'text-accent-green',
  'offline-dnd': 'text-accent-yellow',
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
            '--b-status-bg-color': colorTokenCssVar(backgroundColor),
            ...style,
          } as CSSProperties
        }
        className={classNames(styles.Status, styles[`size-${size}`], className)}
        {...rest}
      >
        {withIcon && (
          <Icon
            source={type === 'lock' ? LockIcon : MoonFilledIcon}
            size={size === 'm' ? '10' : '16'}
            color={statusColor[type]}
            className={styles.Icon}
          />
        )}
      </div>
    )
  })
)
