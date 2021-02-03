/* Internal dependencies */
import { styled } from '../../foundation'

interface HeaderWrapperProps {
  showSideView: boolean
  sideWidth: number
}

export const HeaderWrapper = styled.div.attrs(({ showSideView, sideWidth }: HeaderWrapperProps) => ({
  style: {
    gridTemplateColumns: `1fr ${showSideView ? `${sideWidth}px` : 'auto'}`,
  },
}))<HeaderWrapperProps>`
  z-index: ${({ showSideView }) => (showSideView ? 40 : 50)};
  display: grid;
  grid-template-rows: 1fr;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
`

export const ContentHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`

export const CoverableHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`
