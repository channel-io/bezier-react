/* Internal denpendencies */
import { styled, css, smoothCorners } from '~/src/foundation'
import { enableSmoothCorners } from '~/src/worklets/EnableCSSHoudini'
import type { InterpolationProps } from '~/src/types/Foundation'
import { ZIndex } from '~/src/constants/ZIndex'
import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { AVATAR_BORDER_WIDTH, AVATAR_BORDER_RADIUS_PERCENTAGE } from '~/src/components/Avatars/AvatarStyle'
import { AvatarSize } from './Avatar.types'

interface AvatarWrapperProps extends InterpolationProps {
  disabled: boolean
}

interface AvatarProps extends InterpolationProps {
  size: AvatarSize
  showBorder: boolean
}

interface StatusWrapperProps extends Pick<AvatarProps, 'showBorder' | 'size'> {}

function calcStatusGap({ showBorder, size }: StatusWrapperProps) {
  let gap = (size >= AvatarSize.Size72 ? 4 : -2)
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
    z-index: ${ZIndex.Hide};
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

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  z-index: ${ZIndex.Base};

  ${({ disabled }) => disabled && disabledStyle}

  ${({ interpolation }) => interpolation}
`

export const StatusWrapper = styled.div<StatusWrapperProps>`
  position: absolute;
  right: ${calcStatusGap}px;
  bottom: ${calcStatusGap}px;
`
