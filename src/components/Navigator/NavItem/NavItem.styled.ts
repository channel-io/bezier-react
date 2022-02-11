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
  min-width: 20px;
  max-width: 20px;
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
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};

  &:hover,
  &:focus-visible {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }
`

export const Item = styled.a<WrapperProps>`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 6px;
  text-decoration: none;
  outline: 0;
  ${({ foundation }) => foundation?.rounding?.round6}

  ${({ active }) => (active ? activeItemStyle : nonActiveItemStyle)}

  ${({ interpolation }) => interpolation}
`

export const Wrapper = styled.li`
  display: block;
`
