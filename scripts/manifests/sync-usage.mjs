import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import { createUsageSnapshot } from './usage.mjs'

const [specRepo, commit] = process.argv.slice(2)
if (!specRepo || !commit) {
  throw new Error(
    'Usage: node scripts/manifests/sync-usage.mjs <core-bezier-system checkout> <full commit SHA>'
  )
}
const snapshot = createUsageSnapshot(specRepo, commit)
writeFileSync(
  fileURLToPath(new URL('./usage.snapshot.json', import.meta.url)),
  `${JSON.stringify(snapshot, null, 2)}\n`
)
console.log(
  `Pinned ${Object.keys(snapshot.specs).length} active specs at ${snapshot.source.commit}; excluded ${snapshot.excluded.join(', ')}.`
)
