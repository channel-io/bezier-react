/* Internal dependencies */
import { CONTENT_MIN_WIDTH } from '../../constants/LayoutSizes'
import { styled } from '../../foundation'

interface MainWrapperProps {
  hasSide: boolean
  hasHeader: boolean
  sideWidth: number
}

export const MainWrapper = styled.div.attrs(({ hasSide, sideWidth }: MainWrapperProps) => ({
  style: {
    gridTemplateColumns: hasSide ?
      `minmax(${CONTENT_MIN_WIDTH}px, 1fr) ${sideWidth}px`
      : `minmax(${CONTENT_MIN_WIDTH}px, 1fr)`,
  },
}))<MainWrapperProps>`
  display: grid;
  grid-template-rows: ${({ hasHeader }) => (hasHeader ? '70px 1fr' : '0 1fr')};
  width: 100%;
  height: 100%;
  overflow: hidden;
`
