import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult
} from 'vscode-languageserver/node';

import {
	tokens as _tokens,
} from '@channel.io/bezier-tokens';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

const tokens = {
	..._tokens.darkTheme,
	..._tokens.global,
} as const;

type TokenGroup = keyof typeof tokens

const completionItemsByTokenGroup = Object.fromEntries(
	Object
	.entries(tokens)
	.map(([groupName, tokenKeyValues]) => {
		const completionItems: CompletionItem[] = Object.entries(tokenKeyValues).map(
			([key, value]) => ({
				label: `--b-${key}`,
				insertText: `--b-${key}`,
				filterText: `--b-${key}`,
				detail: String(value),
				kind: groupName === 'color' ? CompletionItemKind.Color : CompletionItemKind.Variable,
			})
		);
		return [groupName, completionItems];
})) as Record<TokenGroup, CompletionItem[]>;

console.log("LOG: ", completionItemsByTokenGroup);

const allCompletionItems = Object.values(completionItemsByTokenGroup).flat();

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((params: InitializeParams) => {
	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
        resolveProvider: true,
			}
		}
	};

	return result;
});

// // This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		console.log("LOG: ", allCompletionItems);
		return allCompletionItems;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
