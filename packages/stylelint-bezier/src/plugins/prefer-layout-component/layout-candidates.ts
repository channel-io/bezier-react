import {
  type Container,
  type Declaration,
  type Root,
  type Rule,
} from 'postcss'

const BOX_PROPERTIES = new Set([
  'background-color',
  'border-bottom-width',
  'border-color',
  'border-left-width',
  'border-radius',
  'border-right-width',
  'border-top-width',
  'border-width',
  'bottom',
  'display',
  'height',
  'left',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'overflow',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'position',
  'right',
  'top',
  'width',
])

function declarations(container: Container) {
  return (container.nodes ?? []).filter(
    (node): node is Declaration => node.type === 'decl'
  )
}

function isStyledDiv(root: Root) {
  return /styled\s*(?:\.\s*div|\(\s*["']div["']\s*\))(?:\s*\.\s*attrs[\s\S]*)?\s*`?\s*$/u.test(
    root.raws.codeBefore ?? ''
  )
}

export function layoutCandidate(container: Root | Rule) {
  if (container.type === 'rule' && /::?[\w-]+/u.test(container.selector)) return null
  if (container.type === 'root' && !isStyledDiv(container)) return null
  const values = declarations(container)
  if (
    values.length === 0 ||
    (container.nodes ?? []).some(
      (node) => node.type === 'atrule' || node.type === 'rule'
    ) ||
    values.some((decl) => /\$\{/u.test(decl.value))
  ) {
    return null
  }
  const disqualified = values.some((decl) => {
    const property = decl.prop.toLowerCase()
    const value = decl.value.trim().toLowerCase()
    return (
      (property === 'position' && /^(?:absolute|fixed)$/u.test(value)) ||
      (property === 'display' && /^(?:inline-)?grid$/u.test(value)) ||
      property === 'grid' ||
      property.startsWith('grid-') ||
      property === 'animation' ||
      property.startsWith('animation-') ||
      (/^overflow(?:-[xy])?$/u.test(property) &&
        /(?:^|\s)(?:auto|scroll)(?:\s|$)/u.test(value))
    )
  })
  if (disqualified) return null
  const display = values.find(
    (decl) =>
      decl.prop.toLowerCase() === 'display' &&
      /^(?:inline-)?flex$/u.test(decl.value.trim())
  )
  if (display) {
    const direction =
      values
        .find((decl) => decl.prop.toLowerCase() === 'flex-direction')
        ?.value.trim()
        .toLowerCase() ?? 'row'
    if (!/^(?:row|row-reverse|column|column-reverse)$/u.test(direction)) return null
    return {
      component: direction.startsWith('column') ? 'VStack' : 'HStack',
      declaration: display,
      detail: `flex-direction: ${direction}`,
    }
  }
  if (
    container.type === 'root' &&
    values.every((decl) => BOX_PROPERTIES.has(decl.prop.toLowerCase()))
  ) {
    return {
      component: 'Box',
      declaration: values[0],
      detail: 'static Box-supported declarations',
    }
  }
  return null
}
