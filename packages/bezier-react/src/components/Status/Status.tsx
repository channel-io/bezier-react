import React, {
  type CSSProperties,
  forwardRef,
  memo,
} from 'react'

import {
  LockIcon,
  MoonFilledIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import type { SemanticNames } from '~/src/foundation'

import {
  getMarginStyle,
  splitByMarginProps,
} from '~/src/utils/props'
import {
  cssVar,
  px,
} from '~/src/utils/style'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'

import {
  type StatusProps,
  StatusSize,
  StatusType,
} from './Status.types'

import styles from './Status.module.scss'

const statusTypesWithIcon: Readonly<StatusType[]> = [
  StatusType.OnlineCrescent,
  StatusType.OfflineCrescent,
  StatusType.Lock,
]

const statusColor: Readonly<Record<StatusType, SemanticNames>> = {
  [StatusType.Online]: 'bgtxt-green-normal',
  [StatusType.Offline]: 'bg-black-dark',
  [StatusType.OnlineCrescent]: 'bgtxt-green-normal',
  [StatusType.OfflineCrescent]: 'bgtxt-yellow-normal',
  [StatusType.Lock]: 'txt-black-darker',
}

function getStatusCircleBorderWidth(size: StatusSize) {
  return size >= StatusSize.L ? 3 : 2
}

/**
 * `Status` is a component to indicate user status.
 */
export const Status = memo(forwardRef<HTMLDivElement, StatusProps>(function Status(props,
  forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyle = getMarginStyle(marginProps)
  const {
    type,
    size = StatusSize.M,
    style,
    className,
    ...rest
  } = marginRest

  const withIcon = statusTypesWithIcon.includes(type)
  const backgroundColor = withIcon ? 'bg-white-high' : statusColor[type]

  return (
    <div
      ref={forwardedRef}
      style={{
        '--b-status-size': px(size),
        '--b-status-bg-color': cssVar(backgroundColor),
        '--b-status-border-width': px(getStatusCircleBorderWidth(size)),
        ...marginStyle.style,
        ...style,
      } as CSSProperties}
      className={classNames(
        styles.Status,
        marginStyle.className,
        className,
      )}
      {...rest}
    >
      { withIcon && (
        <Icon
          source={type === StatusType.Lock ? LockIcon : MoonFilledIcon}
          size={size <= StatusSize.M ? IconSize.XXXS : IconSize.XS}
          color={statusColor[type]}
          className={styles.Icon}
        />
      ) }
    </div>
  )
}))
