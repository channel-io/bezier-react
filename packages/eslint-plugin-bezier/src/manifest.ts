import { readFileSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'

export interface ComponentContract {
  name: string
  props: Set<string>
  requiredAncestors: string[]
}

interface ManifestComponent {
  name?: unknown
  props?: { name?: unknown }[]
  semantics?: {
    parts?: Record<string, { requiresAncestor?: unknown }>
  }
}

interface CachedContracts {
  mtimeMs: number
  path: string
  size: number
  value: Map<string, ComponentContract>
}

const cache = new Map<string, CachedContracts>()

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === 'string')
}

export function loadComponentContracts(cwd: string) {
  const root = resolve(cwd)
  const consumerRequire = createRequire(join(root, 'package.json'))
  const manifestPath = consumerRequire.resolve(
    '@channel.io/bezier-react/manifest.json'
  )
  const stat = statSync(manifestPath)
  const cached = cache.get(root)
  if (
    cached?.path === manifestPath &&
    cached.mtimeMs === stat.mtimeMs &&
    cached.size === stat.size
  ) {
    return cached.value
  }

  const parsed = JSON.parse(readFileSync(manifestPath, 'utf8')) as {
    schemaVersion?: unknown
    components?: unknown
  }
  if (
    typeof parsed.schemaVersion !== 'string' ||
    !parsed.schemaVersion.startsWith('1.') ||
    !Array.isArray(parsed.components)
  ) {
    throw new Error(
      `Unsupported @channel.io/bezier-react manifest at ${manifestPath}.`
    )
  }

  const contracts = new Map<string, ComponentContract>()
  for (const value of parsed.components as ManifestComponent[]) {
    if (typeof value.name !== 'string') continue
    const part = value.semantics?.parts?.[value.name]
    const requiredAncestors = isStringArray(part?.requiresAncestor)
      ? part.requiresAncestor
      : []
    contracts.set(value.name, {
      name: value.name,
      props: new Set(
        (value.props ?? []).flatMap((prop) =>
          typeof prop.name === 'string' ? [prop.name] : []
        )
      ),
      requiredAncestors,
    })
  }
  cache.set(root, {
    mtimeMs: stat.mtimeMs,
    path: manifestPath,
    size: stat.size,
    value: contracts,
  })
  return contracts
}
