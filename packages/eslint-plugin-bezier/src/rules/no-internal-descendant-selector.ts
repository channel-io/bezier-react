import {
  type AstNode,
  ProgramState,
  contextCwd,
  contextFilename,
} from '../ast.js'
import { loadComponentContracts } from '../manifest.js'
import { createRule } from '../rule.js'

const DYNAMIC_SELECTOR = '__BEZIER_DYNAMIC_SELECTOR__'

function templateCss(node: AstNode) {
  return (node.quasi?.quasis ?? [])
    .map((quasi: AstNode) => quasi.value.cooked ?? quasi.value.raw)
    .join(` ${DYNAMIC_SELECTOR} `)
}

function internalKind(selector: string) {
  if (
    /\[\s*class(?:Name)?\s*(?:\*=|\^=|\$=|\|=|~=|=)\s*["'][^"']*(?:IconWrapper|bezier-)[^"']*["']\s*\]/iu.test(
      selector
    ) ||
    /\.(?:[\w-]*IconWrapper|bezier-[\w-]*)\b/u.test(selector)
  ) {
    return 'Bezier internal class'
  }
  return /(?:^|[\s>+~,(])(?:svg|path)(?=$|[\s>+~.#:[),])/iu.test(selector)
    ? 'internal SVG element'
    : null
}

function firstInternalSelector(css: string) {
  const pattern = /(?:^|[;{}])\s*([^@;{}][^;{}]*?)\s*\{/gmu
  for (const match of css.matchAll(pattern)) {
    const selector = match[1].trim()
    if (!selector || selector.includes(DYNAMIC_SELECTOR)) continue
    const kind = internalKind(selector)
    if (kind) return { kind, selector }
  }
  return null
}

export const noInternalDescendantSelector = createRule(
  "Disallow static selectors that reach into a styled Bezier component's private descendants.",
  {
    rejected:
      'BZR-API-003: `{{component}}` selector `{{selector}}` depends on a private Bezier descendant ({{kind}}). Use a public prop, slot, or consumer-owned wrapper.',
  },
  (context) => {
    const cwd = contextCwd(context)
    const state = new ProgramState(contextFilename(context), cwd)
    return {
      ImportDeclaration: (node: AstNode) => state.visitImport(node),
      ExportNamedDeclaration: (node: AstNode) => state.visitExport(node),
      VariableDeclarator: (node: AstNode) => state.visitVariable(node),
      TaggedTemplateExpression(node: AstNode) {
        const component = state.resolveStyledTarget(node.tag)
        if (!component || !loadComponentContracts(cwd).has(component)) return
        const evidence = firstInternalSelector(templateCss(node))
        if (!evidence) return
        context.report({
          node,
          messageId: 'rejected',
          data: {
            component,
            kind: evidence.kind,
            selector: evidence.selector.replace(/\s+/gu, ' ').slice(0, 120),
          },
        })
      },
    }
  }
)
