/* Internal dependencies */
import { styled } from '../../foundation'

interface BaseButtonProps {
  width: number
  height: number
}

export const StyledBaseButton = styled.div<BaseButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 1px 10px black, 0 10px 10px black;
  outline: none;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 15px;
  background-color: white;
  box-sizing: content-box;
`
