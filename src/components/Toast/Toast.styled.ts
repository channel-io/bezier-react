/* Internal dependencies */
import { styled, Typography } from '../../foundation'
import { Appearance } from './Toast.types'
import { getIconColor } from './utils'

const MAX_HEIGHT = `${(18 * 5)}px`

interface ToastProps {
  positionX: string
  positionY: string
  transitionDuration: number
}

interface IconProps {
  appearance: Appearance
}

export const Container = styled.div<ToastProps>`
  position: relative;
  z-index: 10000000000;
  display: flex;
  align-items: flex-start;
  width: 288px;
  padding: 16px;
  margin: 16px;
  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation.ev3()};
  pointer-events: auto;
  background-color: ${({ foundation }) => foundation?.subTheme?.['bg-grey-lighter']};
  transition-duration: ${({ transitionDuration }) => transitionDuration / 1000}s;
  transform: translate(${({ positionX, positionY }) => `${positionX}, ${positionY}`});
`

export const IconWrapper = styled.div<IconProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 24px;
  color: ${({ foundation, appearance }) => foundation?.subTheme?.[getIconColor(appearance)]};
`

/* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
export const Content = styled.div`
  display: -webkit-box;
  max-height: ${MAX_HEIGHT};
  margin: 3px 6px;
  overflow: hidden;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  ${Typography.Size14};
`
/* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */

export const ActionContent = styled.div`
  display: inline;
  color: ${({ foundation }) => foundation?.subTheme?.['bgtxt-cobalt-normal']};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Close = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: auto;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darker']};
  cursor: pointer;
  background-color: ${({ foundation }) => foundation?.subTheme?.['bg-black-lighter']};
  border-radius: 12px;

  &:hover {
    color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
    background-color: ${({ foundation }) => foundation?.subTheme?.['bg-black-light']};
  }
`
