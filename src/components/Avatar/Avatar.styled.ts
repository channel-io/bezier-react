/* Internal denpendencies */
import { styled, css, smoothCorners } from '../../foundation'
import { AvatarSize } from './Avatar.types'

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
  border-radius: 42%;
  outline: none;

  ${({ src }) => smoothCorners({
    n: 2.38,
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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: ${({ spacing }) => `calc(100% - ${spacing}px)`};
  height: 100%;

  ${({ foundation }) => smoothCorners({
    n: 2.38,
    backgroundColor: foundation?.theme?.['dim-dark'],
  })}
`

export const StyledAvatarGroup = styled.div<AvatarGroupProps>`
  display: flex;

  ${StyledAvatar}:not(:first-child) {
    margin-left: ${({ spacing }) => spacing}px;
  }
`
