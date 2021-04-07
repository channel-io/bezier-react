/* Internal dependencies */
import { styled, smoothCorners } from '../../foundation'

interface DivProps {
  width: number
  height: number
}

export const Div = styled.div<DivProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: white;
  background-image: url('https://picsum.photos/200/300.jpg');
  border-radius: 36%;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);

  ${smoothCorners({
    shadow: '0 0 0px 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    backgroundImage: 'https://picsum.photos/200/300.jpg',
    shadowBlur: 15,
    borderRadius: '42%',
  })};
`
export const Div50 = styled.div<DivProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: white;
  background-image: url('https://picsum.photos/200/300.jpg');
  background-position: center;
  background-size: contain;
  border-radius: 42px;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);
`

export const Div2 = styled.div<DivProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 35px;
  background-color: orange;
  border-radius: 36%;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 15px 35px 0 rgba(255, 125, 0, 0.65);

  ${smoothCorners({
    shadow: '0 0 0px 3px rgba(0, 0, 0, 0.1), 0 15px 35px 0 rgba(255, 125, 0, 0.65)',
    backgroundColor: 'orange',
    borderRadius: '36%',
    shadowBlur: 25,
    margin: 35,
  })};
`

export const Div3 = styled.div<DivProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: white;
  border-radius: 36%;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);

  ${smoothCorners({
    shadow: '0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    shadowBlur: 15,
    borderRadius: '36%',
  })};
`
