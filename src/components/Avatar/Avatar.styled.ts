/* Internal denpendencies */
import { styled } from '../../foundation'
import { AvatarSize } from './Avatar.types'

export const AvatarWrapper = styled.div<{ size: AvatarSize }>`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
