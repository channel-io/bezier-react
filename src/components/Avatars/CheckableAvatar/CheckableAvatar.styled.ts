/* eslint-disable @typescript-eslint/indent */
/* Internal denpendencies */
import { styled, css, smoothCorners } from '../../../foundation'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { StyledAvatar } from '../Avatar/Avatar.styled'
import { AVATAR_BORDER_RADIUS_PERCENTAGE } from '../constants/AvatarStyle'
import { Icon } from '../../Icon'

interface CheckableAvatarProps {
  notSelectable: boolean
}

const hoverStyle = css`
  border-image-source: url('');
  --smooth-corners-bg-color: gray;
`

export const CheckIcon = styled(Icon)`
  position: absolute;
  // 20 / 42
  width: 47.61904762%;
  height: 47.61904762%;
  z-index: 2;
  opacity: 0;
  transition: opacity .2s ease-in-out, background-color .15s ease-in-out;
  will-change: opacity, background-color;
`

export const CheckableAvatarWrapper = styled(StyledAvatar)<CheckableAvatarProps>`
  position: relative;
  cursor: ${({ notSelectable }) => (notSelectable ? 'not-allowed' : 'pointer')};
  user-select: none;

  &:hover ${CheckIcon} {
    opacity: 1;
  }

  ${StyledAvatar}::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;

    // grey 500
    background-color: #A7A7AA;

    transition: opacity .2s ease-in-out, background-color .15s ease-in-out;
    will-change: opacity, background-color;

    ${smoothCorners({
      backgroundColor: '#A7A7AA',
      borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    })};
  }

  &:hover ${StyledAvatar}::before {
    opacity: 1;
  }
`
