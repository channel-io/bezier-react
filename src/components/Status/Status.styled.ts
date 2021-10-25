/* Internal denpendencies */
import { styled, absoluteCenter } from '../../foundation'
import { SemanticNames } from '../../foundation/Colors/Theme'
import { Icon } from '../Icon'

const STATUS_CIRCLE_SIZE = 8
const STATUS_CIRCLE_BORDER_WIDTH = 2

interface StatusCircleProps {
  color: SemanticNames
}

export const StatusCircle = styled.div<StatusCircleProps>`
  ${({ foundation }) => foundation?.border?.getBorder(STATUS_CIRCLE_BORDER_WIDTH, foundation?.theme?.['bdr-white'])};

  position: relative;
  box-sizing: content-box;
  width: ${STATUS_CIRCLE_SIZE}px;
  height: ${STATUS_CIRCLE_SIZE}px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-normal']};
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: ${STATUS_CIRCLE_SIZE}px;
    height: ${STATUS_CIRCLE_SIZE}px;
    content: '';
    background-color: ${({ foundation, color = 'bg-white-normal' }) => foundation?.theme?.[color]};
    border-radius: 50%;
  }
`

export const LockIcon = styled(Icon)`
  ${absoluteCenter('')}
  z-index: 1;
`
