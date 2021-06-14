/* Internal denpendencies */
import { styled, smoothCorners, css } from '../../../foundation'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import { AVATAR_BORDER_RADIUS_PERCENTAGE, AVATAR_GROUP_DEFAULT_SPACING } from '../constants/AvatarStyle'
import { Text, TextProps } from '../../Text'
import { AvatarSize } from '../Avatar/Avatar.types'

interface AvatarGroupProps {
  spacing: number
}

interface AvatarEllipsisCountProps extends TextProps, WithInterpolation {
  size: AvatarSize
}

export const AvatarEllipsisCount = styled(Text)<AvatarEllipsisCountProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ size }) => size}px;
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

export const AvatarEllipsisWrapper = styled.div<WithInterpolation>`
  position: relative;

  ${({ interpolation }) => interpolation}
`

export const AvatarEllipsisCountWrapper = styled(AvatarEllipsisWrapper)<AvatarGroupProps>`
  ${({ spacing }) => css`
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
