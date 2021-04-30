/* Internal dependencies */
import { css, ellipsis, styled } from '../../../foundation'
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { ListItemSize } from './ListItem.types'
import { getStyleOfSize } from './utils'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const RightSide = styled.div`
  margin-left: 8px;
`

export const ContentWrapper = styled.div`
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
interface EllipsisProps {
  descriptionMaxLines?: number
}

export const Content = styled.div<EllipsisProps>`
  ${ellipsis()}
`

export const Description = styled.div<EllipsisProps>`
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

export const IconWrapper = styled.div<IconWrapperProps>`
  ${IconSpacing}
  display: flex;
  align-items: center;
  color: ${props => {
    if (!props.disableIconActive && props.active) { return props.foundation?.theme['bgtxt-blue-normal'] }
    return props.foundation?.theme?.[props.color || 'txt-black-dark']
  }};
`

export const IconMargin = styled.div`
  ${IconSpacing}
`

export interface StyledWrapperProps {
  size?: ListItemSize
  paddingLeft: number
  active?: boolean
}

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  ${({ size }) => getStyleOfSize(size)}
  padding-left: ${({ paddingLeft }) => `${paddingLeft + 6}px`};
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
  text-decoration: none;
  cursor: pointer;
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  &:hover {
    ${({ foundation, active }) => (active ? '' : `
      background-color: ${foundation?.theme?.['bg-black-lighter']};
    `)}
  }

  &:hover ${IconWrapper} {
    color: ${({ foundation, active, color }) => (
    active
      ? foundation?.theme['bgtxt-blue-normal']
      : foundation?.theme?.[color || 'txt-black-darkest']
  )};
  }

  ${({ active }) => (active && ActiveItemStyle)}
`
