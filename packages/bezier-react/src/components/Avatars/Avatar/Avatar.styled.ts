/* stylelint-disable function-whitespace-after */
import { styled } from '~/src/foundation'

import { AlphaSmoothCornersBox } from '~/src/components/AlphaSmoothCornersBox'

export const AvatarImage = styled(AlphaSmoothCornersBox)`
  --b-avatar-computed-status-gap: var(--b-avatar-status-gap);

  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  outline: none;

  &.bordered[data-state="enabled"] {
    --b-avatar-computed-status-gap: calc(var(--b-avatar-status-gap) + (2 * var(--b-alpha-smooth-corners-box-shadow-spread-radius)));
  }
`

export const StatusWrapper = styled.div`
  position: absolute;
  right: var(--b-avatar-computed-status-gap, 0);
  bottom: var(--b-avatar-computed-status-gap, 0);
  display: flex;
`
