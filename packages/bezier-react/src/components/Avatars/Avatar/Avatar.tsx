/* External dependencies */
import React, { forwardRef, useMemo } from 'react'

/* Internal denpendencies */
import { backgroundImageVariable } from 'Foundation'
import {
  isEmpty,
} from 'Utils/typeUtils'
import { Status, StatusSize } from 'Components/Status'
// eslint-disable-next-line no-restricted-imports
import defaultAvatarUrl from '../assets/defaultAvatar.svg'
import useProgressiveImage from './useProgressiveImage'
import AvatarProps, { AvatarSize } from './Avatar.types'
import { AvatarImage, AvatarWrapper, StatusWrapper } from './Avatar.styled'

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
  status,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  className,
  wrapperClassName,
  interpolation,
  wrapperInterpolation,
  children,
}: AvatarProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
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

    return (
      <StatusWrapper
        data-testid={STATUS_WRAPPER_TEST_ID}
        size={size}
        showBorder={showBorder}
      >
        { Contents }
      </StatusWrapper>
    )
  }, [
    status,
    size,
    showBorder,
    children,
  ])

  return (
    <AvatarWrapper
      className={wrapperClassName}
      interpolation={wrapperInterpolation}
      disabled={disabled}
      data-testid={AVATAR_WRAPPER_TEST_ID}
    >
      <AvatarImage
        style={backgroundImageVariable({ imageUrl: loadedAvatarUrl })}
        className={className}
        interpolation={interpolation}
        ref={forwardedRef}
        data-testid={testId}
        size={size}
        role="img"
        aria-label={name}
        showBorder={showBorder}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        { StatusComponent }
      </AvatarImage>
    </AvatarWrapper>
  )
})
