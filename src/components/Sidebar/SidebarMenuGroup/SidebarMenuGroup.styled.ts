/* External dependencies */
import _ from 'lodash'

/* Internal dependencies */
import { styled } from '../../../styling/Theme'
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
  color: ${props => props.theme?.colors?.text7};
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: ${props => props.theme?.colors?.background3};
  }

  ${props => !_.isNil(props.currentMenuItemIndex) && `
      color: ${props.theme?.colors?.focus5};
      background-color: ${props.theme?.colors?.background2};
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
