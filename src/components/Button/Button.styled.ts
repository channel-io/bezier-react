/* Internal dependencies */
import { styled } from '../../foundation'

interface BaseButtonProps {
  width: number
  height: number
}

export const StyledBaseButton = styled.div<BaseButtonProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: white;
  border-radius: 15px;
  outline: none;
  box-shadow: 0 0 1px 10px black, 0 10px 10px black;
`
