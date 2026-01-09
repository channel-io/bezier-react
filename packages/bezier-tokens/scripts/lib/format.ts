import {
  type Format,
  type Named,
  type TransformedToken,
  formatHelpers,
} from 'style-dictionary'

import { getHoveredColor, shouldMakeHoveredToken } from './utils'

type CustomFormat = Named<Format>

const { fileHeader, createPropertyFormatter } = formatHelpers

export const customJsCjs: CustomFormat = {
  name: 'custom/js/cjs',
  formatter({ dictionary, file }) {
    const categorizedTokens = dictionary.allTokens.reduce(
      (acc, token) => {
        const fileNameWithoutExtension = token.filePath
          .split('/')
          .pop()!
          .split('.')
          .shift()!
        acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || []
        acc[fileNameWithoutExtension].push(token)
        return acc
      },
      {} as Record<string, typeof dictionary.allTokens>
    )

    return (
      `${fileHeader({ file })}module.exports = Object.freeze({` +
      `${Object.keys(categorizedTokens).map(
        (category) =>
          `\n  "${category}": Object.freeze({\n` +
          `${categorizedTokens[category]
            .map(
              (token) => `    "${token.name}": ${JSON.stringify(token.value)},`
            )
            .join('\n')}\n  })`
      )}\n` +
      '})\n'
    )
  },
}

export const customJsEsm: CustomFormat = {
  name: 'custom/js/esm',
  formatter({ dictionary, file }) {
    const categorizedTokens = dictionary.allTokens.reduce(
      (acc, token) => {
        const fileNameWithoutExtension = token.filePath
          .split('/')
          .pop()!
          .split('.')
          .shift()!
        acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || []
        acc[fileNameWithoutExtension].push(token)
        return acc
      },
      {} as Record<string, typeof dictionary.allTokens>
    )

    return (
      `${fileHeader({ file })}export default Object.freeze({` +
      `${Object.keys(categorizedTokens).map(
        (category) =>
          `\n  "${category}": Object.freeze({\n` +
          `${categorizedTokens[category]
            .map(
              (token) => `    "${token.name}": ${JSON.stringify(token.value)},`
            )
            .join('\n')}\n  })`
      )}\n` +
      '})\n'
    )
  },
}

/**
 * A custom formatter for adding ref information to tokens without breaking changes in the stable version.
 * TODO: Remove this formatter in the next major release.
 */
export const alphaCustomJsCjs: CustomFormat = {
  name: 'alpha/custom/js/cjs',
  formatter({ dictionary, file }) {
    const categorizedTokens = dictionary.allTokens.reduce(
      (acc, token) => {
        const fileNameWithoutExtension = token.filePath
          .split('/')
          .pop()!
          .split('.')
          .shift()!
        acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || []
        acc[fileNameWithoutExtension].push(token)
        return acc
      },
      {} as Record<string, typeof dictionary.allTokens>
    )

    return (
      `${fileHeader({ file })}module.exports = Object.freeze({` +
      `${Object.keys(categorizedTokens).map(
        (category) =>
          `\n  "${category}": Object.freeze({\n` +
          `${processTokensWithHovered(categorizedTokens[category])
            .map((token) => {
              const ref = (() => {
                if (!dictionary.usesReference(token.original.value)) {
                  return null
                }

                let value = token.value as string | number | null

                // NOTE: make sure to use `token.original.value` because
                // `token.value` is already resolved at this point.
                dictionary
                  .getReferences(token.original.value)
                  .forEach((ref) => {
                    value = value
                      ?.toString()
                      .replace(ref.value, ref.name) as string
                  })

                return value
              })()

              const valueObject = ref
                ? {
                    value: token.value,
                    ref,
                  }
                : { value: token.value }

              return `    "${token.name}": Object.freeze(${JSON.stringify(valueObject)}),`
            })
            .join('\n')}\n  })`
      )}\n` +
      '})\n'
    )
  },
}

/**
 * A custom formatter for adding ref information to tokens without breaking changes in the stable version.
 * TODO: Remove this formatter in the next major release.
 */
export const alphaCustomJsEsm: CustomFormat = {
  name: 'alpha/custom/js/esm',
  formatter({ dictionary, file }) {
    const categorizedTokens = dictionary.allTokens.reduce(
      (acc, token) => {
        const fileNameWithoutExtension = token.filePath
          .split('/')
          .pop()!
          .split('.')
          .shift()!
        acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || []
        acc[fileNameWithoutExtension].push(token)
        return acc
      },
      {} as Record<string, typeof dictionary.allTokens>
    )

    return (
      `${fileHeader({ file })}export default Object.freeze({` +
      `${Object.keys(categorizedTokens).map(
        (category) =>
          `\n  "${category}": Object.freeze({\n` +
          `${processTokensWithHovered(categorizedTokens[category])
            .map((token) => {
              const ref = (() => {
                if (!dictionary.usesReference(token.original.value)) {
                  return null
                }

                let value = token.value as string | number | null

                // NOTE: make sure to use `token.original.value` because
                // `token.value` is already resolved at this point.
                dictionary
                  .getReferences(token.original.value)
                  .forEach((ref) => {
                    value = value
                      ?.toString()
                      .replace(ref.value, ref.name) as string
                  })

                return value
              })()

              const valueObject = ref
                ? {
                    value: token.value,
                    ref,
                  }
                : { value: token.value }

              return `    "${token.name}": Object.freeze(${JSON.stringify(valueObject)}),`
            })
            .join('\n')}\n  })`
      )}\n` +
      '})\n'
    )
  },
}

export const alphaCustomCss: CustomFormat = {
  name: 'alpha/custom/css',
  formatter({ dictionary, options }) {
    const propertyFormatter = createPropertyFormatter({
      outputReferences: options.outputReferences,
      dictionary,
      format: 'css',
    })

    const formattedResult = processTokensWithHovered(dictionary.allTokens)
      .map(propertyFormatter)
      .join('\n')

    return `${options.selector} {\n` + formattedResult + `\n}\n`
  },
}

/**
 * A custom formatter for adding ref information to tokens for beta version.
 * TODO: Remove this formatter in the next major release.
 */
export const betaCustomJsCjs: CustomFormat = {
  name: 'beta/custom/js/cjs',
  formatter({ dictionary, file }) {
    const categorizedTokens = dictionary.allTokens.reduce(
      (acc, token) => {
        const fileNameWithoutExtension = token.filePath
          .split('/')
          .pop()!
          .split('.')
          .shift()!
        acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || []
        acc[fileNameWithoutExtension].push(token)
        return acc
      },
      {} as Record<string, typeof dictionary.allTokens>
    )

    return (
      `${fileHeader({ file })}module.exports = Object.freeze({` +
      `${Object.keys(categorizedTokens).map(
        (category) =>
          `\n  "${category}": Object.freeze({\n` +
          `${processTokensWithHovered(categorizedTokens[category])
            .map((token) => {
              const ref = (() => {
                if (!dictionary.usesReference(token.original.value)) {
                  return null
                }

                let value = token.value as string | number | null

                // NOTE: make sure to use `token.original.value` because
                // `token.value` is already resolved at this point.
                dictionary
                  .getReferences(token.original.value)
                  .forEach((ref) => {
                    value = value
                      ?.toString()
                      .replace(ref.value, ref.name) as string
                  })

                return value
              })()

              const valueObject = ref
                ? {
                    value: token.value,
                    ref,
                  }
                : { value: token.value }

              return `    "${token.name}": Object.freeze(${JSON.stringify(valueObject)}),`
            })
            .join('\n')}\n  })`
      )}\n` +
      '})\n'
    )
  },
}

/**
 * A custom formatter for adding ref information to tokens for beta version.
 * TODO: Remove this formatter in the next major release.
 */
export const betaCustomJsEsm: CustomFormat = {
  name: 'beta/custom/js/esm',
  formatter({ dictionary, file }) {
    const categorizedTokens = dictionary.allTokens.reduce(
      (acc, token) => {
        const fileNameWithoutExtension = token.filePath
          .split('/')
          .pop()!
          .split('.')
          .shift()!
        acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || []
        acc[fileNameWithoutExtension].push(token)
        return acc
      },
      {} as Record<string, typeof dictionary.allTokens>
    )

    return (
      `${fileHeader({ file })}export default Object.freeze({` +
      `${Object.keys(categorizedTokens).map(
        (category) =>
          `\n  "${category}": Object.freeze({\n` +
          `${processTokensWithHovered(categorizedTokens[category])
            .map((token) => {
              const ref = (() => {
                if (!dictionary.usesReference(token.original.value)) {
                  return null
                }

                let value = token.value as string | number | null

                // NOTE: make sure to use `token.original.value` because
                // `token.value` is already resolved at this point.
                dictionary
                  .getReferences(token.original.value)
                  .forEach((ref) => {
                    value = value
                      ?.toString()
                      .replace(ref.value, ref.name) as string
                  })

                return value
              })()

              const valueObject = ref
                ? {
                    value: token.value,
                    ref,
                  }
                : { value: token.value }

              return `    "${token.name}": Object.freeze(${JSON.stringify(valueObject)}),`
            })
            .join('\n')}\n  })`
      )}\n` +
      '})\n'
    )
  },
}

export const betaCustomCss: CustomFormat = {
  name: 'beta/custom/css',
  formatter({ dictionary, options }) {
    const propertyFormatter = createPropertyFormatter({
      outputReferences: options.outputReferences,
      dictionary,
      format: 'css',
    })

    const formattedResult = processTokensWithHovered(dictionary.allTokens)
      .map(propertyFormatter)
      .join('\n')

    const selector = options.selector as string

    return `${selector} {\n${formattedResult}\n}\n`
  },
}

function getHoveredColorToken(token: TransformedToken): TransformedToken {
  const theme = token.filePath.includes('dark') ? 'dark' : 'light'
  return {
    ...token,
    original: {
      ...token.original,
      value: null,
    },
    name: `${token.name}-hovered`,
    value: getHoveredColor(token.value, theme),
  }
}

function processTokensWithHovered(tokens: TransformedToken[]) {
  return tokens.flatMap((token) =>
    shouldMakeHoveredToken(token) ? [token, getHoveredColorToken(token)] : token
  )
}
