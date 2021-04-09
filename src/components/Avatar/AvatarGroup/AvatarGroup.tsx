/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { v4 as uuid } from 'uuid'

/* Internal denpendencies */
import { Icon, IconSize } from '../../Icon'
import { isLastIndex } from '../../../utils/arrayUtils'
import { AvatarSize } from '../Avatar'
import { StyledAvatarGroup, AvatarEllipsisWrapper, AvatarEllipsis } from './AvatarGroup.styled'
import { AvatarGroupProps } from './AvatarGroup.types'

export const AVATAR_GROUP_TEST_ID = 'ch-design-system-avatar-group'

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

function AvatarGroup({
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

export default AvatarGroup
