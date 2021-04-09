/* Internal denpendencies */
import { styled, smoothCorners } from '../../foundation'
import { AvatarSize } from './Avatar.types'

const AVATAR_BORDER_RAIDUS_PERCENTAGE = 42
const AVATAR_BORDER_WIDTH = 2

export interface AvatarProps {
  avatarUrl: string
  size: AvatarSize
  showBorder: boolean
}

export const StyledAvatar = styled.div<AvatarProps>`
  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: transparent;
  background-image: ${({ avatarUrl }) => `url(${avatarUrl})`};
  background-size: cover;
  border: ${({ foundation, showBorder }) => showBorder &&
    `0 0 0 ${AVATAR_BORDER_WIDTH}px ${foundation?.theme?.['bg-white-absolute']}`};
  border-radius: ${AVATAR_BORDER_RAIDUS_PERCENTAGE}%;
  outline: none;

  ${({ foundation, avatarUrl, showBorder }) => smoothCorners({
    shadow: showBorder
      ? `0 0 0 ${AVATAR_BORDER_WIDTH}px ${foundation?.theme?.['bg-white-absolute']}`
      : '0 0 0 0 transparent',
    shadowBlur: showBorder ? AVATAR_BORDER_WIDTH : 0,
    backgroundColor: '#EFEFF0', // TODO: fallback default avatar 설정
    borderRadius: `${AVATAR_BORDER_RAIDUS_PERCENTAGE}%`,
    backgroundImage: avatarUrl,
  })};
`

function calcNegativeSpacing(spacing: AvatarGroupProps['spacing']) {
  return spacing < 0 ? (spacing - (AVATAR_BORDER_WIDTH * 2)) : spacing
}

export interface AvatarGroupProps {
  spacing: number
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

  ${({ foundation }) => smoothCorners({
    borderRadius: `${AVATAR_BORDER_RAIDUS_PERCENTAGE}%`,
    backgroundColor: foundation?.theme?.['dim-dark'],
  })}
`
