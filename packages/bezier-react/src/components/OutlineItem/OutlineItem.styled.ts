import {
  css,
  ellipsis,
  styled,
} from '~/src/foundation'

import { type InterpolationProps } from '~/src/types/Foundation'
import { isNil } from '~/src/utils/typeUtils'

import { Icon } from '~/src/components/Icon'

interface WrapperProps extends InterpolationProps {
  active: boolean
  focused: boolean
  paddingLeft: number
  currentOutlineItemIndex?: number | null
}

const FocusedItemStyle = css<WrapperProps>`
  background-color: ${props => (isNil(props.currentOutlineItemIndex) && props.foundation?.theme?.['bg-black-lighter'])};
`

const ActiveItemStyle = css`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

const NonActiveItemStyle = css<WrapperProps>`
  ${({ focused }) => focused && FocusedItemStyle}

  &:hover {
    ${FocusedItemStyle}
  }
`

export const GroupItemWrapper = styled.div<WrapperProps>`
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

export const StyledIcon = styled(Icon)<InterpolationProps>`
  &.active {
    color: var(--bgtxt-blue-normal);
  }

  ${({ interpolation }) => interpolation}
`

export const ContentWrapper = styled.div<InterpolationProps>`
  flex: 1;

  ${ellipsis()}

  ${({ interpolation }) => interpolation}
`
