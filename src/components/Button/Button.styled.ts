/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { smoothCorners } from '../../styling/Mixins'

interface BaseButtonProps {
  width: number
  height: number
}

export const StyledBaseButton = styled.div<BaseButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px grey;
  outline: none;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 15px;
  background: linear-gradient(deeppink, orangered);

  ${smoothCorners()};
`
