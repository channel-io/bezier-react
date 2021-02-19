/* External dependencies */

/* Internal dependencies */
import { styled } from '../../../foundation'
import LayoutSideType from '../../../constants/LayoutSideType'

interface SideAreaWrapperProps {
  sideType: LayoutSideType
}

export const SideAreaWrapper = styled.div<SideAreaWrapperProps>`
  grid-row: ${({ sideType }) => (sideType === LayoutSideType.SidePanel ? '2 / 3' : '1 / 3')};
  grid-column: 2;
  overflow-y: auto;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lightest']};
`
