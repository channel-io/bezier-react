/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { smoothCorners } from '../../styling/Mixins'

interface DivProps {
  width: number
  height: number
}

export const Div = styled.div<DivProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 1px 10px black, 0 10px 10px black;
  outline: none;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 15px;
  background-color: white;
  box-sizing: content-box;

  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${smoothCorners({
    shadow: '0 0 0 5px rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
  })};
`

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 1px 10px black, 0 10px 10px black;
  outline: none;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 15px;
  background-color: white;
  box-sizing: content-box;

  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${smoothCorners({
    shadow: '0 0 0 5px rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
  })};
`
