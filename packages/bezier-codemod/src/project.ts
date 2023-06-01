import {
  IndentationText,
  NewLineKind,
  Project,
  QuoteKind,
} from 'ts-morph'

/**
 * By default, set to the value that most closely matches the setting used by Channel team.
 * @see https://ts-morph.com/manipulation/settings#manipulation-settings
 */
const project = new Project({
  manipulationSettings: {
    indentationText: IndentationText.TwoSpaces,
    newLineKind: NewLineKind.LineFeed,
    quoteKind: QuoteKind.Single,
    usePrefixAndSuffixTextForRename: true,
    useTrailingCommas: false,
  },
})

export default project
