/* Internal dependencies */
import { styled, css, ellipsis } from 'Foundation'
import type { InterpolationProps } from 'Types/Foundation'
import { Text } from 'Components/Text'

interface WrapperProps extends InterpolationProps {
  open: boolean
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

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  max-width: 20px;
  margin-left: 2px;
`

export const RightContentWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: flex-end;
  margin-left: 8px;
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

const activeItemStyle = css`
  color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

const nonActiveItemStyle = css`
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }
  
  /*
    ':focus-visible' Pseudo class는 Safari 15.4 이후 지원하기 때문에,
    이를 ':hover' 와 ',' 연산자로 연결할 경우 hover, focus-visible 모두 작동하지 않는 이슈가 있음.
    https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible#browser_compatibility
  */
  &:focus-visible {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
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

  ${({ active }) => (active ? activeItemStyle : nonActiveItemStyle)}
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
