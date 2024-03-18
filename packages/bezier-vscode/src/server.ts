import { tokens as _tokens } from '@channel.io/bezier-tokens'
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

import { merge } from './utils'

const tokens = merge(
  JSON.parse(JSON.stringify(_tokens.darkTheme)),
  JSON.parse(JSON.stringify(_tokens.global)),
)

type TokenGroup = keyof typeof tokens

const completionItemsByTokenGroup = Object.fromEntries(
  Object
    .entries(tokens)
    .map(([groupName, tokenKeyValues]) => {
      const completionItems: CompletionItem[] = Object.entries(tokenKeyValues).map(
        ([key, value]) => ({
          label: `--${key}`,
          insertText: `--${key}`,
          detail: String(value),
          kind: groupName === 'color' ? CompletionItemKind.Color : CompletionItemKind.Variable,
        }),
      )
      return [groupName, completionItems]
    })) as Record<TokenGroup, CompletionItem[]>

const tokenGroupPatterns: Record<string, RegExp> = {
  radius: /border/,
  color:
    /color|background|border|outline|background-color/,
  elevation: /box-shadow/,
  input: /box-shadow/,
  typography: /font|letter-spacing|line-height/,
  transition: /transition/,
  opacity: /opacity/,
  space: /margin|padding|gap|top|left|right|bottom/,
  'z-index': /z-index/,
}

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
        triggerCharacters: ['--'],
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

    if (!currentText.includes('var(')) { return [] }

    for (const [tokenGroupName, pattern] of Object.entries(
      tokenGroupPatterns,
    )) {
      if (pattern.test(currentText)) {
        const currentCompletionItems =
        completionItemsByTokenGroup[
          tokenGroupName as keyof typeof tokenGroupPatterns
        ]

        matchedCompletionItems = matchedCompletionItems.concat(
          currentCompletionItems,
        )
      }
    }

    // if there were matches above, send them
    if (matchedCompletionItems.length > 0) {
      return matchedCompletionItems
    }

    // if there were no matches, send everything
    return allCompletionItems
  },
)

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection)

// Listen on the connection
connection.listen()
