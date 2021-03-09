/* Internal dependencies */
import { styled, disableAutoMinimum } from '../../foundation'

interface HeaderWrapperProps {
  showSideView: boolean
  sideWidth: number
}

export const HeaderWrapper = styled.div.attrs(({ showSideView, sideWidth }: HeaderWrapperProps) => ({
  style: {
    gridTemplateColumns: `minmax(0, 1fr) ${showSideView ? `${sideWidth}px` : 'auto'}`,
  },
}))<HeaderWrapperProps>`
  display: grid;
  grid-template-rows: 1fr;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-header']};
  border-bottom: 1px solid ${({ foundation }) => foundation?.theme?.['bdr-black-light']};

  ${disableAutoMinimum}
`

export const ContentHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;

  ${disableAutoMinimum}
`

export const CoverableHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;

  ${disableAutoMinimum}
`
