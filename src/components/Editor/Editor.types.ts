/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

enum NodeType {
  Paragraph = 'paragraph',
  CodeBlock = 'codeBlock',
  BulletList = 'bulletList',
  ListItem = 'listItem',
  Text = 'text',
  Variable = 'variable',
  Emoji = 'emoji',
  Mention = 'mention',
}

enum BlockType {
  Text = 'text',
  Code = 'code',
  Bullets = 'bullets',
}

export {
  NodeType,
  BlockType,
}

export interface Text {
  type: BlockType.Text
  value: string
}

export interface Code {
  type: BlockType.Code
  language?: string
  value: string
}

export interface Bullets {
  type: BlockType.Bullets
  blocks: Text[]
}

export type Block = Text | Code | Bullets

export interface EditorProps extends ChildrenComponentProps {
  initialBlocks?: Block[]
}

