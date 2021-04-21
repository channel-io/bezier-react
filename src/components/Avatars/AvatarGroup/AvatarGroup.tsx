/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { noop } from 'lodash-es'

/* Internal denpendencies */
import { Typography } from '../../../foundation'
import { Icon, IconSize } from '../../Icon'
import { AvatarProps, AvatarSize } from '../Avatar'
import { isLastIndex } from '../../../utils/arrayUtils'
import { AVATAR_GROUP_DEFAULT_SPACING } from '../constants/AvatarStyle'
import { AvatarGroupProps, AvatarGroupEllipsisType } from './AvatarGroup.types'
import { StyledAvatarGroup, AvatarEllipsisIconWrapper, AvatarEllipsisIcon, AvatarEllipsisCount } from './AvatarGroup.styled'

export const AVATAR_GROUP_TEST_ID = 'ch-design-system-avatar-group'

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

function AvatarGroup({
  max,
  size = AvatarSize.Size24,
  spacing = AVATAR_GROUP_DEFAULT_SPACING,
  ellipsisType = AvatarGroupEllipsisType.Icon,
  onMouseEnterEllipsis = noop,
  onMouseLeaveEllipsis = noop,
  ellipsisInterpolation,
  children,
}: AvatarGroupProps) {
  const renderAvatarElement = useCallback((avatar: React.ReactElement<AvatarProps>) => (
    React.cloneElement(avatar, {
      key: `${avatar.props.name}-${avatar.props.avatarUrl}`,
      size,
      showBorder: avatar.props.showBorder || spacing < 0,
    })
  ), [
    size,
    spacing,
  ])

  const avatarListCount = useMemo(() => (
    React.Children.count(children)
  ), [children])

  const AvatarListComponent = useMemo(() => {
    if (avatarListCount <= max) {
      return React.Children.map(children, (avatar) => (
        React.isValidElement(avatar) && renderAvatarElement(avatar)
      ))
    }

    const sliceEndIndex = max - avatarListCount
    const slicedAvatarList = React.Children.toArray(children).slice(0, sliceEndIndex)

    return slicedAvatarList.map((avatar, index, arr) => {
      if (!React.isValidElement(avatar)) { return null }

      if (!isLastIndex(arr, index)) { return renderAvatarElement(avatar) }

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
                size={getProperIconSize(size)}
                name="more"
                color="bg-white-absolute"
              />
            </AvatarEllipsisIcon>
            { renderAvatarElement(avatar) }
          </AvatarEllipsisIconWrapper>
        )
      }

      if (ellipsisType === AvatarGroupEllipsisType.Count) {
        return (
          <React.Fragment
            key="ellipsis"
          >
            { renderAvatarElement(avatar) }
            <AvatarEllipsisCount
              interpolation={ellipsisInterpolation}
              forwardedAs="span"
              size={size}
              typo={getProperTypoSize(size)}
              onMouseEnter={onMouseEnterEllipsis}
              onMouseLeave={onMouseLeaveEllipsis}
            >
              { getRestAvatarListCountText(avatarListCount, max) }
            </AvatarEllipsisCount>
          </React.Fragment>
        )
      }

      return null
    })
  }, [
    max,
    size,
    children,
    ellipsisType,
    ellipsisInterpolation,
    avatarListCount,
    renderAvatarElement,
    onMouseEnterEllipsis,
    onMouseLeaveEllipsis,
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

export default AvatarGroup
