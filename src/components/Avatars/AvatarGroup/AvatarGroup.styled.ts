/* Internal denpendencies */
import { styled, css, smoothCorners } from '../../../foundation'
import { enableSmoothCorners } from '../../../worklets/EnableCSSHoudini'
import { StyledAvatar } from '../Avatar/Avatar.styled'
import { AVATAR_BORDER_WIDTH, AVATAR_BORDER_RADIUS_PERCENTAGE } from '../constants/AvatarStyle'

interface AvatarGroupProps {
  spacing: number
  max: number
}

const disableSmoothCornersFallbackEllipsisStyle = css`
  background-color: ${({ foundation }) => foundation?.theme?.['dim-dark']};
  border-radius: ${AVATAR_BORDER_RADIUS_PERCENTAGE}%;
`

/**
 * NOTE: (@ed) smooth corner가 적용되지 않는 브라우저에서, 보더를 제대로 보여주기 위한 코드입니다.
 * Safari, Firefox에선 z-index로 수도 엘리먼트와 부모 엘리먼트간의 쌓임 맥락이 제대로 형성되지 않아
 * "transform-style: perserve-3d"(Avatar 참고)와 transform: translateZ(-{n}px)로 상하 레이어로 보이도록 했습니다.
 * https://stackoverflow.com/questions/3032856/is-it-possible-to-set-the-stacking-order-of-pseudo-elements-below-their-parent-e
 */
function getAvatarZindexStyle({ spacing, max }: AvatarGroupProps) {
  if (spacing >= 0 || enableSmoothCorners.current) { return '' }
  let result = ''
  for (let i = 0; i < max; i += 1) {
    result += `
      & > ${StyledAvatar}:nth-child(${i + 1}) {
        transform: translateZ(${i}px);
      }
    `
  }
  return result
}

function getAvatarEllipsisZIndexStyle({ spacing, max }: AvatarGroupProps) {
  if (spacing >= 0) { return '' }
  return css`
    transform: translateZ(${max - 1}px);
  `
}

function calcNegativeSpacing(spacing: number = 0) {
  if (spacing >= 0 || !enableSmoothCorners.current) { return spacing }
  return (spacing - (AVATAR_BORDER_WIDTH * 2))
}

export const StyledAvatarGroup = styled.div<AvatarGroupProps>`
  display: flex;

  & > ${StyledAvatar}:not(:first-child) {
    margin-left: ${({ spacing }) => calcNegativeSpacing(spacing)}px;
  }

  ${({ spacing, max }) => getAvatarZindexStyle({ spacing, max })}
`

export const AvatarEllipsisWrapper = styled.div<AvatarGroupProps>`
  position: relative;
  margin-left: ${({ spacing }) => calcNegativeSpacing(spacing)}px;

  ${({ spacing, max }) => getAvatarEllipsisZIndexStyle({ spacing, max })}
`

export const AvatarEllipsis = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  outline: none;

  ${disableSmoothCornersFallbackEllipsisStyle}

  ${({ foundation }) => smoothCorners({
    borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    backgroundColor: foundation?.theme?.['dim-dark'],
  })}
`
