import { type Format, type Named, formatHelpers } from 'style-dictionary'

import { getHoveredColorToken } from './utils'

type CustomFormat = Named<Format>

const { fileHeader } = formatHelpers

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
          `${categorizedTokens[category]
            .flatMap((token) => {
              if (category !== 'color') {
                return [token]
              } else {
                return [token, getHoveredColorToken(token)]
              }
            })
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
          `${categorizedTokens[category]
            .flatMap((token) => {
              if (category !== 'color') {
                return [token]
              } else {
                return [token, getHoveredColorToken(token)]
              }
            })
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
