/* Internal dependencies */
import { styled } from '../../styling/Theme'

interface MainWrapperProps {
  contentMinWidth: number
  sideWidth: number
}

export const MainWrapper = styled.div.attrs(({ contentMinWidth, sideWidth }: MainWrapperProps) => ({
  style: {
    gridTemplateColumns: `minmax(${contentMinWidth}px, 1fr) ${sideWidth}px`,
  },
}))<MainWrapperProps>`
  display: grid;
  grid-template-rows: 70px 1fr;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
