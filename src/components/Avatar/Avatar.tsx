/* External dependencies */
import React, { forwardRef, useCallback, useMemo } from 'react'
import _ from 'lodash'

/* Internal denpendencies */
import Icon from '../Icon/Icon'
import { IconSize } from '../Icon/Icon.types'
import { isLastIndex } from '../../utils/arrayUtils'
import { StyledAvatar, StyledAvatarGroup, AvatarEllipsisWrapper, AvatarEllipsis } from './Avatar.styled'
import { AvatarSize, AvatarProps, AvatarGroupProps } from './Avatar.types'

export const AVATAR_TEST_ID = 'ch-design-system-avatar'
export const AVATAR_GROUP_TEST_ID = 'ch-design-system-avatar-group'

function Avatar({
  avatarUrl,
  size = AvatarSize.M,
  showBorder = false,
  name = '',
  testId = AVATAR_TEST_ID,
  onClick = _.noop,
  onMouseEnter = _.noop,
  onMouseLeave = _.noop,
}: AvatarProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <StyledAvatar
      ref={forwardedRef}
      data-testid={testId}
      avatarUrl={avatarUrl}
      size={size}
      role="img"
      aria-label={name}
      showBorder={showBorder}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}

export default forwardRef(Avatar)

// TODO: 올바른 페어의 ellipsis 아이콘 사이즈를 지정해줘야함
function getProperIconSize(avatarSize: AvatarSize) {
  return {
    [AvatarSize.XXXS]: IconSize.XXS,
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
      if (isLastIndex(arr, index)) {
        return (
          <AvatarEllipsisWrapper spacing={calculatedSpacing}>
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
      }
      return renderAvatarElement(avatar)
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
      data-testId={AVATAR_GROUP_TEST_ID}
      spacing={spacing}
    >
      { AvatarListComponent }
    </StyledAvatarGroup>
  )
}
