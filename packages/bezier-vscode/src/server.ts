import { tokens } from '@channel.io/bezier-tokens'
import { tokens as alphaTokens } from '@channel.io/bezier-tokens/alpha'
import {
  type CompletionItem,
  CompletionItemKind,
  type InitializeResult,
  ProposedFeatures,
  type TextDocumentPositionParams,
  TextDocumentSyncKind,
  TextDocuments,
  createConnection,
} from 'vscode-languageserver/node'
import { TextDocument } from 'vscode-languageserver-textdocument'

import { deepMerge, hexToRGBA } from './utils'

type TokenValue = string | number
type AlphaTokenValue = Record<string, string | number>
type TokenMap = Record<string, Record<string, TokenValue | AlphaTokenValue>>

const assignToTokenMap = (
  target: TokenMap,
  source: TokenMap,
  transformValue: (v: TokenValue | AlphaTokenValue) => TokenValue = (v) =>
    v as TokenValue
) => {
  Object.entries(source).forEach(([category, tokenObject]) => {
    if (target[category] === undefined) {
      target[category] = {}
    }
    Object.entries(tokenObject).forEach(([name, value]) => {
      target[category][name] = transformValue(value)
    })
  })
}

const alphaTokenMap = {} as TokenMap
const tokenMap = {} as TokenMap

assignToTokenMap(
  alphaTokenMap,
  alphaTokens.lightTheme,
  (v) => (v as AlphaTokenValue).value
)
assignToTokenMap(
  alphaTokenMap,
  alphaTokens.global,
  (v) => (v as AlphaTokenValue).value
)
assignToTokenMap(tokenMap, tokens.lightTheme)
assignToTokenMap(tokenMap, tokens.global)

const allTokenMap = deepMerge(alphaTokenMap, tokenMap) as Record<
  | keyof typeof alphaTokens.global
  | keyof typeof alphaTokens.lightTheme
  | keyof typeof tokens.global
  | keyof typeof tokens.lightTheme,
  Record<string, string>
>

type TokenGroup = keyof typeof allTokenMap

const completionItemsByTokenGroup = Object.fromEntries(
  Object.entries(allTokenMap).map(([groupName, tokenKeyValues]) => {
    const completionItems: CompletionItem[] = Object.entries(
      tokenKeyValues
    ).map(([key, value]) => ({
      label: key,
      insertText: `var(--${key})`,
      // RGBA conversion to display color preview in suggestion item
      detail: groupName === 'color' ? hexToRGBA(value) : String(value),
      kind:
        groupName === 'color'
          ? CompletionItemKind.Color
          : CompletionItemKind.Variable,
    }))
    return [groupName, completionItems]
  })
) as Record<TokenGroup, CompletionItem[]>

const tokenGroupPatterns = {
  radius: /border-radius:/,
  color: /color:|background:|border(?!-radius):|outline:|background-color:/,
  elevation: /box-shadow:/,
  input: /box-shadow:/,
  typography: /font:|letter-spacing|line-height:/,
  font: /font:|letter-spacing:|line-height:/,
  transition: /transition:/,
  opacity: /opacity:/,
  shadow: /box-shadow:/,
  gradient: /background:|background-image:/,
  'z-index': /z-index:/,
  // NOTE: (@ed) `source-size` is used in the internal component
  // so we don't need to suggest it
} satisfies Record<Exclude<TokenGroup, 'source-size'>, RegExp>

const allCompletionItems = Object.values(completionItemsByTokenGroup).flat()

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all)

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument)

connection.onInitialize(() => {
  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      // Tell the client that this server supports code completion.
      // code completion is not supported if completionProvider is undefined
      completionProvider: {},
    },
  }

  return result
})

const hasMatchingPattern = (currentText: string): boolean => {
  return Object.values(tokenGroupPatterns).some((pattern) =>
    pattern.test(currentText)
  )
}

const getMatchedCompletionItems = (currentText: string): CompletionItem[] => {
  if (!hasMatchingPattern(currentText)) {
    return []
  }

  return Object.entries(tokenGroupPatterns)
    .filter(([_, pattern]) => pattern.test(currentText))
    .flatMap(
      ([tokenGroupName]) =>
        completionItemsByTokenGroup[
          tokenGroupName as keyof typeof tokenGroupPatterns
        ] ?? []
    )
}

// // This handler provides the initial list of the completion items.
connection.onCompletion(
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    const doc = documents.get(_textDocumentPosition.textDocument.uri)

    // if the doc can't be found, return nothing
    if (!doc) {
      return []
    }

    const currentText = doc.getText({
      start: { line: _textDocumentPosition.position.line, character: 0 },
      end: { line: _textDocumentPosition.position.line, character: 1000 },
    })

    const matchedItems = getMatchedCompletionItems(currentText)

    return matchedItems.length > 0 ? matchedItems : allCompletionItems
  }
)

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection)

// Listen on the connection
connection.listen()
