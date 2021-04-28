/* Internal dependencies */
import { css, ellipsis, styled } from '../../../foundation'
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { Icon } from '../../Icon'
import { StyledWrapperProps } from './ListItem.types'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  height: 32px;
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px`};
  font-size: 14px;
  font-weight: normal;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  &:hover {
    ${props => (props.active ? '' : `
      background-color: ${props.foundation?.theme?.['bg-black-lighter']};
    `)}
  }

  ${props => (props.active && ActiveItemStyle)}
`

interface StyledIconProps {
  color: SemanticNames
  active?: boolean
  disableIconActive?: boolean
}

export const StyledIcon = styled(Icon)<StyledIconProps>`
  color: ${props => {
    if (!props.disableIconActive && props.active) { return props.foundation?.theme['bgtxt-blue-normal'] }
    return props.foundation?.theme?.[props.color || 'txt-black-dark']
  }};
`

export const ContentWrapper = styled.div`
  flex: 1;

  ${ellipsis()}
`
