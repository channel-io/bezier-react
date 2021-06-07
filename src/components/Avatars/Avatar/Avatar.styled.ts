/* Internal denpendencies */
import { styled, css, smoothCorners } from '../../../foundation'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import DisabledOpacity from '../../../constants/DisabledOpacity'
import { AVATAR_STATUS_GAP, AVATAR_BORDER_WIDTH, AVATAR_BORDER_RADIUS_PERCENTAGE } from '../constants/AvatarStyle'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { AvatarSize } from './Avatar.types'

interface AvatarWrapperProps extends WithInterpolation {
  disabled: boolean
}

interface AvatarProps extends WithInterpolation {
  avatarUrl: string
  size: AvatarSize
  showBorder: boolean
}

function calcStatusGap(showBorder: boolean) {
  return `${showBorder && enableSmoothCorners.current
    ? (AVATAR_BORDER_WIDTH * 2) - AVATAR_STATUS_GAP
    : -AVATAR_STATUS_GAP}px`
}

const disabledStyle = css`
  opacity: ${DisabledOpacity};
`

const smoothCornersFallbackBorderStyle = css`
  &::after {
    ${({ foundation }) => foundation?.border?.getBorder(AVATAR_BORDER_WIDTH, foundation?.theme?.['bgtxt-absolute-white-normal'])};

    position: absolute;
    top: -${AVATAR_BORDER_WIDTH}px;
    left: -${AVATAR_BORDER_WIDTH}px;
    z-index: -1;
    box-sizing: content-box;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: ${({ foundation }) => `${foundation?.theme?.['bgtxt-absolute-white-normal']}`};
    border-radius: ${AVATAR_BORDER_RADIUS_PERCENTAGE}%;
  }
`

export const AvatarImage = styled.div<AvatarProps>`
  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  outline: none;

  ${({ showBorder }) => (!enableSmoothCorners.current && showBorder) && smoothCornersFallbackBorderStyle}

  ${({ foundation, avatarUrl, showBorder }) => smoothCorners({
    shadow: showBorder ? `0 0 0 ${AVATAR_BORDER_WIDTH}px ${foundation?.theme?.['bgtxt-absolute-white-normal']}` : undefined,
    shadowBlur: showBorder ? AVATAR_BORDER_WIDTH : 0,
    backgroundColor: foundation?.theme?.['bgtxt-absolute-white-normal'],
    borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    backgroundImage: avatarUrl,
  })};

  ${({ interpolation }) => interpolation}
`

export const AvatarImageWrapper = styled.div`
  position: relative;
  z-index: 1;
`

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  z-index: 0;

  ${({ disabled }) => disabled && disabledStyle}

  ${({ interpolation }) => interpolation}
`

export const StatusWrapper = styled.div<Pick<AvatarProps, 'showBorder'>>`
  position: absolute;
  right: ${({ showBorder }) => calcStatusGap(showBorder)};
  bottom: ${({ showBorder }) => calcStatusGap(showBorder)};
`
