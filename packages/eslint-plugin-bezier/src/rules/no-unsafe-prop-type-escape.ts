import {
  type AstNode,
  ProgramState,
  contextCwd,
  contextFilename,
  jsxName,
} from '../ast.js'
import { loadComponentContracts } from '../manifest.js'
import { createRule } from '../rule.js'

export const noUnsafePropTypeEscape = createRule(
  'Disallow hiding invalid Bezier JSX props behind any casts.',
  {
    rejected:
      'BZR-PROP-001: Do not hide a Bezier prop contract with `as any`; query the installed component contract and fix the prop.',
  },
  (context) => {
    const cwd = contextCwd(context)
    const state = new ProgramState(contextFilename(context), cwd)

    function check(node: AstNode) {
      if (node.typeAnnotation?.type !== 'TSAnyKeyword') return
      let current = node.parent
      while (current && current.type !== 'JSXAttribute') current = current.parent
      if (!current) return
      const component = state.resolve(jsxName(current.parent?.name))
      if (!component || !loadComponentContracts(cwd).has(component)) return
      context.report({ node, messageId: 'rejected' })
    }

    return {
      ImportDeclaration: (node: AstNode) => state.visitImport(node),
      ExportNamedDeclaration: (node: AstNode) => state.visitExport(node),
      TSAsExpression: check,
      TSTypeAssertion: check,
      VariableDeclarator: (node: AstNode) => state.visitVariable(node),
    }
  }
)
