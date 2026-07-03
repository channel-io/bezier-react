import { tokens } from '@channel.io/bezier-tokens'
import stylelint, { type Rule } from 'stylelint'

const {
  utils: { report, ruleMessages, validateOptions },
  createPlugin,
} = stylelint

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function flattenToken(obj: object, result: Record<string, unknown> = {}) {
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
      flattenToken(value, result)
    }
  }

  return result
}

interface TokenMetadata {
  value: unknown
  deprecated?: boolean | string
}

function isTokenMetadata(value: unknown): value is TokenMetadata {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    'value' in value
  )
}

function flattenDeprecatedToken(
  obj: object,
  result: Record<string, boolean | string> = {}
) {
  for (const [key, value] of Object.entries(obj)) {
    if (isTokenMetadata(value)) {
      if (value.deprecated !== undefined) {
        result[key] = value.deprecated
      }
    } else if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value)
    ) {
      flattenDeprecatedToken(value, result)
    }
  }

  return result
}

const allTokens = {
  ...flattenToken(tokens.global),
  ...flattenToken(tokens.lightTheme),
}

const deprecatedTokens = {
  ...flattenDeprecatedToken(tokens.global),
  ...flattenDeprecatedToken(tokens.lightTheme),
}

const ruleName = 'bezier/validate-token'

const messages = ruleMessages(ruleName, {
  rejected: (token) =>
    `Invalid token: "${token}". Only tokens from @channel.io/bezier-tokens are allowed.`,
  deprecated: (token, reason) =>
    reason === true
      ? `Deprecated token: "${token}". Use a replacement token instead.`
      : `Deprecated token: "${token}". ${reason}`,
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

      const matches = value.matchAll(/var\(--([^)]+)\)/g)

      for (const match of matches) {
        const [, tokenNameWithFallback] = match
        const tokenName = tokenNameWithFallback.split(',')[0].trim()

        const hasTemplateLiteral = tokenName.includes('${')

        if (hasTemplateLiteral) {
          continue
        }

        if (
          ignorePrefix.some((prefix: string) => tokenName.startsWith(prefix))
        ) {
          continue
        }

        if (allTokens[tokenName as keyof typeof allTokens] === undefined) {
          // Token not found in the design tokens
          report({
            message: messages.rejected(tokenName),
            node: decl,
            result,
            ruleName,
          })
          continue
        }

        const deprecatedReason =
          deprecatedTokens[tokenName as keyof typeof deprecatedTokens]

        if (deprecatedReason !== undefined) {
          report({
            message: messages.deprecated(tokenName, deprecatedReason),
            node: decl,
            result,
            ruleName,
            severity: 'warning',
          })
        }
      }
    })
  }
}

pluginRule.ruleName = ruleName
pluginRule.messages = messages

// @ts-ignore
const { rule } = createPlugin(ruleName, pluginRule)

export { ruleName, messages, rule }
