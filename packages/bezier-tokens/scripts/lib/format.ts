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
    return (
      `${fileHeader({ file })
      }module.exports = {` +
      `\n${
        dictionary.allTokens
          .map((token) => `  "${token.name}": ${JSON.stringify(token.value)},`)
          .join('\n')
      }\n` +
      '}'
    )
  },
}

export const customJsEsm: CustomFormat = {
  name: 'custom/js/esm',
  formatter({ dictionary, file }) {
    return (
      `${fileHeader({ file })
      }export default {` +
      `\n${
        dictionary.allTokens
          .map((token) => `  "${token.name}": ${JSON.stringify(token.value)},`)
          .join('\n')
      }\n` +
      '}'
    )
  },
}
