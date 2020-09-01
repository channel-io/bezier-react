/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { smoothCorners } from '../../styling/Mixins'

export const StyledBaseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background: linear-gradient(deeppink, orangered);

  ${smoothCorners()};
`
