/* Internal dependencies */
import { styled, smoothCorners } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'
import { AVATAR_BORDER_RADIUS_PERCENTAGE } from 'Components/Avatars/AvatarStyle'
import { Text } from 'Components/Text'

export const AvatarEllipsisCount = styled(Text)`
  position: relative;
  display: flex;
  align-items: center;
  height: var(--bezier-avatar-group-size);
  color: var(--txt-black-dark);

  ${({ interpolation }) => interpolation}
`

export const AvatarGroup = styled.div`
  position: relative;
  z-index: 0;
  display: flex;

  & > * + * {
    margin-left: var(--bezier-avatar-group-spacing);
  }
`

export const AvatarEllipsisIconWrapper = styled.div<InterpolationProps>`
  position: relative;

  ${({ interpolation }) => interpolation}
`

export const AvatarEllipsisCountWrapper = styled.div`
  padding-right: var(--bezier-avatar-group-ellipsis-mr);

  && {
    margin-left: var(--bezier-avatar-group-ellipsis-ml);
  }
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

  ${({ foundation }) => smoothCorners({
    borderRadius: `${AVATAR_BORDER_RADIUS_PERCENTAGE}%`,
    backgroundColor: foundation?.theme?.['bgtxt-absolute-black-lightest'],
  })}
`
