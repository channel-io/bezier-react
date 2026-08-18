import { type AstNode, jsxName } from '../ast.js'
import { createRule } from '../rule.js'

export const noInlineSvg = createRule(
  'Require asset ownership review for hand-authored inline SVG.',
  {
    rejected:
      'HOST-ICON-001: Inline SVG requires asset ownership review. Search installed Bezier icons before reconstructing paths.',
  },
  (context) => ({
    JSXOpeningElement(node: AstNode) {
      if (jsxName(node.name) === 'svg') {
        context.report({ node, messageId: 'rejected' })
      }
    },
  })
)
