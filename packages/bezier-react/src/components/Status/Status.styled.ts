import {
  absoluteCenter,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'

import { Icon as BaseIcon } from '~/src/components/Icon'

export const Circle = styled.div`
  position: relative;
  z-index: ${ZIndex.Base};
  box-sizing: content-box;
  width: var(--b-status-size);
  height: var(--b-status-size);
  background-color: var(--bg-white-high);
  border: var(--b-status-border-width) solid var(--bg-white-high);
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: var(--b-status-size);
    height: var(--b-status-size);
    content: '';
    background-color: var(--b-status-bg-color);
    border-radius: 50%;
  }
`

export const Icon = styled(BaseIcon)`
  ${absoluteCenter('')}
  z-index: ${ZIndex.Float};
`
