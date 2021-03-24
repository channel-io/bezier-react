/* Internal dependencies */
import { styled, css } from '../../foundation'

interface ContentWrapperProps {
  show: boolean
  disabled: boolean
}

export const Container = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
`
export const ContentWrapper = styled.div<ContentWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000000000;
  visibility: hidden;

  ${({ show }) => show && css`
    visibility: visible;
  `}

  ${({ disabled }) => disabled && css`
    display: none;
  `}
`

export const Content = styled.div`
  width: max-content;
  max-width: 223px;
  height: max-content;
  padding: 10px 14px;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
  word-break: break-all;
  ${({ foundation }) => foundation?.elevation?.ev2(true)};
  ${({ foundation }) => foundation?.rounding?.round4};
`
