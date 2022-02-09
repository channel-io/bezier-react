/* Internal dependencies */
import { styled, css, ellipsis } from 'Foundation'
import type { InterpolationProps } from 'Types/Foundation'
import { Text } from 'Components/Text'

interface WrapperProps extends InterpolationProps {
  open: boolean
}

export const LeftIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  margin-right: 8px;
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
  padding: 0 6px;
  cursor: pointer;
  ${({ foundation }) => foundation?.rounding?.round6}

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }

  ${({ open }) => (open ? null : closedItemStyle)}

  ${({ interpolation }) => interpolation}
`
