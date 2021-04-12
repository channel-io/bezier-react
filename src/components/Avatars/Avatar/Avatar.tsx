/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import _ from 'lodash'

/* Internal denpendencies */
import { Status, StatusType } from '../../Status'
import useProgressiveImage from '../../../hooks/useProgressiveImage'
import DefaultAvatarSvg from '../assets/DefaultAvatar'
import { StyledAvatar, StatusWrapper } from './Avatar.styled'
import { AvatarSize, AvatarProps } from './Avatar.types'

export const AVATAR_TEST_ID = 'ch-design-system-avatar'

function Avatar({
  avatarUrl,
  size = AvatarSize.XS,
  name = '',
  testId = AVATAR_TEST_ID,
  disabled = false,
  showBorder = false,
  status = StatusType.NONE,
  showStatus = false,
  onClick = _.noop,
  onMouseEnter = _.noop,
  onMouseLeave = _.noop,
  children,
}: AvatarProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  const loadedAvatarUrl = useProgressiveImage(avatarUrl)

  const defaultAvatarUrl = useMemo(() => {
    const svgString = encodeURIComponent(renderToStaticMarkup(<DefaultAvatarSvg />))
    return `"data:image/svg+xml,${svgString}"`
  }, [])

  const StatusComponent = useMemo(() => {
    if (children) {
      return React.isValidElement(children) && React.Children.count(children) === 1
        ? children : null
    }

    if (!showStatus) { return null }

    return (
      <StatusWrapper
        showBorder={showBorder}
      >
        <Status
          type={status}
        />
      </StatusWrapper>
    )
  }, [
    status,
    showStatus,
    showBorder,
    children,
  ])

  return (
    <StyledAvatar
      ref={forwardedRef}
      data-testid={testId}
      avatarUrl={loadedAvatarUrl || defaultAvatarUrl}
      size={size}
      role="img"
      aria-label={name}
      showBorder={showBorder}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      { StatusComponent }
    </StyledAvatar>
  )
}

export default forwardRef(Avatar)
