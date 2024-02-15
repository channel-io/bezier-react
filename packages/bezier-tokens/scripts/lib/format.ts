import {
  type Format,
  type Named,
  formatHelpers,
} from 'style-dictionary'

type CustomFormat = Named<Format>

const { fileHeader } = formatHelpers

export const customJsCjs: CustomFormat = {
  name: 'custom/js/cjs',
  formatter({ dictionary, file }) {
    const categorizedTokens = dictionary.allTokens.reduce((acc, token) => {
      const fileNameWithoutExtension = token.filePath.split('/').pop()!.split('.').shift()!
      acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || []
      acc[fileNameWithoutExtension].push(token)
      return acc
    }, {} as Record<string, typeof dictionary.allTokens>)

    return (
      `${fileHeader({ file })
      }module.exports = Object.freeze({` +
      `${Object.keys(categorizedTokens).map(category => (
        `\n  "${category}": Object.freeze({\n` +
          `${
            categorizedTokens[category]
              .map((token) => `    "${token.name}": ${JSON.stringify(token.value)},`)
              .join('\n')
          }\n  })`
      ))}\n` +
      '})\n'
    )
  },
}

export const customJsEsm: CustomFormat = {
  name: 'custom/js/esm',
  formatter({ dictionary, file }) {
    const categorizedTokens = dictionary.allTokens.reduce((acc, token) => {
      const fileNameWithoutExtension = token.filePath.split('/').pop()!.split('.').shift()!
      acc[fileNameWithoutExtension] = acc[fileNameWithoutExtension] || []
      acc[fileNameWithoutExtension].push(token)
      return acc
    }, {} as Record<string, typeof dictionary.allTokens>)

    return (
      `${fileHeader({ file })
      }export default Object.freeze({` +
      `${Object.keys(categorizedTokens).map(category => (
        `\n  "${category}": Object.freeze({\n` +
          `${
            categorizedTokens[category]
              .map((token) => `    "${token.name}": ${JSON.stringify(token.value)},`)
              .join('\n')
          }\n  })`
      ))}\n` +
      '})\n'
    )
  },
}
