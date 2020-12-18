/* Internal dependencies */
import { styled } from '../../styling/Theme'

const Div = styled.div`
  border: 1px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: flex;
  flex-direction: colunmn;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`

export const ContentAreaWrapper = styled(Div)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  position: relative;
`

export const StyledHandle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -8px;
  z-index: 10000;
  width: 16px;
  height: 100%;
  margin: 0 auto;
  cursor: col-resize;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7px;
    width: 2px;
    height: 100%;
    opacity: 0;
    background-color: ${props => props.theme?.colors?.background3};
    transition: opacity 0.2s;
  }

  &:hover::before {
    opacity: 1;
  }
`
