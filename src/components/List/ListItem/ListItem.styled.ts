/* Internal dependencies */
import { css, styled } from '../../../foundation'
import { StyledWrapperProps } from './ListItem.types'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px;
  margin-right: 6px;
  margin-left: 6px;
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
