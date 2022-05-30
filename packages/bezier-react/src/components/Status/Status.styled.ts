/* Internal dependencies */
import { styled, absoluteCenter, SemanticNames } from 'Foundation'
import { LockIcon as BaseLockIcon, MoonFilledIcon as BaseMoonFilledIcon } from 'Components/Icon/generated'
import { StatusSize } from './Status.types'

function getStatusCircleBorderSize(size: StatusSize) {
  if (size >= StatusSize.L) { return 3 }
  return 2
}

interface StatusCircleProps {
  color: SemanticNames
  size: StatusSize
}

export const StatusCircle = styled.div<StatusCircleProps>`
  ${({ foundation, size }) => foundation?.border?.getBorder(
    getStatusCircleBorderSize(size),
    foundation?.theme?.['bg-white-high'],
  )};

  position: relative;
  box-sizing: content-box;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-white-high']};
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    content: '';
    background-color: ${({ foundation, color = 'bg-white-high' }) => foundation?.theme?.[color]};
    border-radius: 50%;
  }
`

export const LockIcon = styled(BaseLockIcon)`
  ${absoluteCenter('')}
  z-index: 1;
`

export const MoonFilledIcon = styled(BaseMoonFilledIcon)`
  ${absoluteCenter('')}
  z-index: 1;
`
