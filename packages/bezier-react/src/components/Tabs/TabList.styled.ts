/* Internal dependencies */
import { styled } from '~/src/foundation'
import { type TabSize } from './Tabs.types'

interface ListProps {
  size: TabSize
}

export const TabList = styled.div<ListProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--bezier-tabs-size);
  box-shadow: 0 -1px 0 0 ${props => props.foundation?.theme?.['bg-black-light']} inset;
`
