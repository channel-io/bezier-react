/* Internal dependencies */
import {
  smoothCorners,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'
import { type InterpolationProps } from '~/src/types/Foundation'

import { AVATAR_BORDER_RADIUS_PERCENTAGE } from '~/src/components/Avatars/AvatarStyle'
import { Text } from '~/src/components/Text'

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
  z-index: ${ZIndex.Base};
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
  z-index: ${ZIndex.Float};
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
