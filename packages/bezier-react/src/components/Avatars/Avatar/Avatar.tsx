import React, {
  forwardRef,
  useMemo,
} from 'react'

import classNames from 'classnames'

import {
  getMarginStyles,
  splitByMarginProps,
} from '~/src/utils/props'
import { isEmpty } from '~/src/utils/type'

import {
  AlphaSmoothCornersBox,
  type BoxShadow,
} from '~/src/components/AlphaSmoothCornersBox'
import { useAvatarRadiusToken } from '~/src/components/Avatars/useAvatarRadiusToken'
import {
  Status,
  StatusSize,
} from '~/src/components/Status'

// NOTE: Don't fix it. When using absolute paths, a module resolve error occurs at the runtime of the library consumer.
// eslint-disable-next-line no-restricted-imports
import defaultAvatarUrl from '../assets/defaultAvatar.svg'

import type AvatarProps from './Avatar.types'
import { AvatarSize } from './Avatar.types'
import useProgressiveImage from './useProgressiveImage'

import styles from './Avatar.module.scss'

const shadow: BoxShadow = {
  spreadRadius: 2,
  color: 'bg-white-high',
}

export const AVATAR_WRAPPER_TEST_ID = 'bezier-react-avatar-wrapper'
export const AVATAR_TEST_ID = 'bezier-react-avatar'
export const STATUS_WRAPPER_TEST_ID = 'bezier-react-status-wrapper'

/**
 * `Avatar` is a component for representing some profile image.
 *
 * @example
 *
 * ```tsx
 * <Avatar
 *   avatarUrl="'https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png"
 *   name="channel"
 *   size={AvatarSize.Size48}
 *   showBorder
 *   disabled
 * />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyle = getMarginStyles(marginProps)
  const {
    avatarUrl = '',
    fallbackUrl = defaultAvatarUrl,
    size = AvatarSize.Size24,
    name,
    testId = AVATAR_TEST_ID,
    disabled = false,
    showBorder = false,
    smoothCorners = true,
    status,
    className,
    style,
    children,
    ...rest
  } = marginRest

  const loadedAvatarUrl = useProgressiveImage(avatarUrl, fallbackUrl)
  const AVATAR_BORDER_RADIUS = useAvatarRadiusToken()

  const StatusComponent = useMemo(() => {
    if (
      (isEmpty(children) && !status)
      || (children && !React.isValidElement(children))
    ) {
      return null
    }

    const statusSize = size >= AvatarSize.Size90 ? StatusSize.L : StatusSize.M

    const Contents = (() => {
      if (children) { return children }
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

    return Contents && (
      <div
        data-testid={STATUS_WRAPPER_TEST_ID}
        className={styles.StatusWrapper}
      >
        { Contents }
      </div>
    )
  }, [
    status,
    size,
    children,
  ])

  return (
    <div
      data-testid={AVATAR_WRAPPER_TEST_ID}
      data-disabled={disabled}
      className={classNames(
        styles.Avatar,
        styles[`size-${size}`],
        disabled && styles.disabled,
        marginStyle.className,
        className,
      )}
      style={{
        ...marginStyle.style,
        ...style,
      }}
      {...rest}
    >
      <AlphaSmoothCornersBox
        ref={forwardedRef}
        data-testid={testId}
        aria-label={name}
        className={classNames(
          styles.AvatarImage,
          size >= AvatarSize.Size72 && styles['big-size'],
          showBorder && styles.bordered,
        )}
        disabled={!smoothCorners}
        borderRadius={AVATAR_BORDER_RADIUS}
        shadow={showBorder ? shadow : undefined}
        backgroundColor="bg-white-normal"
        backgroundImage={loadedAvatarUrl}
      >
        { StatusComponent }
      </AlphaSmoothCornersBox>
    </div>
  )
})
