/* Internal denpendencies */
import { styled, smoothCorners, css } from '../../../foundation'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import { AVATAR_BORDER_RADIUS_PERCENTAGE, AVATAR_GROUP_DEFAULT_SPACING } from '../AvatarStyle'
import { Text, TextProps } from '../../Text'
import { AvatarSize } from '../Avatar/Avatar.types'

interface AvatarSizeProps {
  size: AvatarSize
}

interface AvatarGroupProps {
  spacing: number
}

interface AvatarEllipsisCountWrapperProps extends AvatarSizeProps, AvatarGroupProps { }

interface AvatarEllipsisCountProps extends AvatarSizeProps, TextProps, WithInterpolation { }

// TODO: 올바른 페어의 패딩 사이즈를 지정해줘야함
function getProperEllipsisCountPaddingRight(avatarSize: AvatarSize) {
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

export const AvatarEllipsisCount = styled(Text)<AvatarEllipsisCountProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${({ size }) => size}px;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};

  ${({ interpolation }) => interpolation}
`

export const StyledAvatarGroup = styled.div<AvatarGroupProps>`
  display: flex;

  & > * + * {
    margin-left: ${({ spacing }) => spacing}px;
  }
`

export const AvatarEllipsisIconWrapper = styled.div<WithInterpolation>`
  position: relative;

  ${({ interpolation }) => interpolation}
`

export const AvatarEllipsisCountWrapper = styled.div<AvatarEllipsisCountWrapperProps>`
  ${({ spacing, size }) => css`
    padding-right: ${getProperEllipsisCountPaddingRight(size)}px;

    && {
      margin-left: ${spacing > AVATAR_GROUP_DEFAULT_SPACING ? spacing : AVATAR_GROUP_DEFAULT_SPACING}px;
    }
  `}
`

export const AvatarEllipsisIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  outline: none;

  ${({ foundation }) => smoothCorners({
    borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    backgroundColor: foundation?.theme?.['bg-black-darkest'],
  })}
`
