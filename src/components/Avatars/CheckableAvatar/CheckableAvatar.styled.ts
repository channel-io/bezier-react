/* Internal denpendencies */
import { styled, css, smoothCorners, Foundation } from '../../../foundation'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { Icon } from '../../Icon'
import { AVATAR_BORDER_RADIUS_PERCENTAGE } from '../constants/AvatarStyle'
import { StyledAvatar } from '../Avatar/Avatar.styled'

// NOTE: 20px (IconSize) / 42px (WrapperSize) = 0.476129...
const CHECK_ICON_SIZE_PERCENTAGE = 47.61904762

interface CheckableAvatarWrapperProps {
  isChecked: boolean
  isCheckable: boolean
}

export const CheckIcon = styled(Icon)`
  position: absolute;
  z-index: 2;
  width: ${CHECK_ICON_SIZE_PERCENTAGE}%;
  height: ${CHECK_ICON_SIZE_PERCENTAGE}%;
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
      /**
       * NOTE: (@ed) smooth-corners가 적용된 상태에선 background 색상을 background-color 속성을 통해 그리지 않으므로 (background: paint(smooth-corners))
       * smooth-corners가 사용 가능한 브라우저에선 background-color 트랜지션또한 불가능합니다.
       * 발생하지 않는 트랜지션에 will-change 속성을 주는 건 불필요하므로, will-change 속성에서 background-color를 제거합니다.
       */
      will-change: ${enableSmoothCorners.current ? 'opacity' : 'opacity, background-color'};
  
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
