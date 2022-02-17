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
  min-width: 20px;
  max-width: 20px;
  margin-right: 8px;
`

export const ContentWrapper = styled(Text)`
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

  &:hover,
  &:focus-visible {
    ${ChevronWrapper} {
      visibility: visible;
    }
  }
`

export const Item = styled.button<WrapperProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
  padding: 0 6px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  ${({ foundation }) => foundation?.rounding?.round6}

  &:hover,
  &:focus-visible {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }

  ${({ open }) => (open ? null : closedItemStyle)}

  ${({ interpolation }) => interpolation}
`

export const ChildrenWrapper = styled.ul`
  padding: 0 0 8px;
  margin: 0;
`

export const Wrapper = styled.li`
  display: block;
`
