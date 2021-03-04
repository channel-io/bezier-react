/* Internal dependencies */
import { styled, css } from '../../foundation'
import { Icon } from '../Icon'
import { StyledWrapperProps } from './TabAction.types'

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: row;
  height: ${({ height }) => height}px;
`

interface BackgroundProps {
  href?: string
  padding?: number
  borderRadius?: number
  disabled?: boolean
}

export const Background = styled.div<BackgroundProps>`
  position: relative;
  top: 4px;
  display: flex;
  align-items: center;
  height: calc(100% - 9px);
  padding: 0 ${({ padding }) => padding}px;
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  text-decoration: none;
  cursor: pointer;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')};

  &:hover {
    ${({ foundation, disabled }) => css`
      ${!disabled && `background-color: ${foundation?.theme?.['bgtxt-blue-lightest']}`}
    `};
  }
`

export const LinkIcon = styled(Icon)`
  margin-left: 5px;
  font-weight: bold;
`
