/* Internal dependencies */
import { styled, hideScrollbars } from '../../foundation'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  box-shadow: 0 -1px 0 0 ${props => props.foundation?.theme?.['bg-black-light']} inset;
`

export const TabItemWrapper = styled.div`
  ${hideScrollbars}
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-y: hidden;
`

export const TabActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
