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
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);
  outline: none;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 36%;
  background-color: white;
  box-sizing: content-box;
  background-image: url('https://picsum.photos/200/300.jpg');

  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${smoothCorners({
    shadow: '0 0 0px 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    backgroundImage: 'https://picsum.photos/200/300.jpg',
    shadowBlur: 15,
  })};
`

export const Div2 = styled.div<DivProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 15px 35px 0 rgba(255, 125, 0, 0.65);
  outline: none;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 36%;
  background-color: orange;
  box-sizing: content-box;
  margin: 35px;

  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${smoothCorners({
    shadow: '0 0 0px 3px rgba(0, 0, 0, 0.1), 0 15px 35px 0 rgba(255, 125, 0, 0.65)',
    backgroundColor: 'orange',
    shadowBlur: 25,
    margin: 35,
  })};
`

export const Div3 = styled.div<DivProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);
  outline: none;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 36%;
  background-color: white;
  box-sizing: content-box;

  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${smoothCorners({
    shadow: '0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    shadowBlur: 15,
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
  border-radius: 36%;
  background-color: white;
  box-sizing: content-box;

  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${smoothCorners({
    shadow: '0 0 0 5px rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
  })};
`
