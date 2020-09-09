/* Internal dependencies */
import { styled } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import { hideScrollbars } from '../../styling/Mixins'
import { StyledWrapperProps, StyledTabItemWrapperProps } from './Tabs.types'

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  box-shadow: 0 -1px 0 0 ${Palette.grey300} inset;
`

export const TabItemWrapper = styled.div<StyledTabItemWrapperProps>`
  ${hideScrollbars}
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-y: scroll;
`
