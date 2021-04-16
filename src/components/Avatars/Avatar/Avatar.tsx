/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { noop, isEmpty } from 'lodash-es'

/* Internal denpendencies */
import useProgressiveImage from '../../../hooks/useProgressiveImage'
import defaultAvatarUrl from '../assets/defaultAvatar.svg'
import { Status } from '../../Status'
import { AvatarSize, AvatarProps } from './Avatar.types'
import { StyledAvatar, AvatarWrapper, StatusWrapper } from './Avatar.styled'

export const AVATAR_WRAPPER_TEST_ID = 'ch-design-system-avatar-wrapper'
export const AVATAR_TEST_ID = 'ch-design-system-avatar'

function Avatar({
  avatarUrl,
  size = AvatarSize.Size24,
  name = '',
  testId = AVATAR_TEST_ID,
  disabled = false,
  showBorder = false,
  status,
  onClick = noop,
  onMouseEnter = noop,
  onMouseLeave = noop,
  children,
}: AvatarProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  const loadedAvatarUrl = useProgressiveImage(avatarUrl, defaultAvatarUrl)

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
      disabled={disabled}
      data-testid={AVATAR_WRAPPER_TEST_ID}
    >
      <StyledAvatar
        ref={forwardedRef}
        data-testid={testId}
        avatarUrl={loadedAvatarUrl}
        size={size}
        role="img"
        aria-label={name}
        showBorder={showBorder}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        { StatusComponent }
      </StyledAvatar>
    </AvatarWrapper>
  )
}

export default forwardRef(Avatar)
