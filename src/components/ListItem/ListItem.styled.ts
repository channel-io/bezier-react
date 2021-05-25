/* Internal dependencies */
import { css, ellipsis, LineHeightAbsoluteNumber, styled } from '../../foundation'
import { SemanticNames } from '../../foundation/Colors/Theme'
import { Icon } from '../Icon'
import { ListItemSize } from './ListItem.types'
import { getStyleOfSize } from './utils'

interface StyledWrapperProps {
  size?: ListItemSize
  active?: boolean
  disabled?: boolean
  color?: SemanticNames
}

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation, color }) => (color ? foundation?.theme?.[color] : foundation?.theme?.['bgtxt-blue-normal'])};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

export const RightContent = styled.div`
  margin-left: 8px;
`

export const TitleWrapper = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 2;
  align-items: center;
`

interface DescriptionProps {
  active?: boolean
}

export const DescriptionWrapper = styled.div<DescriptionProps>`
  display: flex;
  grid-row: 2;
  grid-column: 2;
  align-items: center;
  width: 100%;
  margin-top: 2px;
  color: ${({ foundation, active }) => (active
    ? foundation?.theme['bgtxt-blue-normal']
    : foundation?.theme['txt-black-darker'])
};
`

export const Title = styled.div`
  ${ellipsis()}
`

interface DescriptionProps {
  descriptionMaxLines?: number
}

export const Description = styled.div<DescriptionProps>`
  ${({ descriptionMaxLines }) => descriptionMaxLines && ellipsis(descriptionMaxLines, LineHeightAbsoluteNumber.Lh16)}
`

interface IconWrapperProps {
  color?: SemanticNames
  active?: boolean
  disableIconActive?: boolean
}

export const StyledIcon = styled(Icon)<IconWrapperProps>`
  color: ${props => {
    if (props.color) {
      return props.foundation?.theme?.[props.color]
    }
    if (!props.disableIconActive && props.active) { return props.foundation?.theme['bgtxt-blue-normal'] }
    return props.foundation?.theme?.['txt-black-dark']
  }};
`

export const LeftContentWrapper = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 1;
  align-items: center;
  margin-right: 8px;
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: fit-content(100%) minmax(0, 1fr);
  width: 100%;
`

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  ${({ size }) => getStyleOfSize(size)}
  color: ${({ foundation, color }) => foundation?.theme?.[color || 'txt-black-darkest']};
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  &:hover {
    ${({ foundation, disabled, active }) => (!disabled && !active && `
      background-color: ${foundation?.theme?.['bg-black-lighter']};
    `)}
  }

  &:hover ${StyledIcon} {
    color: ${({ disabled, foundation, active, color }) => {
    if (color) {
      return foundation?.theme?.[color]
    }
    if (!disabled) {
      return active ? foundation?.theme?.['bgtxt-blue-normal'] : foundation?.theme?.['txt-black-darkest']
    }

    return foundation?.theme?.['txt-black-dark']
  }}
  }

  ${({ active }) => (active && ActiveItemStyle)}
`
