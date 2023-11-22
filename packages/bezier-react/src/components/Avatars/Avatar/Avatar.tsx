import React, {
  forwardRef,
  useMemo,
} from 'react'

import classNames from 'classnames'

import {
  cssVarName,
  px,
} from '~/src/utils/styleUtils'
import { isEmpty } from '~/src/utils/typeUtils'

import { type BoxShadow } from '~/src/components/AlphaSmoothCornersBox'
import { AVATAR_BORDER_RADIUS_PERCENTAGE } from '~/src/components/Avatars/AvatarStyle'
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

import * as Styled from './Avatar.styled'

const cv = cssVarName('avatar')

const shadow: BoxShadow = {
  spreadRadius: 2,
  color: 'bg-white-high',
}

export const AVATAR_WRAPPER_TEST_ID = 'bezier-react-avatar-wrapper'
export const AVATAR_TEST_ID = 'bezier-react-avatar'
export const STATUS_WRAPPER_TEST_ID = 'bezier-react-status-wrapper'

export const Avatar = forwardRef(function Avatar({
  avatarUrl = '',
  fallbackUrl = defaultAvatarUrl,
  size = AvatarSize.Size24,
  name,
  testId = AVATAR_TEST_ID,
  disabled = false,
  showBorder = false,
  smoothCorners = true,
  status,
  className: classNameProp,
  children,
  ...rest
}: AvatarProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const loadedAvatarUrl = useProgressiveImage(avatarUrl, fallbackUrl)

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
      <Styled.StatusWrapper data-testid={STATUS_WRAPPER_TEST_ID}>
        { Contents }
      </Styled.StatusWrapper>
    )
  }, [
    status,
    size,
    children,
  ])

  const className = classNames(
    classNameProp,
    size && `size-${size}`,
    disabled && 'disabled',
  )

  const avatarStyle = useMemo(() => ({
    [cv('status-gap')]: px(size >= AvatarSize.Size72 ? 4 : -2),
  } as React.CSSProperties), [size])

  return (
    <Styled.AvatarWrapper
      {...rest}
      data-testid={AVATAR_WRAPPER_TEST_ID}
      data-disabled={disabled}
      className={className}
    >
      <Styled.AvatarImage
        ref={forwardedRef}
        data-testid={testId}
        aria-label={name}
        style={avatarStyle}
        className={showBorder ? 'bordered' : undefined}
        disabled={!smoothCorners}
        borderRadius={`${AVATAR_BORDER_RADIUS_PERCENTAGE}%`}
        shadow={showBorder ? shadow : undefined}
        backgroundColor="bg-white-normal"
        backgroundImage={loadedAvatarUrl}
      >
        { StatusComponent }
      </Styled.AvatarImage>
    </Styled.AvatarWrapper>
  )
})
