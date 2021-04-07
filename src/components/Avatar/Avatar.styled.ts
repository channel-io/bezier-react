/* Internal denpendencies */
import { styled, smoothCorners } from '../../foundation'
import { AvatarSize } from './Avatar.types'

export interface AvatarProps {
  size: AvatarSize
  src: string
}

const StyledAvatar = styled.div<AvatarProps>`
  box-sizing: content-box;
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: transparent;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  border-radius: 42%;
  outline: none;

  ${({ src }) => smoothCorners({
    n: 2.5,
    backgroundImage: src,
  })};
`

export default StyledAvatar
