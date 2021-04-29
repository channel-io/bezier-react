/* Internal dependencies */
import { css, ellipsis, styled } from '../../../foundation'
import { SemanticNames } from '../../../foundation/Colors/Theme'
import ActivableElement from '../../../types/ActivatableElement'
import { UIComponentProps } from '../../../types/ComponentProps'
import OptionItem from '../../../types/OptionItem'
import { ListItemSize } from './ListItem.types'

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  showLine?: number
}

export const Content = styled.div<EllipsisProps>`
  ${ellipsis()}
`

export const Description = styled.div<EllipsisProps>`
  ${({ showLine }) => showLine && ellipsis(showLine)}
`

interface IconWrapperProps {
  color?: SemanticNames
  active?: boolean
  disableIconActive?: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 20px;
  margin-right: 8px;
  color: ${props => {
    if (!props.disableIconActive && props.active) { return props.foundation?.theme['bgtxt-blue-normal'] }
    return props.foundation?.theme?.[props.color || 'txt-black-dark']
  }};
`

export const RightSide = styled.div``

function getStyleOfSize(size?: ListItemSize) {
  switch (size) {
    case ListItemSize.S:
      return css`
        padding: 4px 6px;
        border-radius: 6px;
      `
    case ListItemSize.L:
      return css`
        padding: 8px 6px;
        border-radius: 8px;
      `
    case ListItemSize.XL:
      return css`
        padding: 10px 6px;
        border-radius: 12px;
      `
    case ListItemSize.M:
    default:
      return css`
        padding: 6px;
        border-radius: 6px;
      `
  }
}

export interface StyledWrapperProps extends UIComponentProps, OptionItem, ActivableElement {
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
    ${props => (props.active ? '' : `
      background-color: ${props.foundation?.theme?.['bg-black-lighter']};
    `)}
  }

  &:hover ${IconWrapper} {
    color: ${(props) => (
    props.active
      ? props.foundation?.theme['bgtxt-blue-normal']
      : props.foundation?.theme?.[props.color || 'txt-black-darkest']
  )};
  }

  ${props => (props.active && ActiveItemStyle)}
`
