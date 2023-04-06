/* External dependencies */
import React, {
  forwardRef,
  memo,
} from 'react'

/* Internal dependencies */
import type { SemanticNames } from '~/src/foundation'

import {
  IconSize,
  LockIcon,
  MoonFilledIcon,
} from '~/src/components/Icon'

import {
  type StatusProps,
  StatusSize,
  StatusType,
} from './Status.types'

import * as Styled from './Status.styled'

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
  if (size >= StatusSize.L) { return 3 }
  return 2
}

export const Status = memo(forwardRef(function Status({
  type,
  size = StatusSize.M,
  style,
  ...rest
}: StatusProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const withIcon = statusTypesWithIcon.includes(type)
  const backgroundColor = withIcon ? 'bg-white-high' : statusColor[type]

  return (
    <Styled.Circle
      ref={forwardedRef}
      style={{
        ...style,
        '--bezier-status-size': `${size}px`,
        '--bezier-status-bg-color': `var(--${backgroundColor})`,
        '--bezier-status-border-width': `${getStatusCircleBorderWidth(size)}px`,
      }}
      {...rest}
    >
      { withIcon && (
        <Styled.Icon
          source={type === StatusType.Lock ? LockIcon : MoonFilledIcon}
          size={size <= StatusSize.M ? IconSize.XXXS : IconSize.XS}
          color={statusColor[type]}
        />
      ) }
    </Styled.Circle>
  )
}))
