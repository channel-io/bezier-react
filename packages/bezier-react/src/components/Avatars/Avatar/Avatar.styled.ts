/* stylelint-disable function-whitespace-after */
import { styled } from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { ZIndex } from '~/src/constants/ZIndex'
import type { InterpolationProps } from '~/src/types/Foundation'

import { AlphaSmoothCornersBox } from '~/src/components/AlphaSmoothCornersBox'

import { AvatarSize } from './Avatar.types'

export const AvatarImage = styled(AlphaSmoothCornersBox)`
  --bezier-avatar-computed-status-gap: var(--bezier-avatar-status-gap);

  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  outline: none;

  &.bordered[data-state="enabled"] {
    --bezier-avatar-computed-status-gap: calc(var(--bezier-avatar-status-gap) + (2 * var(--bezier-alpha-smooth-corners-box-shadow-spread-radius)));
  }

  &.size-${AvatarSize.Size20} {
    width: 20px;
    height: 20px;
  }

  &.size-${AvatarSize.Size24} {
    width: 24px;
    height: 24px;
  }

  &.size-${AvatarSize.Size30} {
    width: 30px;
    height: 30px;
  }

  &.size-${AvatarSize.Size36} {
    width: 36px;
    height: 36px;
  }

  &.size-${AvatarSize.Size42} {
    width: 42px;
    height: 42px;
  }

  &.size-${AvatarSize.Size48} {
    width: 48px;
    height: 48px;
  }

  &.size-${AvatarSize.Size72} {
    width: 72px;
    height: 72px;
  }

  &.size-${AvatarSize.Size90} {
    width: 90px;
    height: 90px;
  }

  &.size-${AvatarSize.Size120} {
    width: 120px;
    height: 120px;
  }

  ${({ interpolation }) => interpolation}
`

export const AvatarWrapper = styled.div<InterpolationProps>`
  position: relative;
  z-index: ${ZIndex.Base};

  &[data-disabled="true"] {
    opacity: ${DisabledOpacity};
  }

  ${({ interpolation }) => interpolation}
`

export const StatusWrapper = styled.div`
  position: absolute;
  right: var(--bezier-avatar-computed-status-gap, 0);
  bottom: var(--bezier-avatar-computed-status-gap, 0);
`
