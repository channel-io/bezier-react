/* Internal dependencies */
import { css, styled } from '../../../styling/Theme'
import Palette from '../../../styling/Palette'
import { StyledWrapperProps } from './SidebarMenuItem.types'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${Palette.blue500};
  background-color: ${Palette.blue100};
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
  color: ${Palette.grey700};
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    ${props => (props.active ? '' : `
      color: ${Palette.grey700};
      background-color: ${Palette.grey300}
    `)}
  }

  ${props => (props.active && ActiveItemStyle)}
`
