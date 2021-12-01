/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { noop, isEmpty } from 'lodash-es'

/* Internal denpendencies */
import defaultAvatarUrl from '../assets/defaultAvatar.svg'
import { Status } from '../../Status'
import { smoothCornersStyle } from '../../../foundation'
import useProgressiveImage from './useProgressiveImage'
import AvatarProps, { AvatarSize } from './Avatar.types'
import { AvatarImage, AvatarImageWrapper, AvatarWrapper, StatusWrapper } from './Avatar.styled'

// TODO: 테스트 코드 작성
const AVATAR_WRAPPER_TEST_ID = 'bezier-react-avatar-wrapper'
export const AVATAR_TEST_ID = 'bezier-react-avatar'

function Avatar({
  avatarUrl = '',
  fallbackUrl = defaultAvatarUrl,
  size = AvatarSize.Size24,
  name,
  testId = AVATAR_TEST_ID,
  disabled = false,
  showBorder = false,
  status,
  onClick = noop,
  onMouseEnter = noop,
  onMouseLeave = noop,
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

    const Contents = (() => {
      if (children) { return children }
      if (status) {
        return (
          <Status type={status} />
        )
      }
      return null
    })()

    return (
      <StatusWrapper
        showBorder={showBorder}
      >
        { Contents }
      </StatusWrapper>
    )
  }, [
    status,
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
      <AvatarImageWrapper>
        <AvatarImage
          style={smoothCornersStyle({ imageUrl: loadedAvatarUrl })}
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
      </AvatarImageWrapper>
    </AvatarWrapper>
  )
}

export default forwardRef(Avatar)
