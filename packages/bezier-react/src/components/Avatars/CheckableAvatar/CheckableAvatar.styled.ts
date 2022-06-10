/* Internal denpendencies */
import { styled, css, smoothCorners, Foundation, SemanticNames } from 'Foundation'
import { enableSmoothCorners } from 'Worklets/EnableCSSHoudini'
import type { InjectedInterpolation, InterpolationProps } from 'Types/Foundation'
import { Icon, CheckIcon as CheckIconSource } from 'Components/Icon'
import { AVATAR_BORDER_RADIUS_PERCENTAGE } from 'Components/Avatars/AvatarStyle'
import { AvatarSize } from 'Components/Avatars/Avatar'
import { AvatarImage } from 'Components/Avatars/Avatar/Avatar.styled'

interface CheckableAvatarWrapperProps extends InterpolationProps {
  isChecked: boolean
  isCheckable: boolean
}

interface CheckIconProps {
  avatarSize: AvatarSize
}

const getCheckIconSize = (avatarSize: AvatarSize) => ({
  [AvatarSize.Size20]: 14,
  [AvatarSize.Size24]: 16,
  [AvatarSize.Size30]: 20,
  [AvatarSize.Size36]: 22,
  [AvatarSize.Size42]: 24,
  [AvatarSize.Size48]: 28,
  [AvatarSize.Size90]: 46,
  [AvatarSize.Size120]: 60,
}[avatarSize])

export const CheckIcon = styled(Icon).attrs({ source: CheckIconSource })<CheckIconProps>`
  position: absolute;
  z-index: 2;
  pointer-events: none;
  opacity: 0;

  ${({ avatarSize }) => {
    const iconSize = getCheckIconSize(avatarSize)
    return css`
      width: ${iconSize}px;
      height: ${iconSize}px;
    `
  }};
`

const getBackgroundColor = (isChecked: boolean, checkedBackgroundColor: SemanticNames, foundation?: Foundation) =>
  foundation?.theme?.[isChecked ? checkedBackgroundColor : 'bg-grey-dark']

/* eslint-disable @typescript-eslint/indent */
export const getAvatarImageStyle = (
  isChecked: boolean,
  isCheckable: boolean,
  checkedBackgroundColor: SemanticNames,
  interpolation?: InjectedInterpolation,
) => css`
  ${isCheckable && css`
    &::before {
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
  `}

  ${interpolation}
`

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

  ${({ isChecked, isCheckable }) => getCheckableStyle(isChecked, isCheckable)}

  ${({ interpolation }) => interpolation}
`
