/* Internal dependencies */
import { css, ellipsis, styled } from '../../foundation'
import { SemanticNames } from '../../foundation/Colors/Theme'
import { Icon } from '../Icon'
import { ListItemSize } from './ListItem.types'
import { getStyleOfSize } from './utils'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const RightContent = styled.div`
  margin-left: 8px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

interface DescriptionProps {
  active?: boolean
}

export const DescriptionWrapper = styled.div<DescriptionProps>`
  display: flex;
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
  ${({ descriptionMaxLines }) => descriptionMaxLines && ellipsis(descriptionMaxLines)}
`

interface IconWrapperProps {
  color?: SemanticNames
  active?: boolean
  disableIconActive?: boolean
}

const IconSpacing = css`
  flex-shrink: 0;
  width: 20px;
  margin-right: 8px;
`

export const StyledIcon = styled(Icon)<IconWrapperProps>`
  color: ${props => {
    if (!props.disableIconActive && props.active) { return props.foundation?.theme['bgtxt-blue-normal'] }
    return props.foundation?.theme?.[props.color || 'txt-black-dark']
  }};
`

export const LeftContentWrapper = styled.div`
  ${IconSpacing}
  display: flex;
  align-items: center;
`

export const IconMargin = styled.div`
  ${IconSpacing}
`

export interface StyledWrapperProps {
  size?: ListItemSize
  active?: boolean
}

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  ${({ size }) => getStyleOfSize(size)}
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
  text-decoration: none;
  cursor: pointer;
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  &:hover {
    ${({ foundation, active }) => (!active && `
      background-color: ${foundation?.theme?.['bg-black-lighter']};
    `)}
  }

  &:hover ${StyledIcon} {
    color: ${({ foundation, active, color }) => (
    active
      ? foundation?.theme['bgtxt-blue-normal']
      : foundation?.theme?.[color || 'txt-black-darkest']
  )};
  }

  ${({ active }) => (active && ActiveItemStyle)}
`
