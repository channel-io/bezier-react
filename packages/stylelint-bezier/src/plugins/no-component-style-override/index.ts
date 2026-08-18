import { type Document, type Root } from 'postcss'

import { loadComponentContracts } from '../../manifest'
import { booleanPlugin, report } from '../utils'

export const ruleName = 'bezier/no-component-style-override'
export const messages = {
  rejected:
    'BZR-PROP-004: `{{component}}` exposes a public `{{prop}}` prop. Use it instead of overriding the component declaration, or add a reasoned line suppression.',
}

function importBindings(code: string) {
  const bindings = new Map<string, string>()
  const named =
    /import\s*\{([^}]+)\}\s*from\s*["']@channel\.io\/bezier-react\/beta["']/gu
  for (const match of code.matchAll(named)) {
    for (const entry of match[1].split(',')) {
      const normalized = entry.trim().replace(/^type\s+/u, '')
      const parts = normalized.split(/\s+as\s+/u).map((value) => value.trim())
      if (parts[0]) bindings.set(parts[1] ?? parts[0], parts[0])
    }
  }
  const namespace =
    /import\s*\*\s*as\s*([\w$]+)\s*from\s*["']@channel\.io\/bezier-react\/beta["']/gu
  for (const match of code.matchAll(namespace)) bindings.set(match[1], '*')
  return bindings
}

function styledComponent(root: Root) {
  const code = root.raws.codeBefore ?? ''
  const target = code.match(
    /styled\s*\(\s*([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)?)\s*\)(?:\s*\.\s*attrs[\s\S]*)?\s*`?\s*$/u
  )?.[1]
  if (!target) return null
  const [local, member] = target.split('.')
  const binding = importBindings(code).get(local)
  return binding === '*' ? member ?? null : binding ?? null
}

function camelCase(property: string) {
  return property.replace(/-([a-z])/gu, (_, letter: string) =>
    letter.toUpperCase()
  )
}

export const rule = booleanPlugin(
  ruleName,
  messages.rejected,
  (document: Root | Document, result) => {
    const contracts = loadComponentContracts()
    const roots = document.type === 'document' ? document.nodes : [document]
    for (const node of roots) {
      if (node.type !== 'root') continue
      const component = styledComponent(node)
      const contract = component ? contracts.get(component) : null
      if (!component || !contract) continue
      for (const child of node.nodes ?? []) {
        if (child.type !== 'decl' || child.prop.startsWith('--')) continue
        const prop = camelCase(child.prop.toLowerCase())
        if (!contract.props.has(prop)) continue
        report(
          result,
          ruleName,
          messages.rejected
            .replace('{{component}}', component)
            .replace('{{prop}}', prop),
          child,
          child.prop
        )
      }
    }
  }
)
