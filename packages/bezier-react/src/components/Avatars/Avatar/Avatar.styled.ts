import {
  css,
  smoothCorners,
  styled,
} from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { ZIndex } from '~/src/constants/ZIndex'
import type { InterpolationProps } from '~/src/types/Foundation'

import {
  AVATAR_BORDER_RADIUS_PERCENTAGE,
  AVATAR_BORDER_WIDTH,
} from '~/src/components/Avatars/AvatarStyle'

import { AvatarSize } from './Avatar.types'

interface SmoothCornersProps {
  enableSmoothCorners: boolean
}

interface AvatarWrapperProps extends InterpolationProps {
  disabled: boolean
}

interface AvatarProps extends
  InterpolationProps,
  SmoothCornersProps {
  size: AvatarSize
  showBorder: boolean
}

interface StatusWrapperProps extends
  Pick<AvatarProps, 'showBorder' | 'size'>,
  SmoothCornersProps {}

function calcStatusGap({
  showBorder,
  size,
  enableSmoothCorners,
}: StatusWrapperProps) {
  let gap = (size >= AvatarSize.Size72 ? 4 : -2)
  if (showBorder && enableSmoothCorners) {
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

  ${({ showBorder, enableSmoothCorners }) => (!enableSmoothCorners && showBorder) && smoothCornersFallbackBorderStyle}

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
