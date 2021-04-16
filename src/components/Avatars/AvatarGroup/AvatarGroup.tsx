/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { v4 as uuid } from 'uuid'
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

// TODO: 올바른 페어의 ellipsis 텍스트 사이즈를 지정해줘야함
function getProperTypoSize(avatarSize: AvatarSize) {
  return {
    [AvatarSize.XXS]: Typography.Size12,
    [AvatarSize.XS]: Typography.Size13,
    [AvatarSize.S]: Typography.Size15,
    [AvatarSize.M]: Typography.Size16,
    [AvatarSize.L]: Typography.Size18,
    [AvatarSize.XL]: Typography.Size24,
    [AvatarSize.XXL]: Typography.Size24,
    [AvatarSize.XXXL]: Typography.Size24,
  }[avatarSize]
}

function AvatarGroup({
  max,
  size = AvatarSize.M,
  spacing = AVATAR_GROUP_DEFAULT_SPACING,
  ellipsisType = AvatarGroupEllipsisType.Icon,
  onMouseEnterEllipsis = noop,
  onMouseLeaveEllipsis = noop,
  children,
}: AvatarGroupProps) {
  const renderAvatarElement = useCallback((avatar: React.ReactElement<AvatarProps>) => (
    React.cloneElement(avatar, {
      key: uuid(),
      size,
      showBorder: avatar.props.showBorder || spacing < 0,
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

    return slicedAvatarList.map((avatar, index, arr) => {
      if (!React.isValidElement(avatar)) { return null }

      if (!isLastIndex(arr, index)) { return renderAvatarElement(avatar) }

      if (ellipsisType === AvatarGroupEllipsisType.Icon) {
        return (
          <AvatarEllipsisIconWrapper
            key={uuid()}
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
            key={uuid()}
          >
            { renderAvatarElement(avatar) }
            <AvatarEllipsisCount
              forwardedAs="span"
              size={size}
              typo={getProperTypoSize(size)}
              onMouseEnter={onMouseEnterEllipsis}
              onMouseLeave={onMouseLeaveEllipsis}
            >
              { getRestAvatarListCountText(AvatarListCount, max) }
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
    AvatarListCount,
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
