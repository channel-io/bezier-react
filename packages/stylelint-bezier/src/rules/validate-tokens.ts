import { tokens } from '@channel.io/bezier-tokens'
import stylelint, { Rule } from 'stylelint'

const {
  utils: { report, ruleMessages, validateOptions },
} = stylelint

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function flattenObject(obj: object, result: Record<string, unknown> = {}) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, result)
    } else {
      result[key] = value
    }
  }
  return result
}

const allTokens = {
  ...flattenObject(tokens.global),
  ...flattenObject(tokens.lightTheme),
}

const ruleName = 'bezier/validate-tokens'

const messages = ruleMessages(ruleName, {
  rejected: (token) =>
    `Invalid token: "${token}". Only tokens from @channel.io/bezier-tokens are allowed.`,
})

const rule: Rule<boolean> = (primary, secondaryOptions = {}) => {
  return (root, result) => {
    const validOptions = validateOptions(
      result,
      ruleName,
      {
        actual: primary,
        possible: [true, false],
      },
      {
        actual: secondaryOptions,
        possible: {
          ignorePrefix: [isString],
        },
        optional: true,
      }
    )

    if (!validOptions) {
      return
    }

    const ignorePrefix = secondaryOptions.ignorePrefix || []

    root.walkDecls((decl) => {
      const { value } = decl

      if (!value.includes('var(--')) {
        return
      }

      const matches = value.match(/var\(--([^)]+)\)/)

      if (!matches) {
        return
      }

      const [, tokenName] = matches

      if (ignorePrefix.some((prefix: string) => tokenName.startsWith(prefix))) {
        return
      }

      if (!allTokens[tokenName as keyof typeof allTokens]) {
        // Token not found in the design tokens
        report({
          message: messages.rejected(tokenName),
          node: decl,
          result,
          ruleName,
        })
      }
    })
  }
}

rule.ruleName = ruleName
rule.messages = messages

export default rule
