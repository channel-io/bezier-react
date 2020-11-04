/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { styled } from '../../../styling/Theme'
import { Icon } from '../../Icon'
import { StyledWrapperProps } from './ListMenuGroup.types'

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
    background-color: ${props => (props.open ? 'initial' : props.theme?.colors?.background3)};
  }

  ${props => !isNil(props.currentMenuItemIndex) && `
      color: ${props.theme?.colors?.focus5};
      background-color: ${props.theme?.colors?.background2};
  `}
`

export const StyledIcon = styled(Icon)`
  color: ${props => props.theme?.colors?.text5};
`

export const GroupItemContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

export const ChildrenWrapper = styled.div`
  & > * {
    padding-left: 38px;
  }
`
