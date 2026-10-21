import {
  type AstNode,
  contextCwd,
  contextFilename,
  expressionName,
  jsxName,
} from '../ast.js'
import { LegacyOriginAnalyzer } from '../legacy-origin.js'
import { loadComponentContracts } from '../manifest.js'
import { createRule } from '../rule.js'

function importedWrapper(
  name: string,
  scope: AstNode,
  seen = new Set<AstNode>()
): { source: string; imported: string } | null {
  const [root, member] = name.split('.', 2)
  let current = scope
  while (current && !current.set.has(root)) current = current.upper
  const variable = current?.set.get(root)
  const definition = variable?.defs[0]
  if (!definition || seen.has(definition.node)) return null
  const next = new Set(seen).add(definition.node)
  if (definition.type === 'ImportBinding') {
    const source = definition.parent.source.value
    if (source === '@channel.io/bezier-react') return null
    const specifier = definition.node
    const imported =
      specifier.type === 'ImportNamespaceSpecifier'
        ? member
        : specifier.type === 'ImportDefaultSpecifier'
          ? 'default'
          : (specifier.imported.name ?? specifier.imported.value)
    return imported ? { source, imported } : null
  }
  if (
    definition.type !== 'Variable' ||
    definition.node.id.type !== 'Identifier'
  )
    return null
  const alias = expressionName(definition.node.init)
  return alias
    ? importedWrapper(
        member ? `${alias}.${member}` : alias,
        variable.scope,
        next
      )
    : null
}

export const noLegacyRootImport = createRule(
  'Require public beta components instead of the legacy package root.',
  {
    wrapper:
      'BZR-API-001: `{{name}}` renders legacy `{{origin}}` through an imported wrapper. Review its beta migration.',
    exact:
      'BZR-API-001: `{{name}}` is available from `@channel.io/bezier-react/beta`; import that public contract instead of the legacy root.',
    directional:
      'BZR-API-001: `{{name}}` is a legacy layout component. Use beta `HStack` or `VStack` after reviewing its direction.',
    namespace:
      'BZR-API-001: namespace import `{{name}}` exposes legacy root APIs. Import verified beta components explicitly.',
    unknown:
      'BZR-API-001: `{{name}}` is a legacy root API without a proven beta replacement. Review it instead of preserving or guessing a migration.',
  },
  (context) => {
    let analyzer: LegacyOriginAnalyzer
    return {
      Program(node: AstNode) {
        analyzer = new LegacyOriginAnalyzer(
          contextFilename(context) ?? `${contextCwd(context)}/input.tsx`,
          contextCwd(context),
          node
        )
      },
      JSXOpeningElement(node: AstNode) {
        const name = jsxName(node.name)
        if (!name || (!name.includes('.') && /^[a-z]/u.test(name))) return
        const source = context.sourceCode ?? context.getSourceCode()
        const scope = source.getScope?.(node) ?? context.getScope()
        const binding = importedWrapper(name, scope)
        const origin = binding
          ? analyzer.resolveImported(binding.source, binding.imported)
          : null
        if (origin)
          context.report({ node, messageId: 'wrapper', data: { name, origin } })
      },
      ImportDeclaration(node: AstNode) {
        if (node.source.value !== '@channel.io/bezier-react') return
        if (node.importKind === 'type') return
        const contracts = loadComponentContracts(contextCwd(context))
        for (const specifier of node.specifiers ?? []) {
          if (specifier.importKind === 'type') continue
          if (specifier.type === 'ImportNamespaceSpecifier') {
            context.report({
              node: specifier,
              messageId: 'namespace',
              data: { name: specifier.local.name },
            })
            continue
          }
          const name =
            specifier.type === 'ImportSpecifier'
              ? (specifier.imported.name ?? String(specifier.imported.value))
              : 'default'
          const messageId =
            name === 'Stack' || name === 'LegacyStack'
              ? 'directional'
              : contracts.has(name)
                ? 'exact'
                : 'unknown'
          context.report({ node: specifier, messageId, data: { name } })
        }
      },
    }
  }
)
