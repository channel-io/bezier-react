/* Internal denpendencies */
import { styled, smoothCorners } from '../../../foundation'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { StyledAvatar } from '../Avatar/Avatar.styled'
import { avatarBorderWidth, avatarBorderRadiusPercentage } from '../constants/AvatarStyle'

interface AvatarGroupProps {
  spacing: number
}

function calcNegativeSpacing(spacing: AvatarGroupProps['spacing'] = 0) {
  if (spacing >= 0 || !enableSmoothCorners.current) { return spacing }
  return (spacing - (avatarBorderWidth * 2))
}

export const StyledAvatarGroup = styled.div<AvatarGroupProps>`
  display: flex;

  & > ${StyledAvatar}:not(:first-child) {
    margin-left: ${({ spacing }) => calcNegativeSpacing(spacing)}px;
  }
`

export const AvatarEllipsisWrapper = styled.div<AvatarGroupProps>`
  position: relative;
  margin-left: ${({ spacing }) => calcNegativeSpacing(spacing)}px;
`

export const AvatarEllipsis = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ foundation }) => foundation?.theme?.['dim-dark']};
  border-radius: ${avatarBorderRadiusPercentage}%;
  outline: none;

  ${({ foundation }) => smoothCorners({
    borderRadius: `${avatarBorderRadiusPercentage}%`,
    backgroundColor: foundation?.theme?.['dim-dark'],
  })}
`

