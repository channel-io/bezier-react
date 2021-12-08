/* Internal dependencies */
import { styled, disableAutoMinimum } from 'Foundation'

export const ContentAreaWrapper = styled.div`
  position: relative;
  grid-row: 2;
  grid-column: 1;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-normal']};

  ${disableAutoMinimum}
`
