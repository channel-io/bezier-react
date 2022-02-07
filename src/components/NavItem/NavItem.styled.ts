/* Internal dependencies */
import { styled, css, ellipsis } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'
import { Icon } from 'Components/Icon'

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

export const ContentWrapper = styled.div`
  ${ellipsis()}
`

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3px;
`

export const StyledIcon = styled(Icon)``

export const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

const ActiveItemStyle = css`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

const NonActiveItemStyle = css`
  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }
`

const ClosedItemStyle = css`
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
  font-size: 14px;
  font-weight: 500;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;

  ${({ active }) => (active ? ActiveItemStyle : NonActiveItemStyle)}
  ${({ open }) => (open ? null : ClosedItemStyle)}

  ${({ interpolation }) => interpolation}
`
