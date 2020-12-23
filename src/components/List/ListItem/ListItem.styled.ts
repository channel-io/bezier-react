/* Internal dependencies */
import { css, styled } from '../../../foundation'
import { StyledWrapperProps } from './ListItem.types'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
  background-color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
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
  color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    ${props => (props.active ? '' : `
      background-color: ${props.foundation?.theme?.['text-hover-blue']};
    `)}
  }

  ${props => (props.active && ActiveItemStyle)}
`
