/* Internal dependencies */
import { styled, css } from '../../foundation'
import { StyledOverlayProps } from './Overlay.types'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const StyledOverlay = styled.div<StyledOverlayProps>`
  position: absolute;
  ${props => props.isHidden && css`
    visibility: hidden;
  `}
`
