import { type Root, type Rule } from 'postcss'

import { booleanPlugin, report } from '../utils'

import { layoutCandidate } from './layout-candidates'

export const ruleName = 'bezier/prefer-layout-component'
export const messages = {
  rejected:
    'BZR-LAYOUT-002: This styled.div is an advisory Bezier layout candidate. Review semantic, scroll, grid, and responsive ownership.',
}

export const rule = booleanPlugin(
  ruleName,
  messages.rejected,
  (root, result) => {
    const containers = new Set<Root | Rule>()
    root.walkDecls((decl) => {
      const parent = decl.parent
      if (parent?.type === 'root' || parent?.type === 'rule') {
        containers.add(parent as Root | Rule)
      }
    })
    for (const container of containers) {
      const candidate = layoutCandidate(container)
      if (!candidate) continue
      report(
        result,
        ruleName,
        `BZR-LAYOUT-002: This is an advisory \`${candidate.component}\` candidate (${candidate.detail}). Review semantic, scroll, grid, and responsive ownership.`,
        candidate.declaration
      )
    }
  }
)
