/* Internal dependencies */
import { ellipsis, Foundation, styled, Transition } from '../../foundation'
import ToastElementProps, { ToastAppearance, ToastContainerProps, ToastPlacement } from './Toast.types'
import { getIconColor, getPlacement, initPosition, showedToastTranslateXStyle } from './utils'

const TOAST_DEFAULT_ZINDEX = Number.MAX_SAFE_INTEGER

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

interface StyledToastProps extends Pick<ToastElementProps,
| 'transform'
| 'transitionDuration'
| 'placement'
| 'zIndex'
>{}

export const Element = styled.div<StyledToastProps>`
  @keyframes ToastAnimationLeft {
    from {
      ${initPosition(ToastPlacement.BottomLeft)}
    }

    to {
      ${showedToastTranslateXStyle}
    }
  }

  @keyframes ToastAnimationRight {
    from {
      ${initPosition(ToastPlacement.BottomRight)}
    }

    to {
      ${showedToastTranslateXStyle}
    }
  }

  position: relative;
  z-index: ${({ zIndex }) => zIndex ?? TOAST_DEFAULT_ZINDEX};
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
  animation: ${({ transitionDuration, placement }) => `
    ${transitionDuration}ms
    ${Transition.TransitionEasing}
    0s
    1
    ${placement === ToastPlacement.BottomLeft ? 'ToastAnimationLeft' : 'ToastAnimationRight'}
  `};
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

const getEllipsisColor = (
  actionContent: string | undefined,
  onClick: Function | undefined,
  foundation: Foundation | undefined,
) => (
  (actionContent && onClick)
    ? foundation?.subTheme?.['bgtxt-cobalt-normal']
    : foundation?.subTheme?.['txt-black-darkest']
)

export const Content = styled.div<Pick<ToastElementProps, 'actionContent' | 'onClick'>>`
  margin: 3px 6px;
  overflow: hidden;
  color: ${({ actionContent, onClick, foundation }) => getEllipsisColor(actionContent, onClick, foundation)};
`

export const EllipsisableContent = styled.div`
  ${ellipsis(5, 18)};

  overflow: visible;
  word-break: break-word;
`

export const NormalContent = styled.span`
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
`

export const ActionContent = styled.span`
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
