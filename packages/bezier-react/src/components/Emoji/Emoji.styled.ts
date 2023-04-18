import {
  centeredBackgroundImage,
  styled,
} from '~/src/foundation'

import { type InterpolationProps } from '~/src/types/Foundation'

import { type EmojiSize } from './Emoji.types'

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
