/* Internal denpendencies */
import { styled, css, Foundation, smoothCorners } from '../../../foundation'
import DisabledOpacity from '../../../constants/DisabledOpacity'
import { AvatarSize } from './Avatar.types'
import { avatarBorderWidth, avatarBorderRadiusPercentage } from '../constants/AvatarStyle';

interface AvatarProps {
  avatarUrl: string
  size: AvatarSize
  showBorder: boolean
  disabled: boolean
}

const disabledStyle = css`
  opacity: ${DisabledOpacity};
`

function getBorderStyle(foundation?: Foundation) {
  return `0 0 0 ${avatarBorderWidth}px ${foundation?.theme?.['bg-white-absolute']}`
}

// TODO: fallback default avatar 설정

export const StyledAvatar = styled.div<AvatarProps>`
  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: '#EFEFF0';
  background-image: ${({ avatarUrl }) => `url(${avatarUrl})`};
  background-size: cover;
  border-radius: ${avatarBorderRadiusPercentage}%;
  outline: none;

  ${({ foundation, showBorder }) => (showBorder ? getBorderStyle(foundation) : '')};

  ${({ foundation, avatarUrl, showBorder }) => smoothCorners({
    shadow: showBorder ? getBorderStyle(foundation) : undefined,
    shadowBlur: showBorder ? avatarBorderWidth : 0,
    backgroundColor: '#EFEFF0',
    borderRadius: `${avatarBorderRadiusPercentage}%`,
    backgroundImage: avatarUrl,
  })};

  ${({ disabled }) => (disabled ? disabledStyle : '')};
`

export const StatusWrapper = styled.div`
  position: absolute;
  right: -2px;
  bottom: -2px;
`
