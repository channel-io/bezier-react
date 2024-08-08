import { tokens } from '@channel.io/bezier-tokens'
import { tokens as alphaTokens } from '@channel.io/bezier-tokens/alpha'
import stylelint, { Rule } from 'stylelint'

const {
  utils: { report, ruleMessages, validateOptions },
  createPlugin,
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

function flattenAlphaToken(obj: object, result: Record<string, unknown> = {}) {
  for (const [key, value] of Object.entries(obj)) {
    if (
      typeof value === 'object' &&
      value !== null &&
      value.value !== undefined &&
      !Array.isArray(value)
    ) {
      result[key] = value.value
    } else if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value)
    ) {
      flattenAlphaToken(value, result)
    } else {
      result[key] = value.value
    }
  }
  return result
}

const allTokens = {
  ...flattenObject(tokens.global),
  ...flattenObject(tokens.lightTheme),
  ...flattenAlphaToken(alphaTokens.global),
  ...flattenAlphaToken(alphaTokens.lightTheme),
}

const ruleName = 'bezier/validate-token'

const messages = ruleMessages(ruleName, {
  rejected: (token) =>
    `Invalid token: "${token}". Only tokens from @channel.io/bezier-tokens are allowed.`,
})

const pluginRule: Rule<boolean> = (primary, secondaryOptions = {}) => {
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

      if (allTokens[tokenName as keyof typeof allTokens] === undefined) {
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

pluginRule.ruleName = ruleName
pluginRule.messages = messages

// @ts-ignore
const { rule } = createPlugin(ruleName, pluginRule)

export { ruleName, messages, rule }
