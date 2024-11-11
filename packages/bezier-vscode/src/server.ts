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

type TokenMap = Record<
  string,
  Record<string, string | number | Record<string, string | number>>
>

const assignToTokenMap = (
  target: TokenMap,
  source: TokenMap,
  fn: Function = (v: Record<string, string> | string) => v
) => {
  Object.entries(source).forEach(([key, value]) => {
    if (target[key] === undefined) {
      target[key] = {}
    }
    Object.entries(value).forEach(([token, tokenValue]) => {
      target[key][token] = fn(tokenValue)
    })
  })
}

const alphaTokenMap = {} as TokenMap
const tokenMap = {} as TokenMap

assignToTokenMap(
  alphaTokenMap,
  alphaTokens.lightTheme,
  (v: Record<string, string>) => v.value
)
assignToTokenMap(
  alphaTokenMap,
  alphaTokens.global,
  (v: Record<string, string>) => v.value
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
  gradient: /background:/,
  'z-index': /z-index:/,
} satisfies Record<Exclude<TokenGroup, 'dimension'>, RegExp>

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
      completionProvider: {
        resolveProvider: true,
      },
    },
  }

  return result
})

// // This handler provides the initial list of the completion items.
connection.onCompletion(
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    const doc = documents.get(_textDocumentPosition.textDocument.uri)

    let matchedCompletionItems: CompletionItem[] = []

    // if the doc can't be found, return nothing
    if (!doc) {
      return []
    }

    const currentText = doc.getText({
      start: { line: _textDocumentPosition.position.line, character: 0 },
      end: { line: _textDocumentPosition.position.line, character: 1000 },
    })

    if (
      Object.values(tokenGroupPatterns).every(
        (pattern) => !pattern.test(currentText)
      )
    ) {
      return []
    }

    for (const [tokenGroupName, pattern] of Object.entries(
      tokenGroupPatterns
    )) {
      if (pattern.test(currentText)) {
        const currentCompletionItems =
          completionItemsByTokenGroup[
            tokenGroupName as keyof typeof tokenGroupPatterns
          ]

        matchedCompletionItems = matchedCompletionItems.concat(
          currentCompletionItems
        )
      }
    }

    // if there were matches above, send them
    if (matchedCompletionItems.length > 0) {
      return matchedCompletionItems
    }

    // if there were no matches, send everything
    return allCompletionItems
  }
)

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection)

// Listen on the connection
connection.listen()
