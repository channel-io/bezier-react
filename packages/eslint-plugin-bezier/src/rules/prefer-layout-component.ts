import {
  type AstNode,
  jsxAttribute,
  jsxName,
  staticObjectProperties,
} from '../ast.js'
import { createRule } from '../rule.js'

const OWNER_ATTRIBUTES = new Set([
  'contentEditable',
  'dangerouslySetInnerHTML',
  'ref',
  'role',
  'tabIndex',
])

const BOX_STYLE_PROPERTIES = new Set([
  'backgroundColor',
  'borderBottomWidth',
  'borderColor',
  'borderLeftWidth',
  'borderRadius',
  'borderRightWidth',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'display',
  'height',
  'inset',
  'left',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'overflow',
  'overflowX',
  'overflowY',
  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'position',
  'right',
  'top',
  'width',
])

function candidate(node: AstNode) {
  if (jsxName(node.name) !== 'div') return null
  for (const attribute of node.attributes ?? []) {
    if (attribute.type === 'JSXSpreadAttribute') return null
    const name = attribute.name?.name
    if (
      OWNER_ATTRIBUTES.has(name) ||
      name === 'className' ||
      name === 'css' ||
      /^on[A-Z]/u.test(name)
    ) {
      return null
    }
  }
  const style = jsxAttribute(node, 'style')
  const properties = staticObjectProperties(style?.value?.expression)
  if (!style || !properties || properties.size === 0) return null
  const display = String(properties.get('display') ?? '').toLowerCase()
  const position = String(properties.get('position') ?? '').toLowerCase()
  const overflow = [
    properties.get('overflow'),
    properties.get('overflowX'),
    properties.get('overflowY'),
  ].map((value) => String(value ?? '').toLowerCase())
  if (
    display === 'grid' ||
    display === 'inline-grid' ||
    position === 'absolute' ||
    position === 'fixed' ||
    overflow.some((value) => value === 'auto' || value === 'scroll') ||
    [...properties.keys()].some((name) => name.startsWith('grid'))
  ) {
    return null
  }
  if (display === 'flex' || display === 'inline-flex') {
    const direction = String(properties.get('flexDirection') ?? 'row').toLowerCase()
    if (!/^(?:row|row-reverse|column|column-reverse)$/u.test(direction)) return null
    return {
      component: direction.startsWith('column') ? 'VStack' : 'HStack',
      detail: `flex-direction: ${direction}`,
      style,
    }
  }
  if ([...properties.keys()].every((name) => BOX_STYLE_PROPERTIES.has(name))) {
    return { component: 'Box', detail: 'static Box-supported style', style }
  }
  return null
}

export const preferLayoutComponent = createRule(
  'Suggest Bezier layout components for conservative native div candidates.',
  {
    candidate:
      'BZR-LAYOUT-002: This div is an advisory `{{component}}` candidate ({{detail}}). Review semantic, scroll, grid, and responsive ownership.',
  },
  (context) => ({
    JSXOpeningElement(node: AstNode) {
      const value = candidate(node)
      if (value) {
        context.report({
          node: value.style,
          messageId: 'candidate',
          data: value,
        })
      }
    },
  })
)
