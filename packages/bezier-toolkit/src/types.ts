export const SUPPORTED_MANIFEST_SCHEMA_MAJOR = 1

export const BEZIER_PACKAGES = [
  {
    kind: 'component',
    name: '@channel.io/bezier-react',
    collection: 'components',
  },
  {
    kind: 'icon',
    name: '@channel.io/bezier-icons',
    collection: 'icons',
  },
  {
    kind: 'token',
    name: '@channel.io/bezier-tokens',
    collection: 'tokens',
    resolveFrom: '@channel.io/bezier-react/manifest.json',
  },
] as const

export type BezierPackageSpec = (typeof BEZIER_PACKAGES)[number]
export type CatalogEntityKind = BezierPackageSpec['kind']
export type ManifestCollection = BezierPackageSpec['collection']

export interface ManifestPackage {
  name: string
  version: string
}

export interface ManifestSource {
  repository: string
  commit: string
  entrypoint: string
}

export interface BezierManifest {
  schemaVersion: string
  package: ManifestPackage
  source: ManifestSource
  components?: Record<string, unknown>[]
  icons?: Record<string, unknown>[]
  tokens?: Record<string, unknown>[]
}

export type ManifestIssueCode =
  | 'invalid_manifest'
  | 'missing_manifest'
  | 'schema_mismatch'

export interface ManifestIssue {
  code: ManifestIssueCode
  packageName: string
  message: string
  path: string | null
  actualSchemaVersion?: string
  supportedSchemaMajor?: number
}

export interface InstalledManifest {
  kind: CatalogEntityKind
  path: string
  manifest: BezierManifest
}

export type InstalledManifestResult =
  | { ok: true; value: InstalledManifest }
  | { ok: false; issue: ManifestIssue }

export interface CatalogPackage {
  kind: CatalogEntityKind
  name: string
  version: string
  schemaVersion: string
  source: ManifestSource
  manifestPath: string
}

export interface CatalogEntity {
  kind: CatalogEntityKind
  name: string
  canonicalName: string
  packageName: string
  aliases: string[]
  deprecated: boolean
  replacement: string | null
  data: Record<string, unknown>
}

export interface BezierCatalog {
  cacheKey: string
  packageTuple: string
  packages: CatalogPackage[]
  entities: CatalogEntity[]
}

export type CatalogLoadResult =
  | { ok: true; catalog: BezierCatalog; cacheHit: boolean }
  | { ok: false; issues: ManifestIssue[] }

export interface LookupMatch extends CatalogEntity {
  matchedBy: 'alias' | 'canonical' | 'name' | 'substring'
}

export type LookupResult =
  | {
      found: true
      query: string
      exact: boolean
      matches: LookupMatch[]
    }
  | {
      found: false
      query: string
      reason: 'unknown'
      matches: []
    }
