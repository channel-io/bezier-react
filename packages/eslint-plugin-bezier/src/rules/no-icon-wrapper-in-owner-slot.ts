import {
  type AstNode,
  ProgramState,
  contextCwd,
  contextFilename,
  jsxAttribute,
  jsxName,
} from '../ast.js'
import { createRule } from '../rule.js'

export const noIconWrapperInOwnerSlot = createRule(
  'Pass icon sources directly to owner-sized icon slots.',
  {
    rejected:
      'BZR-ICON-001: Pass the Bezier icon source directly to `IconButton.content`; the owner controls icon size.',
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
      JSXOpeningElement(node: AstNode) {
        if (state.resolve(jsxName(node.name)) !== 'IconButton') return
        const content = jsxAttribute(node, 'content')
        const expression = content?.value?.expression
        if (
          expression?.type === 'JSXElement' &&
          state.resolve(jsxName(expression.openingElement.name)) === 'Icon'
        ) {
          context.report({ node: content, messageId: 'rejected' })
        }
      },
    }
  }
)
