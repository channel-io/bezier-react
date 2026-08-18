import { type AstNode, contextCwd } from '../ast.js'
import { loadComponentContracts } from '../manifest.js'
import { createRule } from '../rule.js'

export const noLegacyRootImport = createRule(
  'Require public beta components instead of the legacy package root.',
  {
    exact:
      'BZR-API-001: `{{name}}` is available from `@channel.io/bezier-react/beta`; import that public contract instead of the legacy root.',
    directional:
      'BZR-API-001: `{{name}}` is a legacy layout component. Use beta `HStack` or `VStack` after reviewing its direction.',
    namespace:
      'BZR-API-001: namespace import `{{name}}` exposes legacy root APIs. Import verified beta components explicitly.',
    unknown:
      'BZR-API-001: `{{name}}` is a legacy root API without a proven beta replacement. Review it instead of preserving or guessing a migration.',
  },
  (context) => ({
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
            ? specifier.imported.name ?? String(specifier.imported.value)
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
  })
)
