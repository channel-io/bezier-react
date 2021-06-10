/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { css, ellipsis, styled } from '../../foundation'
import { WithInterpolation } from '../../types/InjectedInterpolation'
import { SemanticNames } from '../../foundation/Colors/Theme'
import { Icon } from '../Icon'
import OutlineItemProps, { StyledWrapperProps } from './OutlineItem.types'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

const NonActiveItemStyle = css<StyledWrapperProps>`
  &:hover {
    background-color: ${props => (isNil(props.currentOutlineItemIndex) && props.foundation?.theme?.['bg-black-lighter'])};
  }
`

export const GroupItemWrapper = styled.div<StyledWrapperProps & OutlineItemProps>`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 6px;
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px`};
  font-size: 14px;
  font-weight: normal;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  ${({ active }) => (active ? ActiveItemStyle : NonActiveItemStyle)}

  ${({ interpolation }) => interpolation}
`

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 100%;
`

export const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`

interface StyledIconProps extends WithInterpolation {
  color?: SemanticNames
}

export const StyledIcon = styled(Icon)<StyledIconProps & Pick<OutlineItemProps, 'active' | 'disableIconActive'>>`
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
