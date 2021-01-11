/* Internal dependencies */
import { CONTENT_MIN_WIDTH } from '../../constants/LayoutSizes'
import { styled } from '../../styling/Theme'
import { SideState } from '../Client/Client.types'

interface MainWrapperProps {
  sideWidth: number
  sideState: SideState
}

export const MainWrapper = styled.div.attrs(({ sideState, sideWidth }: MainWrapperProps) => ({
  style: {
    gridTemplateColumns: sideState !== SideState.None ?
      `minmax(${CONTENT_MIN_WIDTH}px, 1fr) ${sideWidth}px`
      : `minmax(${CONTENT_MIN_WIDTH}px, 1fr)`,
  },
}))<MainWrapperProps>`
  display: grid;
  grid-template-rows: 70px 1fr;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
