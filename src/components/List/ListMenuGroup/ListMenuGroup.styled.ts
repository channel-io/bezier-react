/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { styled } from '../../../foundation'
import { Icon } from '../../Icon'
import { StyledWrapperProps, StyledContentWrapperProps } from './ListMenuGroup.types'

export const GroupItemWrapper = styled.div<StyledWrapperProps>`
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

  ${({ foundation, currentMenuItemIndex }) => !isNil(currentMenuItemIndex) && `
      color: ${foundation?.theme?.['text-hover-blue']};
      background-color: ${foundation?.theme?.['text-hover-blue']};
  `}

  &:hover {
    background-color: ${props => (isNil(props.currentMenuItemIndex) && props.foundation?.theme?.['text-hover-blue'])};
  }
`

export const StyledIcon = styled(Icon)`
  color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
`

export const GroupItemContentWrapper = styled.div<StyledContentWrapperProps>`
  display: flex;
  flex: 1;
  align-items: center;

  ${props => !isNil(props.currentMenuItemIndex) && `
      svg {
        color: ${props.foundation?.theme?.['text-hover-blue']};
      }
  `}
`

export const ChildrenWrapper = styled.div`
  & > * {
    padding-left: 38px;
  }
`
