/* Internal denpendencies */
import { styled, smoothCorners } from '../../foundation'
import { AvatarSize } from './Avatar.types'

export interface AvatarProps {
  size: AvatarSize
  src: string
}

const StyledAvatar = styled.div<AvatarProps>`
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
    backgroundColor: 'white',
    backgroundImage: src,
  })};
`

export default StyledAvatar
