/* Internal dependencies */
import { styled, centeredBackgroundImage } from '~/src/foundation'
import { EmojiSize } from './Emoji.types'
import { InterpolationProps } from '~/src/types/Foundation'

interface IconProps extends InterpolationProps {
  size: EmojiSize
  imageUrl: string
}

export const Icon = styled.div<IconProps>`
  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  ${({ size }) => centeredBackgroundImage<EmojiSize>(size)}

  ${({ interpolation }) => interpolation}
`
