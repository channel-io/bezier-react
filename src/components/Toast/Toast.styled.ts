/* Internal dependencies */
import { ellipsis, Foundation, styled, Transition } from '../../foundation'
import ToastElementProps, { ToastAppearance, ToastContainerProps } from './Toast.types'
import { getIconColor, getPlacement, initPosition, showedToastTranslateXStyle } from './utils'

interface IconProps {
  appearance: ToastAppearance
}

export const Container = styled.div<ToastContainerProps>`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100vh;
  padding: 16px;
  overflow: hidden;
  pointer-events: none;
  ${({ placement }) => getPlacement(placement)}
`

export const Element = styled.div<ToastElementProps>`
  @keyframes ToastAnimation {
    from {
      ${({ placement }) => initPosition(placement)}
    }

    to {
      ${showedToastTranslateXStyle}
    }
  }

  position: relative;
  z-index: 10000000;
  display: flex;
  align-items: flex-start;
  width: 288px;
  padding: 16px;
  margin-top: 6px;
  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation.ev3(true)};
  pointer-events: auto;
  background-color: ${({ foundation }) => foundation?.subTheme?.['bg-grey-lighter']};
  transition: ${({ foundation, transitionDuration }) =>
    foundation?.transition.getTransitionsCSS('transform', transitionDuration)};
  animation: ${({ transitionDuration }) => `${transitionDuration} ${Transition.TransitionEasing} 0s 1 ToastAnimation`};
  ${({ transform }) => transform}
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
  onClick: Function | undefined,
  foundation: Foundation | undefined,
) => (
  (actionContent && onClick)
    ? foundation?.subTheme?.['bgtxt-cobalt-normal']
    : foundation?.subTheme?.['txt-black-darkest']
)

export const Content = styled.div<ToastElementProps>`
  ${ellipsis(5, 18)};
  margin: 3px 6px;
  color: ${({ actionContent, onClick, foundation }) => getEllipsisColor(actionContent, onClick, foundation)};
`

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
