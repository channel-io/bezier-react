/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { css, ellipsis, styled } from '../../foundation'
import { WithInterpolation } from '../../types/InjectedInterpolation'
import { SemanticNames } from '../../foundation/Colors/Theme'
import { Icon } from '../Icon'
import { StyledWrapperProps } from './OutlineItem.types'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

export const GroupItemWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0;
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px`};
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

  ${props => (props.active && ActiveItemStyle)}

  ${({ interpolation }) => interpolation}
`

interface StyledIconProps extends WithInterpolation {
  color: SemanticNames
}

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 100%;
`

export const StyledIcon = styled(Icon)<StyledIconProps>`
  color: ${props => {
    if (!props.disableIconActive && props.active) { return props.foundation?.theme['bgtxt-blue-normal'] }
    return props.foundation?.theme?.[props.color || 'txt-black-dark']
  }};

  ${({ interpolation }) => interpolation}
`

export const ContentWrapper = styled.div<WithInterpolation>`
  flex: 1;

  ${ellipsis()}

  ${({ interpolation }) => interpolation}
`
