/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { SideState } from '../Client/Client.types'

interface MainWrapperProps {
  contentMinWidth: number
  sideWidth: number
  sideState: SideState
}

export const MainWrapper = styled.div.attrs(({ contentMinWidth, sideState, sideWidth }: MainWrapperProps) => ({
  style: {
    gridTemplateColumns: sideState !== SideState.None ?
      `minmax(${contentMinWidth}px, 1fr) ${sideWidth}px`
      : `minmax(${contentMinWidth}px, 1fr)`,
  },
}))<MainWrapperProps>`
  display: grid;
  grid-template-rows: 70px 1fr;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
