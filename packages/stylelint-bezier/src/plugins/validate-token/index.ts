import { tokens } from '@channel.io/bezier-tokens'
import { tokens as alphaTokens } from '@channel.io/bezier-tokens/alpha'
import { tokens as betaTokens } from '@channel.io/bezier-tokens/beta'
import stylelint, { type Rule } from 'stylelint'

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (value as any).value !== undefined &&
      !Array.isArray(value)
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result[key] = (value as any).value
    } else if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value)
    ) {
      flattenAlphaToken(value, result)
    }
  }

  return result
}

function flattenBetaToken(obj: object, result: Record<string, unknown> = {}) {
  for (const [key, value] of Object.entries(obj)) {
    if (
      typeof value === 'object' &&
      value !== null &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (value as any).value !== undefined &&
      !Array.isArray(value)
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result[key] = (value as any).value
    } else if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value)
    ) {
      flattenBetaToken(value, result)
    }
  }

  return result
}

const allTokens = {
  ...flattenObject(tokens.global),
  ...flattenObject(tokens.lightTheme),
  ...flattenAlphaToken(alphaTokens.global),
  ...flattenAlphaToken(alphaTokens.lightTheme),
  ...flattenBetaToken(betaTokens.global),
  ...flattenBetaToken(betaTokens.lightTheme),
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

      const hasTemplateLiteral = tokenName.includes('${')

      if (hasTemplateLiteral) {
        return
      }

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
