import { styled } from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'
import { type InterpolationProps } from '~/src/types/Foundation'

import { AlphaSmoothCornersBox } from '~/src/components/AlphaSmoothCornersBox'
import { Text } from '~/src/components/Text'

export const AvatarEllipsisCount = styled(Text)`
  position: relative;
  display: flex;
  align-items: center;
  height: var(--b-avatar-group-size);
  color: var(--txt-black-dark);
`

export const AvatarGroup = styled.div`
  position: relative;
  z-index: ${ZIndex.Base};
  display: flex;

  & > * + * {
    margin-left: var(--b-avatar-group-spacing);
  }
`

export const AvatarEllipsisIconWrapper = styled.div<InterpolationProps>`
  position: relative;

  ${({ interpolation }) => interpolation}
`

export const AvatarEllipsisCountWrapper = styled.div`
  padding-right: var(--b-avatar-group-ellipsis-mr);

  && {
    margin-left: var(--b-avatar-group-ellipsis-ml);
  }
`

export const AvatarEllipsisIcon = styled(AlphaSmoothCornersBox)`
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
`
