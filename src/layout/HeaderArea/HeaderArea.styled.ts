/* Internal dependencies */
import { styled } from '../../styling/Theme'

interface HeaderWrapperProps {
  showSideView: boolean
  sideWidth: number
}

export const HeaderWrapper = styled.div.attrs(({ showSideView, sideWidth }: HeaderWrapperProps) => ({
  style: {
    gridTemplateColumns: `1fr ${showSideView ? `${sideWidth}px` : 'auto'}`,
  },
}))<HeaderWrapperProps>`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-rows: 1fr;
  z-index: ${({ showSideView }) => (showSideView ? 40 : 50)};
`

export const LeftHeader = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

export const RightHeader = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`
