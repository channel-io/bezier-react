/* Internal dependencies */
import { styled } from '../../foundation'

interface SideViewWrapperProps {}

export const SideViewWrapper = styled.div<SideViewWrapperProps>`
  grid-column: 2;
  grid-row: 1 / 3;
  z-index: 50;
`
