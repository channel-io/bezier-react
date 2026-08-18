import { type AstNode, jsxAttribute, jsxName } from '../ast.js'
import { createRule } from '../rule.js'

const CONTROLS = new Set(['button', 'select', 'textarea'])

export const noNativeControlBypass = createRule(
  'Require review when native controls bypass a Bezier control family.',
  {
    rejected:
      'BZR-CMP-003: Native `{{name}}` bypasses an installed Bezier control family. Use the public control or a reasoned line suppression.',
  },
  (context) => ({
    JSXOpeningElement(node: AstNode) {
      const name = jsxName(node.name)
      let bypass = Boolean(name && CONTROLS.has(name))
      if (name === 'input') {
        const type = jsxAttribute(node, 'type')?.value?.value
        bypass = type === 'checkbox' || type === 'radio'
      }
      if (bypass) {
        context.report({
          node,
          messageId: 'rejected',
          data: { name: name ?? '' },
        })
      }
    },
  })
)
