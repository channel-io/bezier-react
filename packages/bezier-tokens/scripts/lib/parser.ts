import { type Parser } from 'style-dictionary'

/**
 * Parser for W3C Design Token Community Group JSON format
 * @see {@link https://design-tokens.github.io/community-group/format/}
 */
export const dtcgTokenJsonParser: Parser = {
  pattern: /\.json$|\.tokens\.json$|\.tokens$/,
  parse: ({ contents }: { contents: string }) => {
    // replace $value with value so that style dictionary recognizes it
    const preparedContent = (contents || '{}').replace(/"\$?value"\s*:/g, '"value":')
      // convert $description to comment
      .replace(/"\$?description"\s*:/g, '"comment":')
    return JSON.parse(preparedContent)
  },
}
