/* Internal dependencies */
import { styled, css } from '../../foundation'
import OverlayProps, {
  OverlayPosition,
  ContainerRectAttr,
  TargetRectAttr,
} from './Overlay.types'
import { getOverlayStyle } from './utils/positionUtils'

interface StyledOverlayProps extends OverlayProps {
  show: boolean
  containerRect: ContainerRectAttr
  targetRect: TargetRectAttr | null
  overlay: any
  position: OverlayPosition
  marginX: number
  marginY: number
  keepInContainer: boolean
}

export const DefaultContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const DefaultWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Overlay = styled.div<StyledOverlayProps>`
  position: absolute;

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
`
