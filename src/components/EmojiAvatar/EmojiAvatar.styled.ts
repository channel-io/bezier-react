/* Internal dependencies */
import {
  styled,
  css,
  absoluteCenter,
  centeredBackgroundImage,
} from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'
import { EmojiAvatarSize } from './EmojiAvatar.types'

const AVATAR_STATUS_GAP = 2
const WRAPPER_SIZE = 24

interface IconProps extends InterpolationProps {
  unClickable?: boolean
  size?: EmojiAvatarSize
  privateChat?: boolean
}

export const Wrapper = styled.div`
  position: relative;
  top: calc(50% - ${WRAPPER_SIZE}px/2);
  left: calc(50% - ${WRAPPER_SIZE}px/2);
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${WRAPPER_SIZE}px;
  height: ${WRAPPER_SIZE}px;
`

export const EmojiIcon = styled.div<IconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  cursor: pointer;
  border-radius: ${({ foundation }) => foundation?.rounding.round4};
  transition: ${({ foundation }) => foundation?.transition.getTransitionsCSS('background-color')};

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme['bg-black-light']};
  }

  ${({ unClickable }) => unClickable && css`
    cursor: initial;
  `}

  ${absoluteCenter('')}

  ${({ size }) => css`
    ${centeredBackgroundImage(size, size)}
  `}

  ${({ interpolation }) => interpolation}
`

export const StatusWrapper = styled.div`
  position: absolute;
  right: -${AVATAR_STATUS_GAP}px;
  bottom: -${AVATAR_STATUS_GAP}px;
`
