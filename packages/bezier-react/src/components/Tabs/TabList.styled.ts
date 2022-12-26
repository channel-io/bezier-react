/* Internal dependencies */
import { styled } from 'Foundation'
import { TabSize } from './Tabs.types'

interface ListProps {
  size: TabSize
}

const heightBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return 53
    case TabSize.M:
      return 45
    case TabSize.S:
    default:
      return 33
  }
}

export const TabList = styled.div<ListProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${({ size }) => heightBy(size)}px;
  box-shadow: 0 -1px 0 0 ${props => props.foundation?.theme?.['bg-black-light']} inset;
`
