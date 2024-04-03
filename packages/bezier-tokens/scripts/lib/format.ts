import { type Format, type Named, formatHelpers } from 'style-dictionary'

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

export const customJson: CustomFormat = {
  name: 'custom/json',
  formatter({ dictionary }) {
    return JSON.stringify(
      dictionary.allTokens.reduce(
        (acc, token) => {
          const fileNameWithoutExtension = token.filePath
            .split('/')
            .pop()!
            .split('.')
            .shift()!

          acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || {}

          const ref = (() => {
            if (!dictionary.usesReference(token.original.value)) {
              return null
            }

            let value = token.value as string | number | null

            // NOTE: make sure to use `token.original.value` because
            // `token.value` is already resolved at this point.
            dictionary.getReferences(token.original.value).forEach((ref) => {
              value =
                typeof value === 'string'
                  ? value.replace(ref.value, ref.name)
                  : null
            })

            return value
          })()

          acc[fileNameWithoutExtension][token.name] = {
            value: token.value,
            ref,
          }
          return acc
        },
        {} as Record<string, Record<string, unknown>>
      ),
      undefined,
      2
    )
  },
}
