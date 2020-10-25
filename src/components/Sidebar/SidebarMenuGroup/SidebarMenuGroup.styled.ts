/* External dependencies */
import _ from 'lodash'

/* Internal dependencies */
import { styled } from '../../../styling/Theme'
import Palette from '../../../styling/Palette'
import { StyledWrapperProps } from './SidebarMenuGroup.types'

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

  &:hover {
    ${props => (props.active ? '' : `
      color: ${Palette.grey700};
      background-color: ${Palette.grey300};
    `)}
  }

  ${props => !_.isNil(props.currentMenuItemIndex) && `
      color: ${Palette.blue500};
      background-color: ${Palette.grey200};
  `}
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
