/* Internal dependencies */
import { styled, css, Typography } from '../../foundation'
import { Appearance, Placement } from './Toast.types'

const MAX_HEIGHT = `${(18 * 5)}px`

const placements = {
  topLeft: css`
    top: 0;
    left: 0;
  `,
  topCenter: css`
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  topRight: css`
    top: 0;
    right: 0;
  `,
  bottomLeft: css`
    bottom: 0;
    left: 0;
  `,
  bottomCenter: css`
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  bottomRight: css`
    right: 0;
    bottom: 0;
  `,
}

interface ToastProps {
  placement: Placement
}

interface IconProps {
  appearance: Appearance
}

export const Container = styled.div<ToastProps>`
  position: absolute;
  z-index: 1000000;
  display: flex;
  align-items: flex-start;
  width: 288px;
  padding: 16px;
  margin: 16px;
  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation.ev3()};

  background-color: ${({ foundation }) => foundation?.subTheme?.['bg-grey-lighter']};
  ${props => placements[props.placement]}
`

export const IconWrapper = styled.div<IconProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 24px;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
`

export const Content = styled.div`
  max-height: ${MAX_HEIGHT};
  margin: 3px 6px;
  overflow: hidden;
  ${Typography.Size14};
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
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
