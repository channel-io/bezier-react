/* Internal dependencies */
import { css } from '../FoundationStyledComponent'

enum TransitionDuration {
  S = '150ms',
  M = '300ms',
  L = '500ms',
}

const TransitionEasing = 'cubic-bezier(.3,0,0,1)'

function getTransitionCSS(
  transitionProperties: string | string[],
  duration: TransitionDuration = TransitionDuration.S,
) {
  const properties = (
    Array.isArray(transitionProperties)
      ? transitionProperties.join(', ')
      : transitionProperties
  )

  return css`
    transition-property: ${properties};
    transition-duration: ${duration};
    transition-timing-function: ${TransitionEasing};
  `
}

export const Transition = {
  TransitionEasing,
  TransitionDuration,
  getTransitionCSS,
}
