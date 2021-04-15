/* Internal denpendencies */
import { styled, css, smoothCorners } from '../../../foundation'
import { Text, TextProps } from '../../Text'
import { AVATAR_BORDER_RADIUS_PERCENTAGE, AVATAR_GROUP_DEFAULT_SPACING } from '../constants/AvatarStyle'

interface AvatarGroupProps {
  spacing: number
}

const disableSmoothCornersFallbackEllipsisStyle = css`
  background-color: ${({ foundation }) => foundation?.theme?.['dim-dark']};
  border-radius: ${AVATAR_BORDER_RADIUS_PERCENTAGE}%;
`

export const AvatarEllipsisCount = styled(Text) <TextProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${({ height }) => height}px;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
`

export const StyledAvatarGroup = styled.div<AvatarGroupProps>`
  display: flex;

  & > * + * {
    margin-left: ${({ spacing }) => spacing}px;
  }

  & ${AvatarEllipsisCount} {
    margin-left: ${({ spacing }) => (spacing > AVATAR_GROUP_DEFAULT_SPACING ? spacing : AVATAR_GROUP_DEFAULT_SPACING)}px;
  }
`

export const AvatarEllipsisIconWrapper = styled.div`
  position: relative;
`

export const AvatarEllipsisIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
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
