import {
  css,
  styled,
} from '~/src/foundation'

import { ZIndex } from '~/src/constants/ZIndex'

import {
  type ContainerRectAttr,
  type OverlayPosition,
  type TargetRectAttr,
} from './Overlay.types'
import type OverlayProps from './Overlay.types'
import { getOverlayStyle } from './utils'

interface StyledOverlayProps extends OverlayProps {
  show: boolean
  containerRect: ContainerRectAttr
  targetRect: TargetRectAttr | null
  overlay: HTMLElement | null
  position: OverlayPosition
  marginX: number
  marginY: number
  keepInContainer: boolean
}

interface DefaultContainerProps extends Pick<OverlayProps, 'show'> {}

export const DefaultContainer = styled.div<DefaultContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${ZIndex.Overlay};
  width: 100%;
  height: 100%;

  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
`

export const DefaultWrapper = styled.div`
  position: relative;
  z-index: ${ZIndex.Base};
  width: 100%;
  height: 100%;
`

export const Overlay = styled.div<StyledOverlayProps>`
  position: absolute;
  z-index: ${ZIndex.Overlay};

  ${getOverlayStyle};

  ${({ show }) => !show && css`
    opacity: 0;
  `};

  ${({ withTransition, foundation }) => withTransition && (
    foundation?.transition?.getTransitionsCSS(
      ['top', 'opacity'],
      foundation?.transition?.TransitionDuration.S,
    )
  )};
  
  ${({ interpolation }) => interpolation}
`
