'use client'

import { forwardRef, isValidElement, useMemo } from 'react'

import classNames from 'classnames'


import {
  SmoothCornersBox,
  type SmoothCornersBoxProps,
} from '~/src/beta/SmoothCornersBox'
import { Status, type StatusSize } from '~/src/beta/Status'
import { isEmpty } from '~/src/utils/type'

import type { AvatarProps } from './Avatar.types'
import defaultAvatarUrl from './assets/default-avatar.svg'
import useProgressiveImage from './useProgressiveImage'

import styles from './Avatar.module.scss'


const shadow: SmoothCornersBoxProps['shadow'] = {
  spreadRadius: 2,
  color: 'surface-high',
}

export function useAvatarRadiusToken() {
  return '42%' as const
}

/**
 * `Avatar` is a component for representing some profile image.
 * @example
 *
 * ```tsx
 * <Avatar
 *   avatarUrl="https://..."
 *   name="channel"
 *   size="48"
 *   showBorder
 *   disabled
 * />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  {
    avatarUrl = '',
    fallbackUrl = defaultAvatarUrl,
    size = '24',
    name,
    disabled = false,
    showBorder = false,
    smoothCorners = true,
    status,
    className,
    children,
    ...rest
  },
  forwardedRef
) {
  const loadedAvatarUrl = useProgressiveImage(avatarUrl, fallbackUrl)
  const AVATAR_BORDER_RADIUS = useAvatarRadiusToken()

  const StatusComponent = useMemo(() => {
    if (
      (isEmpty(children) && !status) ||
      (children && !isValidElement(children))
    ) {
      return null
    }

    const statusSize: StatusSize = (() => {
      switch (size) {
        case '90':
        case '120':
          return 'l'
        default:
          return 'm'
      }
    })()

    const Contents = (() => {
      if (children) {
        return children
      }
      if (status) {
        return (
          <Status
            type={status}
            size={statusSize}
          />
        )
      }
      return null
    })()

    return Contents && <div className={styles.StatusWrapper}>{Contents}</div>
  }, [status, size, children])

  return (
    <div
      className={classNames(
        styles.Avatar,
        styles[`size-${size}`],
        disabled && styles.disabled,
        className
      )}
      data-disabled={disabled}
      {...rest}
    >
      <SmoothCornersBox
        ref={forwardedRef}
        aria-description={name}
        className={classNames(
          styles.AvatarImage,
          Number(size) >= 72 && styles['big-size'],
          showBorder && styles.bordered
        )}
        disabled={!smoothCorners}
        borderRadius={AVATAR_BORDER_RADIUS}
        shadow={showBorder ? shadow : undefined}
        backgroundColor="surface"
        backgroundImage={loadedAvatarUrl}
      >
        {StatusComponent}
      </SmoothCornersBox>
    </div>
  )
})
