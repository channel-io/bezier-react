import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'

import {
  BEZIER_PACKAGES,
  type BezierManifest,
  type BezierPackageSpec,
  type InstalledManifestResult,
  SUPPORTED_MANIFEST_SCHEMA_MAJOR,
} from './types.js'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isStringProperty(
  value: Record<string, unknown>,
  property: string
): boolean {
  return typeof value[property] === 'string'
}

function isModuleResolutionError(error: unknown): boolean {
  if (!isRecord(error)) return false
  return (
    error.code === 'MODULE_NOT_FOUND' ||
    error.code === 'ERR_PACKAGE_PATH_NOT_EXPORTED'
  )
}

function validateManifestShape(
  value: unknown,
  spec: BezierPackageSpec
): value is BezierManifest {
  if (!isRecord(value)) return false
  if (!isStringProperty(value, 'schemaVersion')) return false
  if (!isRecord(value.package)) return false
  if (!isStringProperty(value.package, 'name')) return false
  if (!isStringProperty(value.package, 'version')) return false
  if (value.package.name !== spec.name) return false
  if (!isRecord(value.source)) return false
  if (!isStringProperty(value.source, 'repository')) return false
  if (!isStringProperty(value.source, 'commit')) return false
  if (!isStringProperty(value.source, 'entrypoint')) return false
  return Array.isArray(value[spec.collection])
}

function schemaMajor(schemaVersion: string): number | null {
  const match = /^(\d+)\./.exec(schemaVersion)
  return match ? Number(match[1]) : null
}

export function readInstalledManifest(
  spec: BezierPackageSpec,
  cwd = process.cwd()
): InstalledManifestResult {
  const consumerRequire = createRequire(join(resolve(cwd), 'package.json'))
  const manifestSpecifier = `${spec.name}/manifest.json`
  let manifestRequire = consumerRequire
  let manifestPath: string

  try {
    if ('resolveFrom' in spec) {
      const resolutionAnchor = consumerRequire.resolve(spec.resolveFrom)
      manifestRequire = createRequire(resolutionAnchor)
    }
    manifestPath = manifestRequire.resolve(manifestSpecifier)
  } catch (error) {
    if (!isModuleResolutionError(error)) throw error
    return {
      ok: false,
      issue: {
        code: 'missing_manifest',
        packageName: spec.name,
        path: null,
        message:
          'resolveFrom' in spec
            ? `Cannot resolve ${manifestSpecifier} through ${spec.resolveFrom} from ${resolve(cwd)}.`
            : `Cannot resolve ${manifestSpecifier} from ${resolve(cwd)}.`,
      },
    }
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(readFileSync(manifestPath, 'utf8'))
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error
    return {
      ok: false,
      issue: {
        code: 'invalid_manifest',
        packageName: spec.name,
        path: manifestPath,
        message: `${manifestSpecifier} is not valid JSON.`,
      },
    }
  }

  if (!validateManifestShape(parsed, spec)) {
    return {
      ok: false,
      issue: {
        code: 'invalid_manifest',
        packageName: spec.name,
        path: manifestPath,
        message: `${manifestSpecifier} does not match the required manifest shape.`,
      },
    }
  }

  const actualMajor = schemaMajor(parsed.schemaVersion)
  if (actualMajor !== SUPPORTED_MANIFEST_SCHEMA_MAJOR) {
    return {
      ok: false,
      issue: {
        code: 'schema_mismatch',
        packageName: spec.name,
        path: manifestPath,
        actualSchemaVersion: parsed.schemaVersion,
        supportedSchemaMajor: SUPPORTED_MANIFEST_SCHEMA_MAJOR,
        message: `${manifestSpecifier} uses schema ${parsed.schemaVersion}; supported major is ${SUPPORTED_MANIFEST_SCHEMA_MAJOR}.`,
      },
    }
  }

  return {
    ok: true,
    value: {
      kind: spec.kind,
      path: manifestPath,
      manifest: parsed,
    },
  }
}

export function readAllInstalledManifests(cwd = process.cwd()) {
  return BEZIER_PACKAGES.map((spec) => ({
    spec,
    result: readInstalledManifest(spec, cwd),
  }))
}
