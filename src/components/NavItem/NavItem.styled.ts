/* Internal dependencies */
import { styled, css, ellipsis } from 'Foundation'
import type { InterpolationProps } from 'Types/Foundation'
import { Text } from 'Components/Text'

interface WrapperProps extends InterpolationProps {
  active: boolean
  open: boolean
  paddingLeft: number
}

export const LeftIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const ContentWrapper = styled(Text)`
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
  ${ellipsis()}
`

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
`

export const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

const activeItemStyle = css`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

const nonActiveItemStyle = css`
  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }
`

const closedItemStyle = css`
  ${ChevronWrapper} {
    visibility: hidden;
  }

  &:hover {
    ${ChevronWrapper} {
      visibility: visible;
    }
  }
`

export const ItemWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  height: 28px;
  padding-right: 6px;
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px`};
  cursor: pointer;
  ${({ foundation }) => foundation?.rounding?.round6}

  ${({ active }) => (active ? activeItemStyle : nonActiveItemStyle)}
  ${({ open }) => (open ? null : closedItemStyle)}

  ${({ interpolation }) => interpolation}
`
