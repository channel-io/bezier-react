/* External dependencies */
import React, { forwardRef, useCallback, useMemo } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { isLastIndex } from 'Utils/arrayUtils'
import { Icon, IconSize, MoreIcon } from 'Components/Icon'
import { AvatarProps, AvatarSize } from 'Components/Avatars/Avatar'
import { AVATAR_GROUP_DEFAULT_SPACING } from 'Components/Avatars/AvatarStyle'
import AvatarGroupProps, { AvatarGroupEllipsisType } from './AvatarGroup.types'
import {
  StyledAvatarGroup,
  AvatarEllipsisIconWrapper,
  AvatarEllipsisCountWrapper,
  AvatarEllipsisIcon,
  AvatarEllipsisCount,
} from './AvatarGroup.styled'

export const AVATAR_GROUP_TEST_ID = 'bezier-react-avatar-group'

const MAX_AVATAR_LIST_COUNT = 99

function getRestAvatarListCountText(count: number, max: number) {
  const restCount = count - max
  return `+${restCount > MAX_AVATAR_LIST_COUNT ? MAX_AVATAR_LIST_COUNT : restCount}`
}

// TODO: 올바른 페어의 ellipsis 아이콘 사이즈를 지정해줘야함
function getProperIconSize(avatarSize: AvatarSize) {
  return {
    [AvatarSize.Size20]: IconSize.XXS,
    [AvatarSize.Size24]: IconSize.XS,
    [AvatarSize.Size30]: IconSize.S,
    [AvatarSize.Size36]: IconSize.Normal,
    [AvatarSize.Size42]: IconSize.Normal,
    [AvatarSize.Size48]: IconSize.L,
    [AvatarSize.Size90]: IconSize.L,
    [AvatarSize.Size120]: IconSize.L,
  }[avatarSize]
}

// TODO: 올바른 페어의 ellipsis 텍스트 사이즈를 지정해줘야함
function getProperTypoSize(avatarSize: AvatarSize) {
  return {
    [AvatarSize.Size20]: Typography.Size12,
    [AvatarSize.Size24]: Typography.Size13,
    [AvatarSize.Size30]: Typography.Size15,
    [AvatarSize.Size36]: Typography.Size16,
    [AvatarSize.Size42]: Typography.Size18,
    [AvatarSize.Size48]: Typography.Size24,
    [AvatarSize.Size90]: Typography.Size24,
    [AvatarSize.Size120]: Typography.Size24,
  }[avatarSize]
}

export const AvatarGroup = forwardRef(function AvatarGroup({
  max,
  size = AvatarSize.Size24,
  spacing = AVATAR_GROUP_DEFAULT_SPACING,
  ellipsisType = AvatarGroupEllipsisType.Icon,
  onMouseEnterEllipsis = noop,
  onMouseLeaveEllipsis = noop,
  ellipsisInterpolation,
  className,
  children,
}: AvatarGroupProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  const renderAvatarElement = useCallback((
    avatar: React.ReactElement<AvatarProps>,
    avatarListCount: number,
  ) => {
    const key = avatar.key ?? `${avatar.props.name}-${avatar.props.avatarUrl}`
    const shouldShowBorder = avatarListCount > 1 && spacing < 0
    const showBorder = avatar.props.showBorder || shouldShowBorder
    return React.cloneElement(avatar, { key, size, showBorder })
  }, [
    size,
    spacing,
  ])

  const avatarListCount = useMemo(() => (
    React.Children.count(children)
  ), [children])

  const AvatarListComponent = useMemo(() => {
    if (avatarListCount <= max) {
      return React.Children.map(children, (avatar) => (
        React.isValidElement<AvatarProps>(avatar) && renderAvatarElement(avatar, avatarListCount)
      ))
    }

    const sliceEndIndex = max - avatarListCount
    const slicedAvatarList = React.Children.toArray(children).slice(0, sliceEndIndex)

    return slicedAvatarList.map((avatar, index, arr) => {
      if (!React.isValidElement<AvatarProps>(avatar)) { return null }

      const AvatarElement = renderAvatarElement(avatar, slicedAvatarList.length)

      if (!isLastIndex(arr, index)) {
        return AvatarElement
      }

      if (ellipsisType === AvatarGroupEllipsisType.Icon) {
        return (
          <AvatarEllipsisIconWrapper
            key="ellipsis"
            interpolation={ellipsisInterpolation}
            onMouseEnter={onMouseEnterEllipsis}
            onMouseLeave={onMouseLeaveEllipsis}
          >
            <AvatarEllipsisIcon>
              <Icon
                source={MoreIcon}
                size={getProperIconSize(size)}
                color="bgtxt-absolute-white-dark"
              />
            </AvatarEllipsisIcon>
            { AvatarElement }
          </AvatarEllipsisIconWrapper>
        )
      }

      if (ellipsisType === AvatarGroupEllipsisType.Count) {
        return (
          <React.Fragment
            key="ellipsis"
          >
            { AvatarElement }
            <AvatarEllipsisCountWrapper
              size={size}
              spacing={spacing}
              onMouseEnter={onMouseEnterEllipsis}
              onMouseLeave={onMouseLeaveEllipsis}
            >
              <AvatarEllipsisCount
                forwardedAs="span"
                interpolation={ellipsisInterpolation}
                size={size}
                typo={getProperTypoSize(size)}
              >
                { getRestAvatarListCountText(avatarListCount, max) }
              </AvatarEllipsisCount>
            </AvatarEllipsisCountWrapper>
          </React.Fragment>
        )
      }

      return null
    })
  }, [
    max,
    size,
    children,
    spacing,
    ellipsisType,
    ellipsisInterpolation,
    avatarListCount,
    renderAvatarElement,
    onMouseEnterEllipsis,
    onMouseLeaveEllipsis,
  ])

  return (
    <StyledAvatarGroup
      className={className}
      data-testid={AVATAR_GROUP_TEST_ID}
      ref={forwardedRef}
      spacing={spacing}
    >
      { AvatarListComponent }
    </StyledAvatarGroup>
  )
})
