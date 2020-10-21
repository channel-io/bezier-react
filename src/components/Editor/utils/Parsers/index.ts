/* External dependencies */
import { InputStream, CommonTokenStream } from 'antlr4'
import { ParseTreeWalker } from 'antlr4/tree'
import {
  Schema,
  Node as ProsemirrorNode,
} from 'prosemirror-model'
import { identity } from 'lodash-es'

/* Internal dependencies */
import { BlockType, Block } from '../../Editor.types'
import { TextBlockParser } from './Antlr/TextBlockParser'
import { TextBlockLexer } from './Antlr/TextBlockLexer'
import TextBlockToPMNodesListener from './TextBlockToPMNodeListener'
import PMNodesToBlocksListener from './PMNodesToBlocksListener'
import PMNodesToBlocksVisitor from './PMNodesToBlocksVisitor'

export function textBlockToPMNodes(
  input: string,
  schema: Schema,
): ProsemirrorNode[] {
  if (!input) { return [] }

  const chars = new InputStream(input)
  const lexer = new TextBlockLexer(chars)
  const tokens = new CommonTokenStream(lexer as any)
  const parser = new TextBlockParser(tokens) as any

  parser.buildParseTrees = true

  const tree = parser.text()
  const listener = new TextBlockToPMNodesListener(schema)

  ParseTreeWalker.DEFAULT.walk(listener, tree)

  return listener.result
}

export function blocksToPMNodes(
  blocks: Block[],
  schema: Schema,
) {
  const content = blocks.map(block => {
    switch (block.type) {
      case BlockType.Text: {
        return textBlockToPMNodes(block.value, schema)
      }

      case BlockType.Bullets: {
        const nodes = block.blocks.map(bulletItem => {
          const bulletItems = textBlockToPMNodes(bulletItem.value, schema)
          if (schema.nodes.listItem) {
            return schema.nodes.listItem.create(null, bulletItems)
          }
          return null
        }).filter(Boolean) as ProsemirrorNode[]

        if (schema.nodes.bulletList && nodes.length > 0) {
          return schema.nodes.bulletList.create(null, nodes)
        }

        return nodes
      }

      case BlockType.Code: {
        if (
          block.value &&
          schema.nodes.codeBlock
        ) {
          return schema.nodes.codeBlock.create(null, [schema.text(block.value)])
        }
      }

      // eslint-disable-next-line no-fallthrough
      default:
        return null
    }
  }).filter(identity)

  return content.flat() as ProsemirrorNode[]
}

const pmNodesToBlocksListener = new PMNodesToBlocksListener()
const pmNodesToBlocksVisitor = new PMNodesToBlocksVisitor(pmNodesToBlocksListener)

export function pmNodesToBlocks(
  doc?: ProsemirrorNode<Schema>,
  noEscape: boolean = false,
): Block[] {
  if (!doc) {
    return []
  }

  pmNodesToBlocksVisitor.start(doc, noEscape)
  return pmNodesToBlocksListener.result
}
