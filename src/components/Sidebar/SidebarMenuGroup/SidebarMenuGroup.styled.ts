/* Internal dependencies */
import { css, styled } from '../../../styling/Theme'
import Palette from '../../../styling/Palette'
import { StyledWrapperProps } from './SidebarMenuGroup.types'

const ActiveGroupItemStyle = css`
  color: ${Palette.blue500} !important;
  background-color: ${Palette.grey200} !important;

  & svg {
    color: $blue500 !important;
  }
`

export const Wrapper = styled.div`
  background-color: black;
`

export const GroupItemWrapper = styled.div<StyledWrapperProps>`
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

  ${(props) => !!props.selectedOptionIndex && ActiveGroupItemStyle}
`

export const GroupItemContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

export const ChildrenWrapper = styled.div`
  & > * {
    padding-left: 42px;
  }
`
