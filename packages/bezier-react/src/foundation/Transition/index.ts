/* Internal dependencies */
import { isArray } from '~/src/utils/typeUtils'
// eslint-disable-next-line no-restricted-imports
import { css } from '../FoundationStyledComponent'

export enum TransitionDuration {
  S = 150,
  M = 300,
  L = 500,
}

const TransitionEasing = 'cubic-bezier(.3,0,0,1)'

function getTransitionsCSS(
  transitionProperties: string | string[],
  duration: TransitionDuration = TransitionDuration.S,
  delay: number = 0,
) {
  const properties = (
    isArray(transitionProperties)
      ? transitionProperties.join(', ')
      : transitionProperties
  )

  return css`
    transition-delay: ${delay}ms;
    transition-timing-function: ${TransitionEasing};
    transition-duration: ${duration}ms;
    transition-property: ${properties};
  `
}

export const Transition = {
  TransitionEasing,
  TransitionDuration,
  getTransitionsCSS,
}
