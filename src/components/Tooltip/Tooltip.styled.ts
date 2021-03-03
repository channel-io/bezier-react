/* Internal dependencies */
import { styled, css } from '../../foundation'

interface StyledTooltipProps {
  show: boolean
  disabled: boolean
}

export const Container = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
`

export const TooltipContent = styled.div<StyledTooltipProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1000000000;
  width: max-content;
  max-width: 223px;
  height: max-content;
  padding: 10px 14px;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
  word-break: break-all;
  visibility: hidden;
  ${({ foundation }) => foundation?.elevation?.ev2(true)};
  ${({ foundation }) => foundation?.rounding?.round4};

  ${({ show }) => show && css`
    visibility: visible;
  `}

  ${({ disabled }) => disabled && css`
    display: none;
  `}
`
