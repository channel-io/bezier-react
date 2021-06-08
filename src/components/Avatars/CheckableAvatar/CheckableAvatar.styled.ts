/* Internal denpendencies */
import { styled, css, smoothCorners, Foundation, SemanticNames } from '../../../foundation'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { Icon, IconSize } from '../../Icon'
import { AVATAR_BORDER_RADIUS_PERCENTAGE } from '../constants/AvatarStyle'
import { AvatarSize } from '../Avatar/Avatar.types'
import { AvatarImage } from '../Avatar/Avatar.styled'
import { WithInterpolation } from '../../../types/InjectedInterpolation'

const BASE_ICON_SIZE = IconSize.S
const BASE_WRAPPER_SIZE = AvatarSize.Size42
const CHECK_ICON_SIZE_PERCENTAGE = (BASE_ICON_SIZE / BASE_WRAPPER_SIZE) * 100

interface CheckableAvatarWrapperProps extends WithInterpolation {
  isChecked: boolean
  isCheckable: boolean
  checkedBackgroundColor: SemanticNames
}

export const CheckIcon = styled(Icon)`
  position: absolute;
  z-index: 2;
  width: ${CHECK_ICON_SIZE_PERCENTAGE}%;
  height: ${CHECK_ICON_SIZE_PERCENTAGE}%;
  pointer-events: none;
  opacity: 0;
`

const getBackgroundColor = (isChecked: boolean, checkedBackgroundColor: SemanticNames, foundation?: Foundation) =>
  foundation?.theme?.[isChecked ? checkedBackgroundColor : 'bg-grey-dark']

/* eslint-disable @typescript-eslint/indent */
const getCheckableStyle = (isChecked: boolean, isCheckable: boolean, checkedBackgroundColor: SemanticNames) =>
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

    ${AvatarImage}::before {
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
        backgroundColor: getBackgroundColor(isChecked, checkedBackgroundColor, foundation),
        borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
      })};
    }

    &:hover ${CheckIcon},
    &:hover ${AvatarImage}::before {
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

  ${({ isChecked, isCheckable, checkedBackgroundColor }) => getCheckableStyle(isChecked, isCheckable, checkedBackgroundColor)}

  ${({ interpolation }) => interpolation}
`
