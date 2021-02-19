/* Internal dependencies */
import { styled, css } from '../../foundation'
import { Palette } from '../../foundation/Theme/Palette'

interface StyledTooltipProps {
  show: boolean
  disabled: boolean
}

export const Container = styled.div`
  position: relative;
`

export const TooltipContent = styled.div<StyledTooltipProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: max-content;
  max-width: 223px;
  height: max-content;
  padding: 10px 14px;
  color: ${Palette.white};
  word-break: break-all;
  visibility: hidden;
  background-color: ${Palette.grey900};
  border-radius: 6px;
  box-shadow: 0 4px 12px 0 var(${Palette.black_20});

  ${({ show }) => show && css`
    visibility: visible;
  `}

  ${({ disabled }) => disabled && css`
    display: none;
  `}
`
