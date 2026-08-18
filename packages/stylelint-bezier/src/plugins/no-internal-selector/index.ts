import { booleanPlugin, report } from '../utils'

export const ruleName = 'bezier/no-internal-selector'
export const messages = {
  rejected:
    'BZR-API-003: Bezier internal data-testid is not public API. Use a public prop, slot, or consumer-owned wrapper.',
}

export const rule = booleanPlugin(
  ruleName,
  messages.rejected,
  (root, result, message) => {
    root.walkRules((cssRule) => {
      const match = cssRule.selector.match(
        /\[data-testid\s*(?:=|\^=|\|=)\s*["']?bezier-/iu
      )
      if (match) report(result, ruleName, message, cssRule, match[0])
    })
  }
)
