export interface BezierMemberMetadata {
  requiresAncestor?: readonly string[]
}

export interface BezierUsageMetadata {
  when?: readonly string[]
  avoid?: readonly string[]
}

export interface BezierMetadata {
  model: 'compound' | 'independent'
  root: string
  parts: Readonly<Record<string, BezierMemberMetadata>>
  independent: Readonly<Record<string, Record<string, never>>>
  usage?: BezierUsageMetadata
}

/**
 * Adds statically extractable semantic relationships to a Storybook family.
 * Source exports and Props remain the API source of truth.
 */
export function defineBezierMetadata<const Metadata extends BezierMetadata>(
  metadata: Metadata
): Metadata {
  return metadata
}
