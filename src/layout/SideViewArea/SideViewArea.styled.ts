/* Internal dependencies */
import { styled } from '../../styling/Theme'

interface SideViewWrapperProps {}

export const SideViewWrapper = styled.div<SideViewWrapperProps>`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  z-index: 50;
`
