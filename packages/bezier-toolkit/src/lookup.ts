import type {
  BezierCatalog,
  CatalogEntity,
  LookupMatch,
  LookupResult,
} from './types.js'

function normalized(value: string): string {
  return value.trim().toLocaleLowerCase('en-US')
}

function exactMatch(
  entity: CatalogEntity,
  query: string
): LookupMatch['matchedBy'] | null {
  if (normalized(entity.name) === query) return 'name'
  if (normalized(entity.canonicalName) === query) return 'canonical'
  if (entity.aliases.some((alias) => normalized(alias) === query))
    return 'alias'
  return null
}

function includesQuery(entity: CatalogEntity, query: string): boolean {
  return [entity.name, entity.canonicalName, ...entity.aliases].some((value) =>
    normalized(value).includes(query)
  )
}

function sortMatches(a: LookupMatch, b: LookupMatch): number {
  return (
    a.kind.localeCompare(b.kind) ||
    a.name.localeCompare(b.name) ||
    a.packageName.localeCompare(b.packageName)
  )
}

export function lookup(catalog: BezierCatalog, rawQuery: string): LookupResult {
  const query = normalized(rawQuery)
  if (!query) {
    return { found: false, query: rawQuery, reason: 'unknown', matches: [] }
  }
  const exact = catalog.entities.flatMap((entity) => {
    const matchedBy = exactMatch(entity, query)
    return matchedBy ? [{ ...entity, matchedBy }] : []
  })
  if (exact.length > 0) {
    return {
      found: true,
      query: rawQuery,
      exact: true,
      matches: exact.sort(sortMatches),
    }
  }

  const partial = catalog.entities
    .filter((entity) => includesQuery(entity, query))
    .slice(0, 20)
    .map((entity): LookupMatch => ({ ...entity, matchedBy: 'substring' }))
    .sort(sortMatches)
  if (partial.length > 0) {
    return {
      found: true,
      query: rawQuery,
      exact: false,
      matches: partial,
    }
  }

  return { found: false, query: rawQuery, reason: 'unknown', matches: [] }
}
