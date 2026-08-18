import { type AstNode } from '../ast.js'
import { createRule } from '../rule.js'

const PUBLIC_ENTRYPOINTS = new Set([
  '@channel.io/bezier-react/beta',
  '@channel.io/bezier-react/styles.css',
])

export const noPrivateEntrypoint = createRule(
  'Disallow private Bezier React entrypoints.',
  {
    rejected:
      'BZR-API-002: `{{path}}` is not a supported public Bezier entrypoint. Use the package root or `/beta`.',
  },
  (context) => ({
    ImportDeclaration(node: AstNode) {
      const source = String(node.source.value)
      if (
        source.startsWith('@channel.io/bezier-react/') &&
        !PUBLIC_ENTRYPOINTS.has(source)
      ) {
        context.report({
          node: node.source,
          messageId: 'rejected',
          data: { path: source },
        })
      }
    },
  })
)
