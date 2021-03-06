/* Internal dependencies */
import { styled } from '../../foundation'

export const ContentAreaWrapper = styled.div`
  position: relative;
  grid-row: 2;
  grid-column: 1;
  overflow-y: auto;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-normal']};
`
