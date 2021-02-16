/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { styled } from '../../../foundation'
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import { Icon } from '../../Icon'
import { StyledWrapperProps, StyledContentWrapperProps } from './ListMenuGroup.types'

export const GroupItemWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0;
  font-size: 14px;
  font-weight: normal;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: ${props => (isNil(props.currentMenuItemIndex) && props.foundation?.theme?.['bg-black-lighter'])};
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};
`

interface StyledIconProps {
  color: ThemeKey
}

export const StyledIcon = styled(Icon)<StyledIconProps>`
  color: ${({ foundation, color }) => foundation?.theme?.[color || 'txt-black-dark']};
`

export const GroupItemContentWrapper = styled.div<StyledContentWrapperProps>`
  display: flex;
  flex: 1;
  align-items: center;

  padding-left: ${({ paddingLeft }) => `${paddingLeft}px`};
`

export const ContentWrapper = styled.div`
  margin-left: 8px;
`
