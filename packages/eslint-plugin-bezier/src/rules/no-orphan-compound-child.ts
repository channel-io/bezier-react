import {
  type AstNode,
  ProgramState,
  contextCwd,
  contextFilename,
  jsxName,
} from '../ast.js'
import { loadComponentContracts } from '../manifest.js'
import { createRule } from '../rule.js'

type Verdict = 'orphan' | 'uncertain'

function verdictFor(
  node: AstNode,
  requiredAncestors: string[],
  state: ProgramState
): Verdict | 'valid' {
  const found = new Set<string>()
  let uncertain = false
  let parent = node.parent
  while (parent) {
    if (parent.type === 'JSXElement') {
      const name = jsxName(parent.openingElement.name)
      const resolved = state.resolve(name)
      if (resolved) found.add(resolved)
      else if (name && /^[A-Z]/u.test(name)) uncertain = true
    }
    parent = parent.parent
  }
  if (requiredAncestors.every((name) => found.has(name))) return 'valid'
  return uncertain ? 'uncertain' : 'orphan'
}

function compoundRule(verdict: Verdict, description: string, message: string) {
  return createRule(description, { rejected: message }, (context) => {
    const state = new ProgramState(
      contextFilename(context),
      contextCwd(context)
    )
    const candidates: AstNode[] = []
    return {
      ImportDeclaration: (node: AstNode) => state.visitImport(node),
      ExportNamedDeclaration: (node: AstNode) => state.visitExport(node),
      VariableDeclarator: (node: AstNode) => state.visitVariable(node),
      JSXElement: (node: AstNode) => candidates.push(node),
      'Program:exit': function programExit() {
        const contracts = loadComponentContracts(contextCwd(context))
        for (const node of candidates) {
          const component = state.resolve(jsxName(node.openingElement.name))
          if (!component) continue
          const required = contracts.get(component)?.requiredAncestors ?? []
          if (required.length === 0) continue
          if (verdictFor(node, required, state) !== verdict) continue
          context.report({
            node: node.openingElement,
            messageId: 'rejected',
            data: { child: component, owners: required.join(' > ') },
          })
        }
      },
    }
  })
}

export const noOrphanCompoundChild = compoundRule(
  'orphan',
  'Require compound children to render under every manifest-declared owner.',
  'BZR-CMP-001: `{{child}}` must render under `{{owners}}`. Review the public compound recipe.'
)

export const reviewUnresolvedCompoundOwner = compoundRule(
  'uncertain',
  'Request review when a compound owner is hidden by an unresolved wrapper.',
  'BZR-CMP-002: `{{child}}` requires `{{owners}}`, but an ancestor origin could not be proven statically. Review wrapper ownership; this finding is advisory.'
)
