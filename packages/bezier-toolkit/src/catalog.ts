import { readAllInstalledManifests } from './manifests.js'
import {
  type BezierCatalog,
  type BezierManifest,
  type CatalogEntity,
  type CatalogEntityKind,
  type CatalogLoadResult,
  type InstalledManifest,
  type ManifestCollection,
} from './types.js'

const catalogCache = new Map<string, BezierCatalog>()

function stringValue(value: unknown): string | null {
  return typeof value === 'string' ? value : null
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === 'string')
    : []
}

function replacementFor(entity: Record<string, unknown>): string | null {
  const direct = stringValue(entity.replacement)
  if (direct) return direct
  if (
    typeof entity.deprecated === 'object' &&
    entity.deprecated !== null &&
    !Array.isArray(entity.deprecated)
  ) {
    return stringValue(
      (entity.deprecated as Record<string, unknown>).replacement
    )
  }
  return null
}

function isDeprecated(entity: Record<string, unknown>): boolean {
  return entity.deprecated === true || replacementFor(entity) !== null
}

function collectionFor(
  manifest: BezierManifest,
  collection: ManifestCollection
): Record<string, unknown>[] {
  return manifest[collection] ?? []
}

function catalogEntity(
  kind: CatalogEntityKind,
  packageName: string,
  entity: Record<string, unknown>
): CatalogEntity | null {
  const rawName = stringValue(entity.name)
  if (!rawName) return null
  const componentName = stringValue(entity.componentName)
  return {
    kind,
    name: componentName ?? rawName,
    canonicalName: rawName,
    packageName,
    aliases: stringArray(entity.aliases),
    deprecated: isDeprecated(entity),
    replacement: replacementFor(entity),
    data: entity,
  }
}

function tupleFor(manifests: InstalledManifest[]): string {
  return manifests
    .map(
      ({ manifest }) =>
        `${manifest.package.name}@${manifest.package.version}` +
        `#${manifest.source.commit}:schema-${manifest.schemaVersion}`
    )
    .join('|')
}

function cacheKeyFor(manifests: InstalledManifest[], tuple: string): string {
  return `${tuple}|paths:${manifests.map(({ path }) => path).join('|')}`
}

export function clearCatalogCache() {
  catalogCache.clear()
}

export function loadInstalledCatalog(cwd = process.cwd()): CatalogLoadResult {
  const resolutions = readAllInstalledManifests(cwd)
  const issues = resolutions.flatMap(({ result }) =>
    result.ok ? [] : [result.issue]
  )
  if (issues.length > 0) return { ok: false, issues }

  const manifests = resolutions.flatMap(({ result }) =>
    result.ok ? [result.value] : []
  )
  const packageTuple = tupleFor(manifests)
  const cacheKey = cacheKeyFor(manifests, packageTuple)
  const cached = catalogCache.get(cacheKey)
  if (cached) return { ok: true, catalog: cached, cacheHit: true }

  const packages = manifests.map(({ kind, manifest, path }) => ({
    kind,
    name: manifest.package.name,
    version: manifest.package.version,
    schemaVersion: manifest.schemaVersion,
    source: manifest.source,
    manifestPath: path,
  }))
  const entities = resolutions.flatMap(({ spec, result }) => {
    if (!result.ok) return []
    return collectionFor(result.value.manifest, spec.collection).flatMap(
      (entity) => {
        const normalized = catalogEntity(
          spec.kind,
          result.value.manifest.package.name,
          entity
        )
        return normalized ? [normalized] : []
      }
    )
  })
  const catalog = { cacheKey, packageTuple, packages, entities }
  catalogCache.set(cacheKey, catalog)
  return { ok: true, catalog, cacheHit: false }
}
