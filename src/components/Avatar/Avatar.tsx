/* External dependencies */
import React, { forwardRef, useCallback, useMemo } from 'react'
import _ from 'lodash'
import { v4 as uuid } from 'uuid'

/* Internal denpendencies */
import Icon from '../Icon/Icon'
import { IconSize } from '../Icon/Icon.types'
import { isLastIndex } from '../../utils/arrayUtils'
import { StyledAvatar, StyledAvatarGroup, AvatarEllipsisWrapper, AvatarEllipsis, StatusCircle } from './Avatar.styled'
import { AvatarSize, AvatarProps, AvatarGroupProps, StatusType, StatusProps } from './Avatar.types'

export const AVATAR_TEST_ID = 'ch-design-system-avatar'
export const AVATAR_GROUP_TEST_ID = 'ch-design-system-avatar-group'

export function Status({
  type = StatusType.NONE,
}: StatusProps) {
  if (type === StatusType.NONE) { return null }
  // TODO: private 타입 상태 제작 필요
  if (type === StatusType.PRIVATE) { return null }
  return (
    <StatusCircle type={type}/>
  )
}

function Avatar({
  avatarUrl,
  size = AvatarSize.M,
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
  const StatusComponent = useMemo(() => {
    if (children) {
      return React.isValidElement(children) && React.Children.count(children) === 1
        ? children : null
    }

    if (!showStatus) { return null }

    return (
      <Status
        type={status}
      />
    )
  }, [
    status,
    showStatus,
    children,
  ])

  return (
    <StyledAvatar
      ref={forwardedRef}
      data-testid={testId}
      avatarUrl={avatarUrl}
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

// TODO: 올바른 페어의 ellipsis 아이콘 사이즈를 지정해줘야함
function getProperIconSize(avatarSize: AvatarSize) {
  return {
    [AvatarSize.XXS]: IconSize.XXS,
    [AvatarSize.XS]: IconSize.XS,
    [AvatarSize.S]: IconSize.S,
    [AvatarSize.M]: IconSize.Normal,
    [AvatarSize.L]: IconSize.Normal,
    [AvatarSize.XL]: IconSize.L,
    [AvatarSize.XXL]: IconSize.L,
    [AvatarSize.XXXL]: IconSize.L,
  }[avatarSize]
}

export function AvatarGroup({
  max,
  size = AvatarSize.M,
  spacing = 4,
  children,
}: AvatarGroupProps) {
  const renderAvatarElement = useCallback((avatar: React.ReactElement) => (
    React.cloneElement(avatar, {
      key: uuid(),
      size,
      showBorder: spacing < 0,
    })
  ), [
    size,
    spacing,
  ])

  const AvatarListCount = useMemo(() => (
    React.Children.count(children)
  ), [children])

  const AvatarListComponent = useMemo(() => {
    if (AvatarListCount <= max) {
      return React.Children.map(children, (avatar) => (
        React.isValidElement(avatar) && renderAvatarElement(avatar)
      ))
    }

    const sliceEndIndex = max - AvatarListCount
    const slicedAvatarList = React.Children.toArray(children).slice(0, sliceEndIndex)
    const calculatedSpacing = AvatarListCount > 0 ? spacing : 0

    return slicedAvatarList.map((avatar, index, arr) => {
      if (!React.isValidElement(avatar)) { return null }
      if (!isLastIndex(arr, index)) { return renderAvatarElement(avatar) }
      return (
        <AvatarEllipsisWrapper
          key={uuid()}
          spacing={calculatedSpacing}
        >
          <AvatarEllipsis>
            <Icon
              size={getProperIconSize(size)}
              name="more"
              color="bg-white-absolute"
            />
          </AvatarEllipsis>
          { renderAvatarElement(avatar) }
        </AvatarEllipsisWrapper>
      )
    })
  }, [
    max,
    size,
    spacing,
    children,
    AvatarListCount,
    renderAvatarElement,
  ])

  return (
    <StyledAvatarGroup
      data-testid={AVATAR_GROUP_TEST_ID}
      spacing={spacing}
    >
      { AvatarListComponent }
    </StyledAvatarGroup>
  )
}
