import { type AstNode, jsxAttribute, jsxName } from '../ast.js'
import { createRule } from '../rule.js'

const CONTROLS = new Set(['button', 'select', 'textarea'])

interface StyledOrigin {
  factory?: boolean
  tag?: string
  inputType?: string
}

// Resolve lexical bindings, rather than trusting the spelling `styled`.
function styledOrigin(
  node: AstNode,
  scope: AstNode,
  seen = new Set<AstNode>()
): StyledOrigin | null {
  if (!node || seen.has(node)) return null
  const next = new Set(seen).add(node)
  if (node.type === 'Identifier' || node.type === 'JSXIdentifier') {
    let current = scope
    while (current && !current.set.has(node.name)) current = current.upper
    const definition = current?.set.get(node.name)?.defs[0]
    if (definition?.type === 'ImportBinding') {
      const specifier = definition.node
      return definition.parent.source.value === 'styled-components' &&
        (specifier.type === 'ImportDefaultSpecifier' ||
          (specifier.type === 'ImportSpecifier' &&
            specifier.imported.name === 'styled'))
        ? { factory: true }
        : null
    }
    return definition?.type === 'Variable'
      ? styledOrigin(definition.node.init, current, next)
      : null
  }
  if (node.type === 'TaggedTemplateExpression') {
    return styledOrigin(node.tag, scope, next)
  }
  if (node.type === 'MemberExpression' && !node.computed) {
    const base = styledOrigin(node.object, scope, next)
    return base?.factory ? { tag: node.property.name } : null
  }
  if (node.type !== 'CallExpression') return null
  if (
    node.callee.type === 'MemberExpression' &&
    !node.callee.computed &&
    node.callee.property.name === 'attrs'
  ) {
    const base = styledOrigin(node.callee.object, scope, next)
    if (!base) return null
    const attributes = node.arguments[0]
    const type = attributes?.properties?.find(
      (property: AstNode) =>
        !property.computed &&
        (property.key?.name ?? property.key?.value) === 'type'
    )?.value
    return { ...base, inputType: type?.value ?? base.inputType }
  }
  const factory = styledOrigin(node.callee, scope, next)
  if (!factory?.factory) return null
  const target = node.arguments[0]
  if (target?.type === 'Literal' && typeof target.value === 'string') {
    return { tag: target.value }
  }
  if (target?.type === 'Identifier') {
    let current = scope
    while (current && !current.set.has(target.name)) current = current.upper
    const declaration = current?.set.get(target.name)?.defs[0]?.node
    if (declaration?.init?.type === 'Literal') {
      return { tag: declaration.init.value }
    }
  }
  return styledOrigin(target, scope, next)
}

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
      if (!bypass && name && /^[A-Z]/u.test(name)) {
        const source = context.sourceCode ?? context.getSourceCode()
        const scope = source.getScope?.(node) ?? context.getScope()
        const origin = styledOrigin(node.name, scope)
        const type = jsxAttribute(node, 'type')?.value?.value
        // Static attrs were already reviewed at the styled declaration.
        bypass =
          origin?.tag === 'input' &&
          !['checkbox', 'radio'].includes(origin.inputType ?? '') &&
          ['checkbox', 'radio'].includes(type)
      }
      if (bypass) {
        context.report({
          node,
          messageId: 'rejected',
          data: { name: name ?? '' },
        })
      }
    },
    TaggedTemplateExpression(node: AstNode) {
      const source = context.sourceCode ?? context.getSourceCode()
      const scope = source.getScope?.(node) ?? context.getScope()
      const origin = styledOrigin(node.tag, scope)
      if (
        origin?.tag &&
        (CONTROLS.has(origin.tag) ||
          (origin.tag === 'input' &&
            ['checkbox', 'radio'].includes(origin.inputType ?? '')))
      ) {
        context.report({
          node,
          messageId: 'rejected',
          data: { name: origin.tag },
        })
      }
    },
  })
)
