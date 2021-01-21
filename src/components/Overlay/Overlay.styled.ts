/* Internal dependencies */
import { styled, css } from '../../foundation'
import { StyledOverlayProps } from './Overlay.types'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const StyledOverlay = styled.div<StyledOverlayProps>`
  position: absolute;
  ${props => props.isHidden && css`
    visibility: hidden;
  `}
`
