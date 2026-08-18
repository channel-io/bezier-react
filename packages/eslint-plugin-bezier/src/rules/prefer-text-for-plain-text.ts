import {
  type AstNode,
  ProgramState,
  contextCwd,
  contextFilename,
  jsxName,
} from '../ast.js'
import { createRule } from '../rule.js'

const SEMANTIC_OWNERS = new Set([
  'a',
  'button',
  'label',
  'option',
  'Badge',
  'Banner',
  'Button',
  'Checkbox',
  'DropdownMenuItem',
  'DropdownMenuSubTrigger',
  'IconButton',
  'SectionItem',
  'SegmentedControlItem',
  'Tag',
])

function hasDirectText(node: AstNode) {
  return (node.children ?? []).some((child: AstNode) => {
    if (child.type === 'JSXText') return child.value.trim().length > 0
    if (child.type !== 'JSXExpressionContainer') return false
    const expression = child.expression
    if (expression.type === 'Literal') return typeof expression.value === 'string'
    if (expression.type === 'TemplateLiteral') return true
    if (expression.type !== 'CallExpression') return false
    const callee = expression.callee
    if (callee.type === 'Identifier') return /^(?:t|translate|translator)$/u.test(callee.name)
    return (
      callee.type === 'MemberExpression' &&
      !callee.computed &&
      /^(?:t|translate)$/u.test(callee.property.name)
    )
  })
}

export const preferTextForPlainText = createRule(
  'Suggest Bezier Text for unowned plain span and p text.',
  {
    rejected:
      'BZR-TEXT-002: Plain `{{name}}` directly owns text. Use Bezier `Text` unless DOM semantics or a semantic owner requires it.',
  },
  (context) => {
    const state = new ProgramState(
      contextFilename(context),
      contextCwd(context)
    )
    return {
      ImportDeclaration: (node: AstNode) => state.visitImport(node),
      ExportNamedDeclaration: (node: AstNode) => state.visitExport(node),
      VariableDeclarator: (node: AstNode) => state.visitVariable(node),
      JSXElement(node: AstNode) {
        const name = jsxName(node.openingElement.name)
        if (!name || !['p', 'span'].includes(name) || !hasDirectText(node)) return
        let parent = node.parent
        while (parent) {
          if (parent.type === 'JSXElement') {
            const ancestor =
              state.resolve(jsxName(parent.openingElement.name)) ??
              jsxName(parent.openingElement.name)
            if (ancestor && SEMANTIC_OWNERS.has(ancestor)) return
          }
          parent = parent.parent
        }
        context.report({
          node: node.openingElement,
          messageId: 'rejected',
          data: { name },
        })
      },
    }
  }
)
