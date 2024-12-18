'use client'

import { forwardRef, isValidElement, useMemo } from 'react'

import classNames from 'classnames'

import { getSourceSizeClassName } from '~/src/types/alpha-props-helpers'
import { isEmpty } from '~/src/utils/type'

import { useAvatarContext } from '~/src/components/AlphaAvatar/AvatarSizeContext'
import {
  SmoothCornersBox,
  type SmoothCornersBoxProps,
} from '~/src/components/SmoothCornersBox'
import { Status, type StatusSize } from '~/src/components/Status'
import { useTokens } from '~/src/components/ThemeProvider'

import type { AvatarProps, AvatarSize } from './Avatar.types'
import defaultAvatarUrl from './assets/default-avatar.svg'
import useProgressiveImage from './useProgressiveImage'

import styles from './Avatar.module.scss'

function getStatusSize(size: AvatarSize): StatusSize {
  switch (size) {
    case '90':
    case '120':
      return 'l'
    default:
      return 'm'
  }
}

function getShadow(size: AvatarSize): SmoothCornersBoxProps['shadow'] {
  const spreadRadius = (() => {
    switch (size) {
      case '90':
        return 3
      case '120':
        return 4
      default:
        return 2
    }
  })()

  return {
    spreadRadius,
    color: 'bg-white-high',
  }
}

export function useAvatarRadiusToken() {
  // TODO: Replace this with useAlphaTokens
  return useTokens().global.radius['radius-42-p']
}

export const AVATAR_WRAPPER_TEST_ID = 'bezier-avatar-wrapper'
export const AVATAR_TEST_ID = 'bezier-avatar'
export const STATUS_WRAPPER_TEST_ID = 'bezier-status-wrapper'

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
    size: sizeProps = '24',
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
  const avatarGroupContext = useAvatarContext()
  const size = avatarGroupContext?.size ?? sizeProps
  const loadedAvatarUrl = useProgressiveImage(avatarUrl, fallbackUrl)
  const AVATAR_BORDER_RADIUS = useAvatarRadiusToken()

  const StatusComponent = useMemo(() => {
    if (
      (isEmpty(children) && !status) ||
      (children && !isValidElement(children))
    ) {
      return null
    }

    const Contents = (() => {
      if (children) {
        return children
      }
      if (status) {
        return (
          <Status
            type={status}
            size={getStatusSize(size)}
          />
        )
      }
      return null
    })()

    return (
      Contents && (
        <div
          className={styles.StatusWrapper}
          data-testid={STATUS_WRAPPER_TEST_ID}
        >
          {Contents}
        </div>
      )
    )
  }, [status, size, children])

  return (
    <div
      className={classNames(
        styles.Avatar,
        getSourceSizeClassName(size),
        disabled && styles.disabled,
        className
      )}
      data-disabled={disabled}
      data-testid={AVATAR_WRAPPER_TEST_ID}
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
        shadow={showBorder ? getShadow(size) : undefined}
        backgroundColor="bg-white-normal"
        backgroundImage={loadedAvatarUrl}
        data-testid={AVATAR_TEST_ID}
      >
        {StatusComponent}
      </SmoothCornersBox>
    </div>
  )
})
