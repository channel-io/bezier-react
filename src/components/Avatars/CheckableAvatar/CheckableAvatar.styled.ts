/* Internal denpendencies */
import { styled, css, smoothCorners, Foundation } from '../../../foundation'
import { StyledAvatar } from '../Avatar/Avatar.styled'
import { AVATAR_BORDER_RADIUS_PERCENTAGE } from '../constants/AvatarStyle'
import { Icon } from '../../Icon'

interface CheckableAvatarWrapperProps {
  isChecked: boolean
  isCheckable: boolean
}

// 20px (IconSize) / 42px (WrapperSize) = 0.476129...
export const CheckIcon = styled(Icon)`
  position: absolute;
  z-index: 2;
  width: 47.61904762%;
  height: 47.61904762%;
  pointer-events: none;
  opacity: 0;
`

const getBackgroundColor = (isChecked: boolean, foundation?: Foundation) =>
  foundation?.theme?.[isChecked ? 'bgtxt-green-dark' : 'bg-grey-dark']

/* eslint-disable @typescript-eslint/indent */
const getCheckableStyle = (isChecked: boolean, isCheckable: boolean) =>
  (!isCheckable
  ? css`
    cursor: not-allowed;
  `
  : css`
    cursor: pointer;

    ${CheckIcon} {
      opacity: ${isChecked ? 1 : 0};
      will-change: opacity;
  
      ${({ foundation }) => foundation?.transition.getTransitionsCSS('opacity')}
    }
  
    ${StyledAvatar}::before {
      display: block;
      width: 100%;
      height: 100%;
      content: '';
      opacity: ${isChecked ? 1 : 0};
      will-change: opacity, background-color;
  
      ${({ foundation }) => foundation?.transition.getTransitionsCSS(['opacity', 'background-color'])}
  
      ${({ foundation }) => smoothCorners({
        backgroundColor: getBackgroundColor(isChecked, foundation),
        borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
      })};
    }

    &:hover ${CheckIcon},
    &:hover ${StyledAvatar}::before {
      opacity: 1;
    }
  `)
/* eslint-enable @typescript-eslint/indent */

export const CheckableAvatarWrapper = styled.div<CheckableAvatarWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  
  ${({ isChecked, isCheckable }) => getCheckableStyle(isChecked, isCheckable)}
`
