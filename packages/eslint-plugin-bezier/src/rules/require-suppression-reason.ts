import { type AstNode } from '../ast.js'
import { createRule } from '../rule.js'

export const requireSuppressionReason = createRule(
  'Require line-scoped, reasoned suppressions for Bezier rules.',
  {
    blanket:
      'BZR-ENG-001: File-wide Bezier suppression is forbidden. Suppress one line and record a concrete reason.',
    reason:
      'BZR-ENG-001: Bezier suppression must use `-- <specific reason>` explaining why the public alternative is unsafe.',
  },
  (context) => ({
    Program() {
      for (const comment of context.getSourceCode().getAllComments()) {
        const value = comment.value.trim()
        if (!/eslint-disable/u.test(value) || !/bezier/iu.test(value)) continue
        if (/^eslint-disable(?:\s|$)/u.test(value)) {
          context.report({ node: comment as AstNode, messageId: 'blanket' })
          continue
        }
        const reason = value.split(/\s--\s/u)[1]?.trim() ?? ''
        if (reason.length < 12) {
          context.report({ node: comment as AstNode, messageId: 'reason' })
        }
      }
    },
  })
)
