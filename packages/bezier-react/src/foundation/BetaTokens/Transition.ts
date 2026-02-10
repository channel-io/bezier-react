/**
 * v3 (Beta) Transition
 *
 * main 브랜치의 packages/bezier-tokens/src/beta/global/motion.json +
 * packages/bezier-tokens/src/beta/semantic/motion.json 기반
 */

export const BetaEasing = 'cubic-bezier(0.3, 0, 0, 1)' as const

export const BetaDuration = {
  150: '150ms',
  300: '300ms',
  450: '450ms',
} as const

export const BetaTransition = {
  fast: `${BetaDuration[150]} ${BetaEasing}`,
  default: `${BetaDuration[300]} ${BetaEasing}`,
  slow: `${BetaDuration[450]} ${BetaEasing}`,
} as const
