/* Internal denpendencies */
import { styled, css, Foundation, smoothCorners } from '../../foundation'
import { enableSmoothCorners } from '../../worklets/EnableCSSHoudini'
import DisabledOpacity from '../../constants/DisabledOpacity'
import { AvatarSize } from './Avatar.types'

const AVATAR_BORDER_RAIDUS_PERCENTAGE = 42
const AVATAR_BORDER_WIDTH = 2

export interface AvatarProps {
  avatarUrl: string
  size: AvatarSize
  showBorder: boolean
  disabled: boolean
}

const disabledStyle = css`
  opacity: ${DisabledOpacity};
`

function getBorderStyle(foundation?: Foundation) {
  return `0 0 0 ${AVATAR_BORDER_WIDTH}px ${foundation?.theme?.['bg-white-absolute']}`
}

// TODO: fallback default avatar 설정

export const StyledAvatar = styled.div<AvatarProps>`
  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: '#EFEFF0';
  background-image: ${({ avatarUrl }) => `url(${avatarUrl})`};
  background-size: cover;
  border-radius: ${AVATAR_BORDER_RAIDUS_PERCENTAGE}%;
  outline: none;

  ${({ foundation, showBorder }) => (showBorder ? getBorderStyle(foundation) : '')};

  ${({ foundation, avatarUrl, showBorder }) => smoothCorners({
    shadow: showBorder ? getBorderStyle(foundation) : undefined,
    shadowBlur: showBorder ? AVATAR_BORDER_WIDTH : 0,
    backgroundColor: '#EFEFF0',
    borderRadius: `${AVATAR_BORDER_RAIDUS_PERCENTAGE}%`,
    backgroundImage: avatarUrl,
  })};

  ${({ disabled }) => (disabled ? disabledStyle : '')};
`

export interface AvatarGroupProps {
  spacing: number
}

function calcNegativeSpacing(spacing: AvatarGroupProps['spacing'] = 0) {
  if (spacing >= 0 || !enableSmoothCorners.current) { return spacing }
  return (spacing - (AVATAR_BORDER_WIDTH * 2))
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
  border-radius: ${AVATAR_BORDER_RAIDUS_PERCENTAGE}%;
  outline: none;

  ${({ foundation }) => smoothCorners({
    borderRadius: `${AVATAR_BORDER_RAIDUS_PERCENTAGE}%`,
    backgroundColor: foundation?.theme?.['dim-dark'],
  })}
`
