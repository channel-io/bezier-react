import { type AstNode, jsxAttribute, jsxName } from '../ast.js'
import { createRule } from '../rule.js'

const ICON_GLYPH_PATTERN = /[\u2190-\u2bff\u{1f300}-\u{1faff}]/u

export const noIconLikeGlyph = createRule(
  'Disallow short Unicode glyphs used as visual icons.',
  {
    rejected:
      'HOST-ICON-002: A Unicode glyph is used as an icon. Search the installed icon catalog and use its named source.',
  },
  (context) => ({
    JSXElement(node: AstNode) {
      const text = (node.children ?? [])
        .filter((child: AstNode) => child.type === 'JSXText')
        .map((child: AstNode) => child.value)
        .join('')
        .trim()
      if (!text || [...text].length > 3 || !ICON_GLYPH_PATTERN.test(text)) return
      const opening = node.openingElement
      const className = jsxAttribute(opening, 'className')?.value?.value
      if (
        jsxName(opening.name) === 'span' ||
        jsxAttribute(opening, 'aria-hidden') ||
        /(?:icon|arrow|chevron|caret|glyph)/iu.test(String(className ?? ''))
      ) {
        context.report({ node: opening, messageId: 'rejected' })
      }
    },
  })
)
