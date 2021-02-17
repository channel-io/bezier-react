/* Internal dependencies */
import { styled, css } from '../../foundation'

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
  height: max-content;
  padding: 5px 10px;
  color: ${props => props.foundation?.theme?.['bg-white-high']};
  visibility: hidden;
  background-color: ${props => props.foundation?.theme?.['bg-grey-darkest']};

  ${({ show }) => show && css`
    visibility: visible;
  `}

  ${({ disabled }) => disabled && css`
    display: none;
  `}
`
