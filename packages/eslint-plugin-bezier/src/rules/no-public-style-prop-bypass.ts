import {
  type AstNode,
  ProgramState,
  contextCwd,
  contextFilename,
  jsxAttribute,
  jsxName,
  propertyName,
} from '../ast.js'
import { loadComponentContracts } from '../manifest.js'
import { createRule } from '../rule.js'

export const noPublicStylePropBypass = createRule(
  'Prefer public Bezier props over equivalent static inline style keys.',
  {
    rejected:
      'BZR-PROP-004: `{{component}}` exposes public props for {{props}}. Use those props or a reasoned line suppression.',
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
        const component = state.resolve(jsxName(node.name))
        if (!component) return
        const contract = loadComponentContracts(contextCwd(context)).get(component)
        if (!contract) return
        const style = jsxAttribute(node, 'style')
        const expression = style?.value?.expression
        if (expression?.type !== 'ObjectExpression') return
        const matches = expression.properties
          .filter((property: AstNode) => property.type === 'Property')
          .map(propertyName)
          .filter((name: string | null): name is string =>
            Boolean(name && contract.props.has(name))
          )
        if (matches.length === 0) return
        context.report({
          node: style,
          messageId: 'rejected',
          data: { component, props: [...new Set(matches)].join(', ') },
        })
      },
    }
  }
)
