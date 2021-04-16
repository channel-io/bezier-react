/* Internal denpendencies */
import { styled, css, smoothCorners } from '../../../foundation'
import DisabledOpacity from '../../../constants/DisabledOpacity'
import { AVATAR_BORDER_WIDTH, AVATAR_BORDER_RADIUS_PERCENTAGE, AVATAR_BACKGROUND_COLOR } from '../constants/AvatarStyle'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { AvatarSize } from './Avatar.types'

const STATUS_GAP = 2

interface AvatarWrapperProps {
  disabled: boolean
}

interface AvatarProps {
  avatarUrl: string
  size: AvatarSize
  showBorder: boolean
}

function calcStatusGap(showBorder: boolean) {
  return `${showBorder && enableSmoothCorners.current
    ? (AVATAR_BORDER_WIDTH * 2) - STATUS_GAP
    : -STATUS_GAP}px`
}

const disabledStyle = css`
  opacity: ${DisabledOpacity};
`

const smoothCornersFallbackBorderStyle = css`
  &::after {
    position: absolute;
    top: -${AVATAR_BORDER_WIDTH}px;
    left: -${AVATAR_BORDER_WIDTH}px;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: ${({ foundation }) => `${foundation?.theme?.['bg-white-absolute']}`};
    border: ${({ foundation }) => `${AVATAR_BORDER_WIDTH}px solid ${foundation?.theme?.['bg-white-absolute']}`};
    border-radius: ${AVATAR_BORDER_RADIUS_PERCENTAGE}%;
  }
`

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

  ${({ showBorder }) => (!enableSmoothCorners.current && showBorder ? smoothCornersFallbackBorderStyle : '')}

  ${({ foundation, avatarUrl, showBorder }) => smoothCorners({
    shadow: showBorder ? `0 0 0 ${AVATAR_BORDER_WIDTH}px ${foundation?.theme?.['bg-white-absolute']}` : undefined,
    shadowBlur: showBorder ? AVATAR_BORDER_WIDTH : 0,
    backgroundColor: `${AVATAR_BACKGROUND_COLOR}`,
    borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    backgroundImage: avatarUrl,
  })};
`

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  z-index: 1;

  ${({ disabled }) => (disabled ? disabledStyle : '')};
`

export const StatusWrapper = styled.div<Pick<AvatarProps, 'showBorder'>>`
  position: absolute;
  right: ${({ showBorder }) => calcStatusGap(showBorder)};
  bottom: ${({ showBorder }) => calcStatusGap(showBorder)};
`
