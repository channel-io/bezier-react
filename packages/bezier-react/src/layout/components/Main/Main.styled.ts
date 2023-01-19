/* Internal dependencies */
import { styled } from '~/src/foundation'
import { CONTENT_MIN_WIDTH, HEADER_HEIGHT } from '~/src/layout/LayoutSizes'

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
  grid-template-rows: ${({ hasHeader }) => (hasHeader ? `minmax(${HEADER_HEIGHT}px, auto) 1fr` : '0 1fr')};
  width: 100%;
  height: 100%;

  /* TODO: 레이아웃 동작 다듬기, 스크롤은 좋지 않은 UX */
  overflow-x: auto;
`
