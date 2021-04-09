/* Internal denpendencies */
import { styled, absoluteCenter } from '../../foundation'
import { ThemeKey } from '../../foundation/Theme/ThemeType'
import { Icon } from '../Icon'

const STATUS_CIRCLE_SIZE = 8
const STATUS_CIRCLE_BORDER_WIDTH = 2

interface StatusCircleProps {
  color: ThemeKey
}

export const StatusCircle = styled.div<StatusCircleProps>`
  position: relative;
  width: ${STATUS_CIRCLE_SIZE}px;
  height: ${STATUS_CIRCLE_SIZE}px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-normal']};
  border: ${STATUS_CIRCLE_BORDER_WIDTH}px solid ${({ foundation }) => foundation?.theme?.['bdr-white']};
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

export const PrivateIcon = styled(Icon)`
  ${absoluteCenter('')}
  z-index: 1;
`
