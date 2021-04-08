/* Internal denpendencies */
import { styled, smoothCorners } from '../../foundation'
import { AvatarSize } from './Avatar.types'

const AVATAR_BORDER_RAIDUS_PERCENTAGE = 42

export interface AvatarProps {
  size: AvatarSize
  src: string
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
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  border-radius: ${AVATAR_BORDER_RAIDUS_PERCENTAGE}%;
  outline: none;

  ${({ src }) => smoothCorners({
    borderRadius: `${AVATAR_BORDER_RAIDUS_PERCENTAGE}%`,
    backgroundColor: '#EFEFF0', // TODO: fallback default avatar 설정
    backgroundImage: src,
  })};
`

export interface AvatarGroupProps {
  spacing: number
}

export const AvatarEllipsisWrapper = styled.div`
  position: relative;
`

export const AvatarEllipsis = styled.div<AvatarGroupProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ spacing }) => `calc(100% - ${spacing}px)`};
  height: 100%;

  ${({ foundation }) => smoothCorners({
    borderRadius: `${AVATAR_BORDER_RAIDUS_PERCENTAGE}%`,
    backgroundColor: foundation?.theme?.['dim-dark'],
  })}
`

export const StyledAvatarGroup = styled.div<AvatarGroupProps>`
  display: flex;

  ${StyledAvatar}:not(:first-child) {
    margin-left: ${({ spacing }) => spacing}px;
  }
`
