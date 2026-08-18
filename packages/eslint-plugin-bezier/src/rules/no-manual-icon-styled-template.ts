import {
  type AstNode,
  ProgramState,
  contextCwd,
  contextFilename,
} from '../ast.js'
import { createRule } from '../rule.js'

const ICON_NAME = /(?:icon|arrow|chevron|caret|glyph|check)/iu
const SHAPE_PROPERTIES = new Set([
  'border',
  'border-bottom',
  'border-left',
  'border-right',
  'border-top',
  'clip-path',
  'height',
  'mask',
  'transform',
  'width',
])
const SHAPE_SIGNATURES = new Set([
  'border',
  'border-bottom',
  'border-left',
  'border-right',
  'border-top',
  'clip-path',
  'mask',
  'transform',
])

function variableName(node: AstNode) {
  const declarator = node.parent
  return declarator?.type === 'VariableDeclarator' &&
    declarator.id?.type === 'Identifier'
    ? declarator.id.name
    : null
}

function cssProperties(node: AstNode) {
  const css = (node.quasi?.quasis ?? [])
    .map((quasi: AstNode) => quasi.value.cooked ?? quasi.value.raw)
    .join('\n')
  return new Set(
    [...css.matchAll(/(?:^|[;\n])\s*([a-z-]+)\s*:/gimu)].map((match) =>
      match[1].toLowerCase()
    )
  )
}

export const noManualIconStyledTemplate = createRule(
  'Require review for styled-components templates that reconstruct icon geometry.',
  {
    rejected:
      'HOST-ICON-003: `{{name}}` appears to reconstruct an icon in CSS. Search the installed icon catalog before drawing glyph geometry.',
  },
  (context) => {
    const state = new ProgramState(
      contextFilename(context),
      contextCwd(context)
    )
    return {
      ImportDeclaration: (node: AstNode) => state.visitImport(node),
      TaggedTemplateExpression(node: AstNode) {
        if (!state.isStyledTemplate(node.tag)) return
        const name = variableName(node)
        if (!name || !ICON_NAME.test(name)) return
        const properties = [...cssProperties(node)].filter((property) =>
          SHAPE_PROPERTIES.has(property)
        )
        if (
          properties.length >= 3 &&
          properties.some((property) => SHAPE_SIGNATURES.has(property))
        ) {
          context.report({ node, messageId: 'rejected', data: { name } })
        }
      },
    }
  }
)
