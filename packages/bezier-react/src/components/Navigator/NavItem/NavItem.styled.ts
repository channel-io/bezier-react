/* Internal dependencies */
import {
  css,
  styled,
} from '~/src/foundation'

import type { InterpolationProps } from '~/src/types/Foundation'

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

export const RightContentWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: flex-end;
  margin-left: 8px;
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
