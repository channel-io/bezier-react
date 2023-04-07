import React, {
  forwardRef,
  useCallback,
  useMemo,
} from 'react'

import { Typography } from '~/src/foundation'

import { isLastIndex } from '~/src/utils/arrayUtils'
import { noop } from '~/src/utils/functionUtils'

import {
  type AvatarProps,
  AvatarSize,
} from '~/src/components/Avatars/Avatar'
import { AVATAR_GROUP_DEFAULT_SPACING } from '~/src/components/Avatars/AvatarStyle'
import {
  Icon,
  IconSize,
  MoreIcon,
} from '~/src/components/Icon'

import {
  AvatarGroupEllipsisType,
  type AvatarGroupProps,
} from './AvatarGroup.types'

import * as Styled from './AvatarGroup.styled'

const MAX_AVATAR_LIST_COUNT = 99

export const AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID = 'bezier-react-avatar-group-ellipsis-icon'

function getRestAvatarListCountText(count: number, max: number) {
  const restCount = count - max
  return `+${restCount > MAX_AVATAR_LIST_COUNT ? MAX_AVATAR_LIST_COUNT : restCount}`
}

// TODO: Not specified
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

// TODO: Not specified
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

// TODO: Not specified
function getProperEllipsisCountMarginRight(avatarSize: AvatarSize) {
  return {
    [AvatarSize.Size20]: 4,
    [AvatarSize.Size24]: 5,
    [AvatarSize.Size30]: 6,
    [AvatarSize.Size36]: 6,
    [AvatarSize.Size42]: 6,
    [AvatarSize.Size48]: 6,
    [AvatarSize.Size90]: 6,
    [AvatarSize.Size120]: 6,
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
  style,
  className,
  children,
  ...rest
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
          <Styled.AvatarEllipsisIconWrapper
            data-testid={AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID}
            key="ellipsis"
            interpolation={ellipsisInterpolation}
            onMouseEnter={onMouseEnterEllipsis}
            onMouseLeave={onMouseLeaveEllipsis}
          >
            <Styled.AvatarEllipsisIcon>
              <Icon
                source={MoreIcon}
                size={getProperIconSize(size)}
                color="bgtxt-absolute-white-dark"
              />
            </Styled.AvatarEllipsisIcon>
            { AvatarElement }
          </Styled.AvatarEllipsisIconWrapper>
        )
      }

      if (ellipsisType === AvatarGroupEllipsisType.Count) {
        return (
          <React.Fragment key="ellipsis">
            { AvatarElement }
            <Styled.AvatarEllipsisCountWrapper
              style={{
                '--bezier-avatar-group-ellipsis-mr': `${getProperEllipsisCountMarginRight(size)}px`,
                '--bezier-avatar-group-ellipsis-ml': `${Math.max(spacing, AVATAR_GROUP_DEFAULT_SPACING)}px`,
              } as React.CSSProperties}
              onMouseEnter={onMouseEnterEllipsis}
              onMouseLeave={onMouseLeaveEllipsis}
            >
              <Styled.AvatarEllipsisCount
                forwardedAs="span"
                interpolation={ellipsisInterpolation}
                typo={getProperTypoSize(size)}
              >
                { getRestAvatarListCountText(avatarListCount, max) }
              </Styled.AvatarEllipsisCount>
            </Styled.AvatarEllipsisCountWrapper>
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
    <Styled.AvatarGroup
      role="group"
      ref={forwardedRef}
      className={className}
      style={{
        ...style,
        '--bezier-avatar-group-spacing': `${spacing}px`,
        '--bezier-avatar-group-size': `${size}px`,
      } as React.CSSProperties}
      {...rest}
    >
      { AvatarListComponent }
    </Styled.AvatarGroup>
  )
})
