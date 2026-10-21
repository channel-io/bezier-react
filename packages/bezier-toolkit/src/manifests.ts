import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'

import {
  BEZIER_PACKAGES,
  type BezierManifest,
  type BezierPackageSpec,
  type InstalledManifestResult,
  SUPPORTED_MANIFEST_SCHEMA_MAJOR,
  SUPPORTED_REACT_MANIFEST_SCHEMA_MAJORS,
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
  const match = /^(\d+)\.\d+\.\d+$/u.exec(schemaVersion)
  return match ? Number(match[1]) : null
}

function validRule(value: unknown): boolean {
  if (!isRecord(value)) return false
  if (typeof value.condition !== 'string' || !value.condition.trim())
    return false
  if (!['web', 'mobile', null].includes(value.platform as string | null))
    return false
  if (
    ![value.because, value.useInstead].every(
      (field) => field === null || typeof field === 'string'
    )
  )
    return false
  if (
    'guidance' in value &&
    (typeof value.guidance !== 'string' || !value.guidance.trim())
  )
    return false
  return Object.keys(value).every((key) =>
    ['condition', 'because', 'useInstead', 'platform', 'guidance'].includes(key)
  )
}

function validUsage(value: unknown): boolean {
  if (value === null) return true
  if (!isRecord(value) || !isRecord(value.source)) return false
  if (
    ![value.when, value.avoid].every(
      (rules) =>
        Array.isArray(rules) && rules.length > 0 && rules.every(validRule)
    )
  )
    return false
  const source = value.source
  return (
    Object.keys(value).every((key) =>
      ['when', 'avoid', 'source'].includes(key)
    ) &&
    Object.keys(source).every((key) =>
      ['repository', 'commit', 'path', 'sha256'].includes(key)
    ) &&
    source.repository === 'https://github.com/channel-io/core-bezier-system' &&
    typeof source.commit === 'string' &&
    /^[a-f0-9]{40}$/u.test(source.commit) &&
    typeof source.path === 'string' &&
    /^docs\/components\/[A-Za-z][A-Za-z0-9]*-spec\.md$/u.test(source.path) &&
    typeof source.sha256 === 'string' &&
    /^[a-f0-9]{64}$/u.test(source.sha256)
  )
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
  const supported: readonly number[] =
    spec.kind === 'component'
      ? SUPPORTED_REACT_MANIFEST_SCHEMA_MAJORS
      : [SUPPORTED_MANIFEST_SCHEMA_MAJOR]
  const supportedSchemaMajor = Math.max(...supported)
  if (actualMajor === null || !supported.includes(actualMajor)) {
    return {
      ok: false,
      issue: {
        code: 'schema_mismatch',
        packageName: spec.name,
        path: manifestPath,
        actualSchemaVersion: parsed.schemaVersion,
        supportedSchemaMajor,
        message: `${manifestSpecifier} uses schema ${parsed.schemaVersion}; supported majors: ${supported.join(', ')}.`,
      },
    }
  }

  if (
    spec.kind === 'component' &&
    actualMajor === 2 &&
    !parsed.components?.every(
      (component) =>
        isRecord(component) &&
        isRecord(component.semantics) &&
        validUsage(component.semantics.usage)
    )
  ) {
    return {
      ok: false,
      issue: {
        code: 'invalid_manifest',
        packageName: spec.name,
        path: manifestPath,
        message: `${manifestSpecifier} has invalid structured usage criteria.`,
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
