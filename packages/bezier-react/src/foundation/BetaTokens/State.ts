/**
 * v3 (Beta) State
 *
 * main 브랜치의 packages/bezier-tokens/src/beta/semantic/state.json 기반
 * 색상은 ThemeVars로 주입되는 CSS variable 참조
 */

const elevationBase = 'var(--color-elevation-base)'
const stateAction = 'var(--color-state-action)'
const stateActionLight = 'var(--color-state-action-light)'
const stateWarning = 'var(--color-state-warning)'
const stateWarningLight = 'var(--color-state-warning-light)'
const stateDefault = 'var(--color-state-default)'

export const BetaState = {
  error: `0 0 0 1px ${stateWarning}`,
  active: `0 0 0 1px ${stateAction}`,
  'input-default': `0 1px 2px 0 ${elevationBase}, inset 0 0 0 1px ${stateDefault}`,
  'input-hovered': `0 2px 6px 0 ${elevationBase}, inset 0 0 0 1px ${stateAction}`,
  'input-active': `0 2px 6px 0 ${elevationBase}, 0 0 0 3px ${stateActionLight}, inset 0 0 0 1px ${stateAction}`,
  'input-error': `0 2px 6px 0 ${elevationBase}, 0 0 0 3px ${stateWarningLight}, inset 0 0 0 1px ${stateWarning}`,
} as const

