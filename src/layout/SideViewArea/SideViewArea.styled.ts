/* Internal dependencies */
import { styled } from '../../foundation'

interface SideViewWrapperProps {}

export const SideViewWrapper = styled.div<SideViewWrapperProps>`
  z-index: 50;
  grid-row: 1 / 3;
  grid-column: 2;
`
