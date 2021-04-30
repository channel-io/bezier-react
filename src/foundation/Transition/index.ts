/* Internal dependencies */
import { css } from '../FoundationStyledComponent'

export enum TransitionDuration {
  S = '150ms',
  M = '300ms',
  L = '500ms',
}

const TransitionEasing = 'cubic-bezier(.3,0,0,1)'

function getTransitionsCSS(
  transitionProperties: string | string[],
  duration: TransitionDuration = TransitionDuration.S,
  delay: number = 0,
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
    transition-delay: ${delay}ms;
  `
}

export const Transition = {
  TransitionEasing,
  TransitionDuration,
  getTransitionsCSS,
}
