import { readFileSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'

export interface ComponentContract {
  name: string
  props: Set<string>
}

interface CachedContracts {
  mtimeMs: number
  path: string
  size: number
  value: Map<string, ComponentContract>
}

const cache = new Map<string, CachedContracts>()

export function loadComponentContracts(cwd = process.cwd()) {
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

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as {
    schemaVersion?: unknown
    components?: { name?: unknown; props?: { name?: unknown }[] }[]
  }
  if (
    typeof manifest.schemaVersion !== 'string' ||
    !manifest.schemaVersion.startsWith('1.') ||
    !Array.isArray(manifest.components)
  ) {
    throw new Error(
      `Unsupported @channel.io/bezier-react manifest at ${manifestPath}.`
    )
  }

  const contracts = new Map<string, ComponentContract>()
  for (const component of manifest.components) {
    if (typeof component.name !== 'string') continue
    contracts.set(component.name, {
      name: component.name,
      props: new Set(
        (component.props ?? []).flatMap((prop) =>
          typeof prop.name === 'string' ? [prop.name] : []
        )
      ),
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
