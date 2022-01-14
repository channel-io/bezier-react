/* Internal denpendencies */
import { styled, css, smoothCorners } from 'Foundation'
import { enableSmoothCorners } from 'Worklets/EnableCSSHoudini'
import type { InterpolationProps } from 'Types/Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
import { StatusSize } from 'Components/Status'
import { AVATAR_BORDER_WIDTH, AVATAR_BORDER_RADIUS_PERCENTAGE } from 'Components/Avatars/AvatarStyle'
import { AvatarSize } from './Avatar.types'

interface AvatarWrapperProps extends InterpolationProps {
  disabled: boolean
}

interface AvatarProps extends InterpolationProps {
  size: AvatarSize
  showBorder: boolean
}

interface StatusWrapperProps extends Pick<AvatarProps, 'showBorder'> {
  size: StatusSize
}

function calcStatusGap({ showBorder, size }: StatusWrapperProps) {
  let gap = (size >= StatusSize.L ? 4 : -2)
  if (showBorder && enableSmoothCorners.current) {
    gap += AVATAR_BORDER_WIDTH * 2
  }
  return gap
}

const disabledStyle = css`
  opacity: ${DisabledOpacity};
`

const smoothCornersFallbackBorderStyle = css`
  &::after {
    ${({ foundation }) => foundation?.border?.getBorder(AVATAR_BORDER_WIDTH, foundation?.theme?.['bg-white-high'])};

    position: absolute;
    top: -${AVATAR_BORDER_WIDTH}px;
    left: -${AVATAR_BORDER_WIDTH}px;
    z-index: -1;
    box-sizing: content-box;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: ${({ foundation }) => `${foundation?.theme?.['bg-white-normal']}`};
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

  ${({ foundation, showBorder }) => smoothCorners({
    shadow: showBorder ? `0 0 0 ${AVATAR_BORDER_WIDTH}px ${foundation?.theme?.['bg-white-high']}` : undefined,
    shadowBlur: showBorder ? AVATAR_BORDER_WIDTH : 0,
    backgroundColor: foundation?.theme?.['bg-white-normal'],
    borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    hasBackgroundImage: true,
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

export const StatusWrapper = styled.div<StatusWrapperProps>`
  position: absolute;
  right: ${calcStatusGap}px;
  bottom: ${calcStatusGap}px;
`
