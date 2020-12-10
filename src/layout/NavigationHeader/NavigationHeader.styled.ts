/* Internal dependencies */
import { styled } from '../../styling/Theme'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 21px 18px 18px;
  box-sizing: border-box;
  background-color: ${props => props.theme?.colors?.background1};
`

export const TitleWrapper = styled.div`
  flex: 1 1 0;
`

export const ActionWrapper = styled.div`
  flex: 1 1 0;
`
