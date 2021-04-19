/* Internal dependencies */
import { Foundation, styled } from '../../foundation'
import ToastElementProps, { Appearance, ToastContainerProps } from './Toast.types'
import { getIconColor, getPlacement } from './utils'

interface IconProps {
  appearance: Appearance
}

export const Container = styled.div<ToastContainerProps>`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100vh;
  padding: 16px 16px;
  overflow: hidden;
  pointer-events: none;
  ${({ placement }) => getPlacement(placement)}
`

export const Element = styled.div<ToastElementProps>`
  position: relative;
  z-index: 10000000;
  display: flex;
  align-items: flex-start;
  width: 288px;
  padding: 16px;
  margin-top: 6px;
  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation.ev3()};
  pointer-events: auto;
  background-color: ${({ foundation }) => foundation?.subTheme?.['bg-grey-lighter']};
  transition: ${({ foundation, transitionDuration }) =>
    foundation?.transition.getTransitionsCSS('transform', transitionDuration)};
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

export const getEllipsisColor = (
  actionContent: string | undefined,
  actionOnClick: Function | undefined,
  foundation: Foundation | undefined,
) => (
  (actionContent && actionOnClick)
    ? foundation?.subTheme?.['bgtxt-cobalt-normal']
    : foundation?.subTheme?.['txt-black-darkest']
)

/* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
export const Content = styled.div<ToastElementProps>`
  display: -webkit-box;
  margin: 3px 6px;
  overflow: hidden;
  color: ${({ actionContent, actionOnClick, foundation }) => getEllipsisColor(actionContent, actionOnClick, foundation)};
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`
/* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */

export const NormalContent = styled.div`
  display: inline;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
`

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
