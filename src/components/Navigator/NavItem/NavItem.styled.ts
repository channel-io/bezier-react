/* Internal dependencies */
import { styled, css, ellipsis } from 'Foundation'
import type { InterpolationProps } from 'Types/Foundation'
import { Text } from 'Components/Text'

interface WrapperProps extends InterpolationProps {
  active: boolean
}

export const LeftIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  margin-right: 8px;
`

export const ContentWrapper = styled(Text)`
  ${ellipsis()}
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

export const ItemWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 6px;
  cursor: pointer;
  ${({ foundation }) => foundation?.rounding?.round6}

  ${({ active }) => (active ? activeItemStyle : nonActiveItemStyle)}

  ${({ interpolation }) => interpolation}
`
