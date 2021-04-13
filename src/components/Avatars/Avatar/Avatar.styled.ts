/* Internal denpendencies */
import { styled, css, smoothCorners } from '../../../foundation'
import DisabledOpacity from '../../../constants/DisabledOpacity'
import { AVATAR_BORDER_WIDTH, AVATAR_BORDER_RADIUS_PERCENTAGE } from '../constants/AvatarStyle'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { AvatarSize } from './Avatar.types'

const STATUS_GAP = 2

interface AvatarProps {
  avatarUrl: string
  size: AvatarSize
  showBorder: boolean
  disabled: boolean
}

const disabledStyle = css`
  opacity: ${DisabledOpacity};
`

/**
 * NOTE: (@ed) smooth corner가 적용되지 않는 브라우저에서, 보더를 제대로 보여주기 위한 코드입니다.
 * z-index로 수도 엘리먼트와 부모 엘리먼트간의 쌓임 맥락이 제대로 형성되지 않아
 * "transform-style: perserve-3d" 와 "transform: translateZ(-{n}px)"(AvatarGroup 참고)로 상하 레이어로 보이도록 했습니다.
 * https://stackoverflow.com/questions/3032856/is-it-possible-to-set-the-stacking-order-of-pseudo-elements-below-their-parent-e
 */
const disableSmoothCornersFallbackBorderStyle = css`
  transform-style: preserve-3d;

  &::before {
    position: absolute;
    top: -${AVATAR_BORDER_WIDTH}px;
    left: -${AVATAR_BORDER_WIDTH}px;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: ${({ foundation }) => `${foundation?.theme?.['bg-white-absolute']}`};
    border: ${({ foundation }) => `${AVATAR_BORDER_WIDTH}px solid ${foundation?.theme?.['bg-white-absolute']}`};
    border-radius: ${AVATAR_BORDER_RADIUS_PERCENTAGE}%;
    transform: translateZ(-1px);
  }
`

function calcStatusGap(showBorder: boolean) {
  return `${showBorder && enableSmoothCorners.current
    ? (AVATAR_BORDER_WIDTH * 2) - STATUS_GAP
    : -STATUS_GAP}px`
}

function getDisableSmoothCornersFallbackStyle({ avatarUrl, showBorder }: Pick<AvatarProps, 'avatarUrl' | 'showBorder'>) {
  if (enableSmoothCorners.current) { return '' }
  return css`
    background-color: '#EFEFF0';
    background-image: ${`url(${avatarUrl})`};
    background-size: cover;
    border-radius: ${AVATAR_BORDER_RADIUS_PERCENTAGE}%;

    ${showBorder ? disableSmoothCornersFallbackBorderStyle : ''}
  `
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
  outline: none;

  ${({ disabled }) => (disabled ? disabledStyle : '')};

  ${({ avatarUrl, showBorder }) => getDisableSmoothCornersFallbackStyle({ avatarUrl, showBorder })}

  ${({ foundation, avatarUrl, showBorder }) => smoothCorners({
    shadow: showBorder ? `0 0 0 ${AVATAR_BORDER_WIDTH}px ${foundation?.theme?.['bg-white-absolute']}` : undefined,
    shadowBlur: showBorder ? AVATAR_BORDER_WIDTH : 0,
    backgroundColor: '#EFEFF0',
    borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    backgroundImage: avatarUrl,
  })};
`

export const StatusWrapper = styled.div<Pick<AvatarProps, 'showBorder'>>`
  position: absolute;
  right: ${({ showBorder }) => calcStatusGap(showBorder)};
  bottom: ${({ showBorder }) => calcStatusGap(showBorder)};
`
